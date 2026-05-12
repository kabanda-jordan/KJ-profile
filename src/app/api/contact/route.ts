import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body as {
      name: string;
      email: string;
      subject: string;
      message: string;
    };

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "kabandajordan784@gmail.com",
      subject: `[Portfolio Contact] ${subject}`,
      html: `
        <div style="font-family: monospace; background: #0a0a0a; color: #e2e8f0; padding: 32px; border-radius: 8px; max-width: 600px;">
          <h2 style="color: #00ff88; margin: 0 0 24px;">New message from your portfolio</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #888; width: 80px;">From</td>
              <td style="padding: 8px 0; color: #e2e8f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Email</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${email}" style="color: #00ff88;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Subject</td>
              <td style="padding: 8px 0; color: #e2e8f0;">${subject}</td>
            </tr>
          </table>

          <hr style="border: none; border-top: 1px solid #222; margin: 24px 0;" />

          <p style="color: #888; margin: 0 0 8px; font-size: 12px;">MESSAGE</p>
          <p style="color: #e2e8f0; white-space: pre-wrap; line-height: 1.6; margin: 0;">${message}</p>

          <hr style="border: none; border-top: 1px solid #222; margin: 24px 0;" />
          <p style="color: #444; font-size: 11px; margin: 0;">
            Sent via kabanda-jordan.vercel.app portfolio contact form
          </p>
        </div>
      `,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
