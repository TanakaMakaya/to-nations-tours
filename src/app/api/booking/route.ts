import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type BookingRequest = {
  tripName?: string;
  fullName?: string;
  email?: string;
  country?: string;
  phone?: string;
  travelDate?: string;
  adults?: string;
  children?: string;
  subject?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BookingRequest;

    const requiredFields = [
      body.tripName,
      body.fullName,
      body.email,
      body.country,
      body.phone,
      body.adults,
      body.subject,
      body.message,
    ];

    if (requiredFields.some((field) => !field?.toString().trim())) {
      return NextResponse.json(
        { message: "Please complete all required fields." },
        { status: 400 },
      );
    }

    const tripName = escapeHtml(body.tripName!.trim());
    const fullName = escapeHtml(body.fullName!.trim());
    const email = body.email!.trim();
    const country = escapeHtml(body.country!.trim());
    const phone = escapeHtml(body.phone!.trim());
    const travelDate = body.travelDate
      ? escapeHtml(body.travelDate)
      : "Not specified";
    const adults = escapeHtml(body.adults!.toString());
    const children = body.children
      ? escapeHtml(body.children.toString())
      : "0";
    const subject = escapeHtml(body.subject!.trim());
    const message = escapeHtml(body.message!.trim()).replaceAll(
      "\n",
      "<br />",
    );

    const { error } = await resend.emails.send({
      from:
        process.env.BOOKING_FROM_EMAIL ||
        "To Nations Tours <bookings@tonationstours.com>",
      to: ["info@tonationstours.com"],
      replyTo: email,
      subject: `${subject} — ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #071126; line-height: 1.6;">
          <h1 style="color: #2f80b9;">New booking enquiry</h1>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold;">Trip</td>
              <td style="padding: 8px;">${tripName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Name</td>
              <td style="padding: 8px;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Email</td>
              <td style="padding: 8px;">${escapeHtml(email)}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Country</td>
              <td style="padding: 8px;">${country}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Phone</td>
              <td style="padding: 8px;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Travel date</td>
              <td style="padding: 8px;">${travelDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Adults</td>
              <td style="padding: 8px;">${adults}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Children</td>
              <td style="padding: 8px;">${children}</td>
            </tr>
          </table>

          <h2 style="margin-top: 24px;">Message</h2>
          <p>${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { message: "The email could not be sent. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Booking enquiry sent successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Booking route error:", error);

    return NextResponse.json(
      { message: "Something went wrong while sending your enquiry." },
      { status: 500 },
    );
  }
}