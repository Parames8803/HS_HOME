import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    // Prepare email content
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

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Application submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
