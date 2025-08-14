import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const resume = formData.get('resume') as File | null;
    const coverLetter = formData.get('coverLetter') as string;
    const additionalLinks = formData.get('additionalLinks') as string;
    const jobTitle = formData.get('jobTitle') as string;

    if (!name || !email || !jobTitle) {
      return NextResponse.json({ message: 'Name, Email, and Job Title are required.' }, { status: 400 });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use other services or SMTP
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Prepare main email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER, // Send to a specific recipient or your own email
      subject: `New Job Application for ${jobTitle} from ${name}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Additional Links:</strong></p>
        <p>${additionalLinks || 'N/A'}</p>
        <p><strong>Cover Letter:</strong></p>
        <p>${coverLetter || 'N/A'}</p>
      `,
      attachments: resume ? [{
        filename: resume.name,
        content: Buffer.from(await resume.arrayBuffer()),
        contentType: resume.type,
      }] : [],
    };

    // Send main email
    try {
      await transporter.sendMail(mailOptions);
      console.log('Main application email sent successfully.');
    } catch (mainErr) {
      console.error('Error sending main email:', mainErr);
      throw mainErr; // Rethrow to fail the request if main email fails
    }

    // Send confirmation email to applicant
    if (email) {
      const confirmationMailOptions = {
        from: process.env.EMAIL_USER,
        to: email, // Send to the applicant's email
        subject: `Application Received: ${jobTitle} - HYNOX`,
        html: `
          <h2>Dear ${name},</h2>
          <p>Thank you for your application for the <strong>${jobTitle}</strong> position at HYNOX.</p>
          <p>We have received your application and will review it shortly. We appreciate your interest in joining our team.</p>
          <p>If your qualifications match our requirements, we will contact you for the next steps in the hiring process.</p>
          <br/>
          <p>Best regards,</p>
          <p>The HYNOX Team</p>
        `,
      };

      try {
        await transporter.sendMail(confirmationMailOptions);
        console.log('Confirmation email sent to applicant.');
      } catch (confErr) {
        console.error('Error sending confirmation email:', confErr);
        // Note: We don't throw here to avoid failing the whole request if only confirmation fails
      }
    } else {
      console.warn('Applicant email not provided, skipping confirmation email.');
    }

    // --- Google Sheets Logic ---
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });

      const newRow = [jobTitle, name, email, phone || 'N/A', coverLetter || 'N/A', additionalLinks || 'N/A'];

      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_CAREERS_ID,
        range: 'CAREERS_APPLICATIONS!A:F',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [newRow],
        },
      });

      console.log('Careers application data successfully saved to Google Sheet.');

    } catch (sheetError) {
      console.error('Error saving careers application data to Google Sheet:', sheetError);
    }

    return NextResponse.json({ message: 'Application submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
