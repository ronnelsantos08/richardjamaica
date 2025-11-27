"use client";

import { Heart, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FOOTER */}
      <footer
        className="relative w-full py-10 text-center bg-gradient-to-r 
          from-[#E6E6FA] via-[#F8EAFE] to-[#FFE4F0] 
          border-t border-pink-200 shadow-inner overflow-visible"
      >
        {/* Overlapping Floral Border */}
        <div className="absolute sm:-top-40 -top-20 left-0 w-full flex overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <img
              key={i}
              src="/images/footerborder.png"
              className="h-40 sm:h-50 opacity-90 -mr-6"
              alt="divider"
            />
          ))}
        </div>

        <h2 className="font-serif text-3xl text-[#6A4C93] font-semibold mt-10">
          Richard <Heart className="inline w-6 h-6 text-pink-500" /> Jamaica
        </h2>

        <p className="mt-2 text-[#8A6BA1] text-lg tracking-wide font-light">
          January 18, 2026 · Forever Starts Here
        </p>

        <div className="w-24 mx-auto mt-4 border-t border-purple-300 opacity-50"></div>

        <p className="mt-6 text-sm text-purple-800/70">
          Thank you for being part of our special day.
        </p>

        {/* FAQ BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="mt-6 px-6 py-2 bg-[#6A4C93] text-white text-sm font-medium 
            rounded-full shadow-lg hover:bg-purple-800 transition flex items-center mx-auto gap-2"
        >
          <HelpCircle className="w-4 h-4" /> FAQs
        </button>

        <p className="mt-6 text-sm text-purple-800/70">
          Powered by:{" "}
          <a
            href="https://ronnelsantos.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-purple-700 hover:text-purple-900 transition"
          >
            WebWorks
          </a>
        </p>
      </footer>

      {/* FAQ MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white max-w-lg w-full rounded-2xl shadow-2xl p-6 overflow-y-auto max-h-[80vh]
                border border-purple-200"
            >
              <h3 className="text-2xl font-semibold text-[#6A4C93] text-center mb-4">
                Frequently Asked Questions
              </h3>

              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-purple-700">WHEN IS THE RSVP DEADLINE?</p>
                  <p>
                    The RSVP deadline is December 28, 2025. We kindly ask that you RSVP by this
                    date to ensure we can make all the necessary arrangements for your presence.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-purple-700">CAN I BRING A PLUS ONE?</p>
                  <p>
                    We've reserved a specific number of seats in honor of our guests, so
                    unfortunately, we're unable to accommodate plus ones. We hope you understand
                    and still join us for our special day!
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-purple-700">WILL THERE BE ENOUGH PARKING SPACE?</p>
                  <p>Yes, there will be ample parking available at both of our venues.</p>
                </div>

                <div>
                  <p className="font-semibold text-purple-700">
                    WILL THERE BE FOOD OPTIONS FOR DIETARY RESTRICTIONS?
                  </p>
                  <p>
                    Of course! We'll happily accommodate dietary restrictions; please let us know
                    about any allergies or dietary needs when you RSVP.
                  </p>
                </div>

                {/* REMINDERS SECTION */}
                <h3 className="text-xl font-semibold text-[#6A4C93] mt-6">
                  Reminders
                </h3>

                <div>
                  <p className="font-semibold text-purple-700">UNPLUGGED CEREMONY</p>
                  <p>
                    We kindly ask our guests to turn off all phones and cameras during our
                    ceremony. Don't worry! Our professional photographer will capture every special
                    moment and we can't wait to share them with you!
                  </p>
                </div>
              </div>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                className="mt-6 w-full py-2 bg-purple-700 text-white rounded-full 
                hover:bg-purple-900 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
