import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, phone, subject, interest, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use other services or SMTP
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'thehynoxofficial@gmail.com', // The email address from the footer
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

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}
