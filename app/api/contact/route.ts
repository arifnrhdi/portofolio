import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
    }

    const { name, email, subject, message } = body as Record<string, unknown>;
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !subject.trim() ||
      !message.trim() ||
      name.length > 100 ||
      email.length > 254 ||
      subject.length > 150 ||
      message.length > 5000
    ) {
      return NextResponse.json({ error: "Please check the form fields." }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT);
    const smtpSecure = process.env.SMTP_SECURE?.toLowerCase() === "true";
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_CODE;
    const recipient = process.env.CONTACT_TO_EMAIL;

    if (
      !smtpHost ||
      !Number.isInteger(smtpPort) ||
      smtpPort <= 0 ||
      !smtpUser ||
      !smtpPassword ||
      !recipient
    ) {
      console.error("SMTP or contact email configuration is incomplete.");
      return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: recipient,
        pass: smtpPassword,
      },
    });

    await transporter.sendMail({
      from: `Portfolio Contact <${recipient}>`,
      to: recipient,
      replyTo: email.trim(),
      subject: `[Portfolio] ${subject.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json({ error: "Could not send message." }, { status: 500 });
  }
}
