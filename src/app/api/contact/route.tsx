import { Resend } from "resend";
import { z } from "zod";

//to validate the contact form
const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
});

//to prevent html injection
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function parseBody(req: Request) {
  const contentType = req.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    return {
      success: false as const,
      error: "Expected application/json content type",
    };
  }

  const json = await req.json();
  return ContactSchema.safeParse(json);
}

export async function POST(req: Request): Promise<Response> {
  try {
    const parsed = await parseBody(req);
    if (!parsed.success) {
      return Response.json(
        { error: "Invalid input", issues: parsed.error },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: "Missing RESEND_API_KEY. Add it to your .env.local." },
        { status: 500 }
      );
    }

    const to = process.env.CONTACT_TO || "ahmedamrahmed73@gmail.com";
    const from =
      process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>";

    // Ensure Node.js runtime for Resend on Vercel
    const resend = new Resend(apiKey);
    const html = `
      <div style="font-family:Arial, Helvetica, sans-serif; line-height:1.6">
        <h2 style="margin:0;margin-bottom:8px">New Portfolio Contact</h2>
        <p style="margin:0;margin-bottom:8px"><strong>From:</strong> ${escapeHtml(
          name
        )} (${escapeHtml(email)})</p>
        <p style="white-space:pre-wrap;margin-top:16px">${escapeHtml(
          message
        )}</p>
      </div>
    `;
    const text = `New Portfolio Contact\nFrom: ${name} (${email})\n\n${message}`;
    const { error } = await resend.emails.send({
      from,
      to,
      subject: `New contact from ${name}`,
      replyTo: email,
      html,
      text,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 502 });
    }

    return Response.json({ success: true, message: "Email sent" });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json({ error: message }, { status: 500 });
  }
}
