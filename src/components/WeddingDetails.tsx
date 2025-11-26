"use client";

import React, { useState, useEffect, useMemo, useRef } from 'react';

// Icons
const MapPin = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const Clock = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);
const Heart = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3.9 3.9 3 5.5l7 7Z"/>
  </svg>
);

// Tailwind theme colors
const themeColors = {
  lavender: '#E6E6FA',
  lilac: '#C8A2C8',
  pinkAccent: '#E76F85',
  dustyBlue: '#AABBC3',
  sageGreen: '#B4CCB9',
  ashGray: '#A9B3B8',
};

// Locations with updated Google Maps link
const LOCATIONS = [
  {
    type: 'Ceremony',
    time: '4:00 P.M',
    name: 'The Paradiso Terrestre',
    address: 'Molino - Paliparan Road, Bacoor City, Cavite',
    isRight: true,
    mapLink: 'https://maps.app.goo.gl/dku8R1T4NDK6xhmB8',
  },
  {
    type: 'Reception',
    name: 'Molino',
    address: 'Molino - Paliparan Road, Bacoor City, Cavite',
    isRight: false,
    mapLink: 'https://maps.app.goo.gl/dku8R1T4NDK6xhmB8',
  },
];

// Program Flow
const PROGRAM_FLOW = [
  { time: '3:30 P.M', description: 'Ceremony' },
  { time: '5:00 P.M', description: 'Cocktail & Grazing Table' },
  { time: '6:00 P.M', description: 'Post Ceremony Photos' },
  { time: '7:00 P.M', description: 'Reception Program' },
  { time: '8:00 P.M', description: 'Dinner' },
  { time: '10:00 P.M', description: 'Send off' },
  { time: '11:00 P.M', description: 'After party till late' },
];

// Theme details
const THEME_DETAILS = {
  theme: 'Spring Garden Wedding',
  colors: ['Lavender', 'Lilac', 'Pink', 'Dusty Blue', 'Ash Gray', 'Sage Green'],
};

// Color Swatch Component
const ColorSwatch = ({ colorName, hex }: { colorName: string; hex: string }) => (
  <div className="flex flex-col items-center p-2">
    <div className="w-10 h-10 rounded-full shadow-md transition duration-300 hover:scale-110" style={{ backgroundColor: hex }}></div>
    <span className="mt-2 text-xs text-gray-700 font-sans">{colorName}</span>
  </div>
);

// Location Card Component
const LocationCard = ({ location }: { location: typeof LOCATIONS[0] }) => {
  const containerClasses = location.isRight
    ? "flex flex-col items-end md:text-right"
    : "flex flex-col items-start md:text-left";
    
  const contentClasses = location.isRight
    ? `bg-[${themeColors.lavender}]/60 text-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300`
    : `bg-[${themeColors.sageGreen}]/60 text-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300`;

  return (
    <div className={containerClasses}>
      <div className={contentClasses}>
        <h3 className="font-serif text-2xl font-bold text-pinkAccent mb-2">{location.type}</h3>
        {location.time && <p className="font-sans text-lg text-gray-700 flex items-center mb-2"><Clock className="w-5 h-5 mr-2 text-pinkAccent"/> {location.time}</p>}
        <p className="font-serif text-xl font-semibold mb-2">{location.name}</p>
        <div className="flex items-center justify-between text-gray-600">
          <p className="italic text-sm">{location.address}</p>
          <a href={location.mapLink} target="_blank" rel="noopener noreferrer" className="text-pinkAccent hover:text-lilac transition transform hover:scale-110">
            <MapPin className="w-5 h-5"/>
          </a>
        </div>
      </div>
    </div>
  );
};

// Timeline Event Component
const TimelineEvent = ({ time, description, index }: { time: string; description: string; index: number }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { rootMargin: '0px 0px -10% 0px' });

    if (elementRef.current) observer.observe(elementRef.current);
    return () => { if (elementRef.current) observer.unobserve(elementRef.current); };
  }, []);

  const isLeft = index % 2 === 0;
  const animationClasses = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';
  const positionClasses = isLeft ? 'md:col-start-1 md:text-right md:pr-10' : 'md:col-start-3 md:text-left md:pl-10';
  const lineConnectorClasses = 'md:col-start-2 md:col-span-1 flex justify-center items-center';

  return (
    <div ref={elementRef} className={`relative grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 transition-all duration-1000 ease-out ${animationClasses}`} style={{ transitionDelay: `${index*150}ms` }}>
      <div className={`${positionClasses} col-span-full md:col-span-1 p-4 bg-white rounded-xl shadow-md border-l-4 border-pinkAccent md:border-l-0 md:border-r-4`}>
        <h4 className="font-serif text-xl font-bold text-lilac">{time}</h4>
        <p className="font-sans text-gray-700">{description}</p>
      </div>
      <div className={lineConnectorClasses}>
        <div className="w-1 h-full bg-dustyBlue/50 absolute top-0 bottom-0 hidden md:block"></div>
        <div className="w-5 h-5 rounded-full bg-pinkAccent border-4 border-white z-10 shadow-md"></div>
      </div>
      <div className="hidden md:block md:col-start-3 md:col-span-1"></div>
    </div>
  );
};

// Main Component
const WeddingDetails = () => {
  const colorSwatches = useMemo(() => [
    { name: 'Lavender', hex: themeColors.lavender },
    { name: 'Lilac', hex: themeColors.lilac },
    { name: 'Pink', hex: themeColors.pinkAccent },
    { name: 'Dusty Blue', hex: themeColors.dustyBlue },
    { name: 'Ash Gray', hex: themeColors.ashGray },
    { name: 'Sage Green', hex: themeColors.sageGreen },
  ], []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 flex justify-center">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-lilac leading-tight">Our Wedding Day</h1>
          <p className="font-sans text-xl text-gray-600 mt-2">A celebration of love in full bloom</p>
        </header>

        {/* Locations & Theme */}
        <section className="mb-12">
          <h2 className="font-serif text-4xl text-center font-bold text-pinkAccent mb-8">The Details</h2>

          {/* Locations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {LOCATIONS.map((loc, idx) => <LocationCard key={idx} location={loc} />)}
          </div>

          {/* Theme & Colors */}
          <div className="bg-dustyBlue/20 p-6 rounded-xl shadow-inner text-center mb-6">
            <h3 className="font-serif text-3xl font-semibold text-lilac mb-4">
              Theme: <span className="text-gray-700 font-normal">{THEME_DETAILS.theme}</span>
            </h3>
            <h4 className="font-sans text-lg font-medium text-gray-700 mb-4">Color Palette:</h4>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {colorSwatches.map(c => <ColorSwatch key={c.name} colorName={c.name} hex={c.hex}/>)}
            </div>

            {/* Sample Dress Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <img src="/images/dress1.jpg" alt="Sample Dress 1" className="w-full h-64 object-cover rounded-xl shadow-lg" />
              <img src="/images/dress2.png" alt="Sample Dress 2" className="w-full h-64 object-cover rounded-xl shadow-lg" />
            </div>

            {/* Dress Code */}
            <div className="text-left md:text-center bg-white/30 p-4 rounded-lg shadow-inner">
              <h4 className="font-serif text-2xl text-lilac font-semibold mb-2">Dress Code:</h4>
              <ul className="font-sans text-gray-700 space-y-1">
                <li>🌸 Ninang / VIP Sponsors: Ash Gray long gown dress</li>
                <li>🌸 Ninong / VIP Sponsors: Black suit, long white sleeves with gray necktie</li>
                <li>Guest Dress Code: Dress, Blouse, Polo shirts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Program Flow */}
        <section className="mt-12">
  <h2 className="font-serif text-4xl text-center font-bold text-lilac mb-12 flex items-center justify-center gap-3">
    <Clock className="w-8 h-8 text-pinkAccent" /> Program Flow{" "}
    <Heart className="w-8 h-8 text-pinkAccent" />
  </h2>

  <div className="relative timeline-container">
    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-dustyBlue/50 top-0 bottom-0"></div>
    {PROGRAM_FLOW.map((e, i) => (
      <TimelineEvent key={i} index={i} time={e.time} description={e.description} />
    ))}
  </div>

  {/* View Entourage Button */}
  <div className="flex justify-center mt-12">
    <a
      href="/entourage"
      className="px-8 py-3 rounded-full bg-pink-400 text-white font-serif text-lg shadow-md hover:bg-pink-500 hover:shadow-xl transition-all duration-300"
    >
      View Entourage →
    </a>
  </div>
</section>
      </div>
    </div>
  );
};

export default WeddingDetails;
