"use client";

import React, { useState, FormEvent, useRef } from "react";

export default function RsvpForm() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent React page reload
    if (formRef.current) {
      formRef.current.submit(); // Submit the form to Google
      setSubmitted(true); // Show thank-you message
    }
  };

  return (
    <section
      id="rsvp"
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-[#F6F5FB] to-[#EDE8F6]"
    >
      <div className="absolute inset-0 -z-10 bg-[url('/images/floral-bg.png')] opacity-10 bg-cover bg-center"></div>

      <div className="max-w-2xl w-full bg-white/80 backdrop-blur-lg border border-white/60 shadow-2xl rounded-3xl p-8 md:p-12 relative">
        
        <h2
          className="text-center text-4xl md:text-5xl font-bold mb-6"
          style={{ fontFamily: "var(--font-great-vibes)", color: "#C8A2C8" }}
        >
          RSVP
        </h2>

        <p
          className="text-center text-gray-700 mb-8"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          We are excited to celebrate this moment with you. Kindly confirm your attendance below.
        </p>

        {submitted ? (
          <div className="text-center text-green-700 text-lg font-semibold">
            Thank you for your response! 💕
          </div>
        ) : (
          <form
            ref={formRef}
            action="https://docs.google.com/forms/d/e/1FAIpQLScrCGBrYUHBmiHHx7ljECGdxwow2FO2VPs1bq8bZqOA5KlaHw/formResponse"
            method="POST"
            target="_blank"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Full Name */}
            <div>
              <label className="block mb-2 text-gray-700 font-medium">Full Name *</label>
              <input
                required
                name="entry.2046686096"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-300 focus:outline-none"
                placeholder="Jane Doe"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 text-gray-700 font-medium">Phone Number *</label>
              <input
                required
                name="entry.782757517"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-300 focus:outline-none"
                placeholder="09191111111"
              />
            </div>

            {/* Attendance */}
            <div>
              <label className="block mb-2 text-gray-700 font-medium">Will you attend? *</label>
              <select
                required
                name="entry.1948439219"
                className="w-full p-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-pink-300 focus:outline-none"
              >
                <option value="">Select one</option>
                <option value="Yes, I will attend">Yes, I will attend</option>
                <option value="No, I cannot attend">No, I cannot attend</option>
              </select>
            </div>

            {/* Number of Guests */}
            <div>
              <label className="block mb-2 text-gray-700 font-medium">Number of Guests *</label>
              <input
                required
                name="entry.24008747"
                type="number"
                min={0}
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-300 focus:outline-none"
                placeholder="0"
              />
            </div>

            {/* Message (optional) */}
            <div>
              <label className="block mb-2 text-gray-700 font-medium">Message (optional)</label>
              <textarea
                name="entry.348654170"
                rows={4}
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-300 focus:outline-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-2xl bg-[#B4CCB9] text-white text-lg font-semibold hover:bg-pink-400 hover:scale-[1.02] transition"
            >
              Submit RSVP
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
