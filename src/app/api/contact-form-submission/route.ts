import { FormData } from "@/app/(pages)/contact/page";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "leerobertdyer@gmail.com",
    pass: process.env.GMAIL_PASS,
  },
});

async function sendEmail({ name, email, message }: FormData) {
  try {
    await transporter.sendMail({
      from: email,
      to: "lee.dyer.dev@gmail.com",
      subject: "New Tiny Sun Form Submission",
      html: `<p>You have received a new form submission:</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p>Message: ${message}</p>`,
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email:" + error);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await sendEmail(body);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (e) {
    return NextResponse.json({ errors: e }, { status: 400 });
  }
}
