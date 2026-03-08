import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, company, service, message } = body;

        // Validate required fields
        if (!firstName || !email || !message) {
            return NextResponse.json(
                { error: "Please fill in all required fields." },
                { status: 400 }
            );
        }

        const serviceLabels: Record<string, string> = {
            email: "Email Marketing",
            seo: "SEO Optimisation",
            social: "Social Media Creatives & Management",
            multiple: "Multiple Services",
            "not-sure": "Not Sure Yet",
        };

        const serviceName = serviceLabels[service] || service || "Not specified";

        // Send notification email to the business
        await resend.emails.send({
            from: "M&B Strategy <onboarding@resend.dev>",
            to: process.env.CONTACT_EMAIL || "hello@marketingnbrandingstrategy.com",
            subject: `New Inquiry from ${firstName} ${lastName} — ${serviceName}`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
                    <div style="background: linear-gradient(135deg, #0a1628, #1e3a5f); border-radius: 16px; padding: 32px; margin-bottom: 24px;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Strategy Inquiry</h1>
                        <p style="color: #94a3b8; margin: 8px 0 0; font-size: 14px;">From your M&B Strategy website contact form</p>
                    </div>
                    
                    <div style="background: #f8fafc; border-radius: 12px; padding: 24px; margin-bottom: 16px;">
                        <h3 style="color: #0a1628; margin: 0 0 4px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Contact Details</h3>
                        <table style="width: 100%; border-collapse: collapse; margin-top: 12px;">
                            <tr style="border-bottom: 1px solid #e2e8f0;">
                                <td style="padding: 10px 0; color: #64748b; font-size: 14px; width: 140px;">Name</td>
                                <td style="padding: 10px 0; color: #0a1628; font-size: 14px; font-weight: 600;">${firstName} ${lastName}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e2e8f0;">
                                <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Email</td>
                                <td style="padding: 10px 0; color: #0a1628; font-size: 14px; font-weight: 600;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e2e8f0;">
                                <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Company</td>
                                <td style="padding: 10px 0; color: #0a1628; font-size: 14px; font-weight: 600;">${company || "Not provided"}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Service</td>
                                <td style="padding: 10px 0; color: #0a1628; font-size: 14px; font-weight: 600;">${serviceName}</td>
                            </tr>
                        </table>
                    </div>

                    <div style="background: #f8fafc; border-radius: 12px; padding: 24px;">
                        <h3 style="color: #0a1628; margin: 0 0 12px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Message</h3>
                        <p style="color: #334155; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
                    </div>

                    <p style="color: #94a3b8; font-size: 12px; text-align: center; margin-top: 32px;">
                        This email was sent from the M&B Strategy website contact form.
                    </p>
                </div>
            `,
        });

        // Send confirmation email to the user
        await resend.emails.send({
            from: "M&B Strategy <onboarding@resend.dev>",
            to: email,
            subject: "We've received your inquiry — M&B Strategy",
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
                    <div style="background: linear-gradient(135deg, #0a1628, #1e3a5f); border-radius: 16px; padding: 32px; margin-bottom: 24px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Thank You, ${firstName}!</h1>
                        <p style="color: #94a3b8; margin: 12px 0 0; font-size: 15px;">We've received your inquiry and we're on it.</p>
                    </div>

                    <div style="padding: 0 8px;">
                        <p style="color: #334155; font-size: 15px; line-height: 1.8;">
                            Hi ${firstName},
                        </p>
                        <p style="color: #334155; font-size: 15px; line-height: 1.8;">
                            Thanks for reaching out to M&B Strategy! We've received your message about <strong>${serviceName}</strong> and one of our strategists will review your inquiry within <strong>24 business hours</strong>.
                        </p>
                        <p style="color: #334155; font-size: 15px; line-height: 1.8;">
                            In the meantime, feel free to explore our services and see how we've helped other brands grow.
                        </p>

                        <div style="text-align: center; margin: 32px 0;">
                            <a href="https://marketingnbrandingstrategy.com/services" style="display: inline-block; background: linear-gradient(135deg, #2563eb, #1d4ed8); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 12px; font-weight: 600; font-size: 15px;">
                                Explore Our Services
                            </a>
                        </div>

                        <p style="color: #334155; font-size: 15px; line-height: 1.8;">
                            Looking forward to connecting!<br/>
                            <strong>The M&B Strategy Team</strong>
                        </p>
                    </div>

                    <p style="color: #94a3b8; font-size: 12px; text-align: center; margin-top: 32px; border-top: 1px solid #e2e8f0; padding-top: 16px;">
                        M&B Strategy · Marketing & Branding That Drives Growth
                    </p>
                </div>
            `,
        });

        return NextResponse.json(
            { success: true, message: "Email sent successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Failed to send email:", error);
        return NextResponse.json(
            { error: "Failed to send email. Please try again later." },
            { status: 500 }
        );
    }
}
