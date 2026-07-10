"use client";

import { FormEvent, useState } from "react";

type BookingFormProps = {
  tripName?: string;
};

type FormStatus = "idle" | "sending" | "success" | "error";

export default function BookingForm({
  tripName = "",
}: BookingFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const bookingData = {
      tripName: formData.get("tripName"),
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      country: formData.get("country"),
      phone: formData.get("phone"),
      travelDate: formData.get("travelDate"),
      adults: formData.get("adults"),
      children: formData.get("children"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your enquiry.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-4xl bg-white p-8 shadow-sm md:p-10">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">
          ✓
        </div>

        <h2 className="mt-6 font-serif text-4xl text-[#071126]">
          Enquiry received
        </h2>

        <p className="mt-4 max-w-xl leading-7 text-slate-600">
          Thank you for contacting To Nations Tours. One of our consultants
          will contact you shortly.
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 rounded-full bg-[#2f80b9] px-7 py-3 font-semibold text-white transition hover:bg-[#246fa3]"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-4xl bg-white p-6 shadow-sm md:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="md:col-span-2">
          <label
            htmlFor="tripName"
            className="mb-2 block text-sm font-semibold text-[#071126]"
          >
            Trip name
          </label>

          <input
            id="tripName"
            name="tripName"
            type="text"
            defaultValue={tripName}
            readOnly={Boolean(tripName)}
            required
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-[#2f80b9]"
          />
        </div>

        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-semibold text-[#071126]"
          >
            Full name
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#2f80b9]"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-[#071126]"
          >
            Email address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#2f80b9]"
          />
        </div>

        <div>
          <label
            htmlFor="country"
            className="mb-2 block text-sm font-semibold text-[#071126]"
          >
            Country
          </label>

          <input
            id="country"
            name="country"
            type="text"
            autoComplete="country-name"
            required
            className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#2f80b9]"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text-[#071126]"
          >
            Contact number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#2f80b9]"
          />
        </div>

        <div>
          <label
            htmlFor="travelDate"
            className="mb-2 block text-sm font-semibold text-[#071126]"
          >
            Preferred travel date
          </label>

          <input
            id="travelDate"
            name="travelDate"
            type="date"
            className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#2f80b9]"
          />
        </div>

        <div>
          <label
            htmlFor="adults"
            className="mb-2 block text-sm font-semibold text-[#071126]"
          >
            Number of adults
          </label>

          <input
            id="adults"
            name="adults"
            type="number"
            min="1"
            defaultValue="1"
            required
            className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#2f80b9]"
          />
        </div>

        <div>
          <label
            htmlFor="children"
            className="mb-2 block text-sm font-semibold text-[#071126]"
          >
            Number of children
          </label>

          <input
            id="children"
            name="children"
            type="number"
            min="0"
            defaultValue="0"
            className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#2f80b9]"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-semibold text-[#071126]"
          >
            Enquiry subject
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            defaultValue={
              tripName ? `Booking enquiry: ${tripName}` : "Tour booking enquiry"
            }
            required
            className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#2f80b9]"
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-[#071126]"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Tell us about your preferred dates, accommodation or special requests."
            required
            className="w-full resize-none rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-[#2f80b9]"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-6 rounded-2xl bg-red-50 px-5 py-4 text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 w-full rounded-full bg-[#2f80b9] px-8 py-4 font-bold text-white transition hover:bg-[#246fa3] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending enquiry..." : "Send enquiry"}
      </button>
    </form>
  );
}