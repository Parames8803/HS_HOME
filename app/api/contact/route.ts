import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

export async function POST(request: Request) {
  try {
    const { name, phone, subject, interest, message } = await request.json();

    // --- Email Sending Logic ---
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'thehynoxofficial@gmail.com',
      subject: `Contact Form: ${subject} (Interest: ${interest})`,
      html: `
        <p>Name: ${name}</p>
        <p>Phone: ${phone}</p>
        <p>Subject: ${subject}</p>
        <p>Interest: ${interest}</p>
        <p>Message: ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

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

      // UPDATED: The new row now matches your 5 columns
      const newRow = [name, phone || 'N/A', subject, interest, message];

      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        // UPDATED: The range is now A:E for 5 columns in the "Contacts" sheet
        range: 'HYNOX_LEADS!A:E', 
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [newRow],
        },
      });

      console.log('Contact data successfully saved to Google Sheet.');

    } catch (sheetError) {
      console.error('Error saving contact data to Google Sheet:', sheetError);
    }

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}
