"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      type: "splatchain",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="formSuccess">
        <strong>Message sent.</strong>
        <p>We&apos;ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <div className="formRow">
        <div className="formField">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
          />
        </div>
        <div className="formField">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div className="formField">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your interest — investing, piloting, or integrating SplatChain."
        />
      </div>
      <button
        type="submit"
        className="button primary"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send Message"}
        {status !== "sending" && <ArrowRightIcon />}
      </button>
      {status === "error" && (
        <p className="formError">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}