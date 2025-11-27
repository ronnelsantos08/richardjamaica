"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Gift() {
  const calculateTimeLeft = () => {
    const target = new Date("2026-01-18T00:00:00");
    const now = new Date();
    const difference = target.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
    className="relative px-6 py-12 max-w-2xl mx-auto mt-16 
    bg-white/20 backdrop-blur-md shadow-xl rounded-3xl border border-purple-100
    bg-[url('/images/countdown.jpeg')] bg-cover bg-center bg-no-repeat
    overflow-hidden"
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/30 rounded-3xl pointer-events-none"></div>
  
    {/* Content above overlay */}
    <div className="relative z-10">
      {/* Title */}
      <h2 className="font-serif text-3xl text-[#ffffff] font-semibold text-center mb-4">
        Gift Guide
      </h2>
  
      <div className="w-20 mx-auto mb-6 border-t-2 border-purple-200 opacity-60"></div>
  
      {/* Countdown */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-serif text-purple-100 mb-2">
          Countdown to Our Wedding Day
        </h3>
  
        <div className="flex justify-center gap-4 text-white font-semibold text-lg">
          <div className="text-center">
            <p className="text-3xl">{timeLeft.days}</p>
            <span className="text-sm opacity-80">Days</span>
          </div>
          <div className="text-center">
            <p className="text-3xl">{timeLeft.hours}</p>
            <span className="text-sm opacity-80">Hours</span>
          </div>
          <div className="text-center">
            <p className="text-3xl">{timeLeft.minutes}</p>
            <span className="text-sm opacity-80">Minutes</span>
          </div>
          <div className="text-center">
            <p className="text-3xl">{timeLeft.seconds}</p>
            <span className="text-sm opacity-80">Seconds</span>
          </div>
        </div>
      </div>
  
      {/* Text */}
      <p className="text-center text-gray-100 leading-relaxed text-lg">
        Your presence on our special day is the greatest gift of all.
      </p>
  
      <p className="text-center text-gray-100 leading-relaxed mt-4 text-lg">
        However, should you wish to help us celebrate with a gift, we would be 
        grateful for monetary gifts or contributions to help us start our journey  
        as Husband &amp; Wife.
      </p>
  
      <p className="text-center text-[#dbc9f5] font-semibold mt-6 tracking-wide">
        THANK YOU
      </p>
  
      {/* Decoration – bouncing */}
      <motion.img
        src="/images/giftdeco.png"
        alt="Decoration"
        className="absolute -bottom-6 -right-6 w-32 opacity-95 pointer-events-none select-none"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  </div>
  
  );
}
