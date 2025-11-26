"use client";

import React, { useState, useEffect, useRef } from "react";

const IMAGES = [
  "/images/prenup1.jpeg",
  "/images/prenup2.jpeg",
  "/images/prenup3.jpeg",
  "/images/prenup4.jpeg",
  "/images/prenup5.jpeg",
  "/images/prenup6.jpeg",
  "/images/prenup7.jpeg",
  "/images/prenup8.jpeg",
  "/images/prenup9.jpeg",
  "/images/prenup10.jpeg",
  "/images/prenup11.jpeg",
  "/images/prenup12.jpeg",
  "/images/prenup13.jpeg",
  "/images/prenup14.jpeg",
  "/images/prenup15.jpeg",
  "/images/prenup16.jpeg",
  "/images/prenup17.jpeg",
  "/images/prenup18.jpeg",
  "/images/prenup19.jpeg",
  "/images/prenup20.jpeg",
];

const ImageGallery: React.FC = () => {
  const totalImages = IMAGES.length;
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [heroIndex, setHeroIndex] = useState(totalImages - 1);
  const [startAnimation, setStartAnimation] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Observe when gallery comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.3 } // trigger when 30% of the gallery is visible
    );
    if (galleryRef.current) observer.observe(galleryRef.current);

    return () => {
      if (galleryRef.current) observer.unobserve(galleryRef.current);
    };
  }, []);

  // Animation timer after intro starts
  useEffect(() => {
    if (!startAnimation) return;

    const maxDelay = (totalImages - 1) * 0.2 + 3.3;
    const duration = 1;
    const buffer = 0.5;
    const totalAnimationDuration = (maxDelay + duration + buffer) * 1000;

    const timer = setTimeout(() => setIsAnimationComplete(true), totalAnimationDuration);
    return () => clearTimeout(timer);
  }, [startAnimation, totalImages]);

  const handleThumbnailClick = (index: number) => setHeroIndex(index);

  return (
    <div ref={galleryRef} className="min-h-screen flex flex-col items-center justify-start py-12 p-4">
      {isAnimationComplete ? (
        <>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#48627a] mb-8 font-serif text-center font-accent-script">
            Our Favorite Moments
          </h1>

          <div className="w-auto sm:w-full max-w-full mb-6 rounded-xl overflow-hidden transition-all duration-500 ease-out shadow-lg ring-4 ring-pink-400/50">
            <img
              src={IMAGES[heroIndex]}
              alt={`Hero Photo ${heroIndex + 1}`}
              key={heroIndex}
              className="w-full h-[60vh] md:h-[80vh] object-cover transition-opacity duration-500 ease-in-out rounded-xl"
            />
          </div>

          <div className="w-90 sm:w-full max-w-4xl p-2 bg-gray-900 rounded-xl overflow-x-auto shadow-inner">
            <div className="flex space-x-4 justify-start py-2">
              {IMAGES.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg cursor-pointer transition-all duration-200 transform hover:scale-[1.05] flex-shrink-0
                    ${index === heroIndex ? "ring-4 ring-pink-500 opacity-100" : "opacity-70 hover:opacity-100"}`}
                  onClick={() => handleThumbnailClick(index)}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </>
      ) : startAnimation ? (
        // Intro animation layout
        <>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#48627a] mb-12 font-serif text-center font-accent-script">
            The Journey Begins
          </h1>
          <div className="scene" style={{ "--total": totalImages } as React.CSSProperties}>
            <div className="wrapper-images">
              {IMAGES.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Engagement Photo ${index + 1}`}
                  className="gallery-image"
                  style={{ "--index": index } as React.CSSProperties}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        // Placeholder before animation triggers
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#48627a] mb-12 font-serif text-center font-accent-script">
          Scroll to Start the Journey
        </h1>
      )}
      <style jsx global>{`
        @property --width { syntax: '<length>'; inherits: false; initial-value: 700px; }
        @property --height { syntax: '<length>'; inherits: false; initial-value: 650px; }
        @property --scale { syntax: '<number>'; inherits: false; initial-value: 0; }
        @property --translate-x { syntax: '<length>'; inherits: false; initial-value: 0px; }
        @property --translate-y { syntax: '<length>'; inherits: false; initial-value: 0px; }
        @property --tX { syntax: '<length>'; inherits: false; initial-value: 750px; }
        @property --tY { syntax: '<length>'; inherits: false; initial-value: 250px; }
        @property --w { syntax: '<length>'; inherits: false; initial-value: 250px; }
        @property --h { syntax: '<length>'; inherits: false; initial-value: 250px; }

        .scene { width: 100%; min-height: 500px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center; }
        .wrapper-images { position: relative; width: 90%; max-width: 700px; height: 650px; display: flex; align-items: center; justify-content: center; perspective: 1000px; }
        .gallery-image { position: absolute; width: 250px; height: 250px; object-fit: cover; border-radius: 0.75rem; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          transform: scale(var(--scale)) translateX(calc((var(--tX) / var(--total)) * (var(--index) - (var(--total) / 2)))) translateY(calc(cos(360deg / var(--total) * var(--index)) * var(--tY)));
          opacity: 0; visibility: hidden; transition: filter 0.3s ease;
          animation: fadeIn 1s calc((var(--index) * 0.2s) + 0.4s) ease-in-out forwards, alignImage 1s calc((var(--index) * 0.2s) + 3.3s) ease-in-out forwards; }
        .gallery-image:nth-child(1) { width: var(--width); height: var(--height); opacity:1; visibility: visible; transform: translate(var(--translate-x), var(--translate-y));
          animation: firstImage 1s ease-in-out forwards, alignImage 1s 3.3s ease-in-out forwards; will-change: transform, opacity, visibility, width, height; }
        .gallery-image:nth-last-of-type(1) { width: var(--w); height: var(--h);
          animation: fadeIn 1s calc((var(--index) * 0.2s) + 0.4s) ease-in-out forwards, lastImage 1s calc((var(--index) * 0.2s) + 3.3s) ease-in-out forwards; will-change: transform, opacity, visibility, width, height; }

        @keyframes firstImage { 0% { --translate-x:0; --translate-y:0; } 50% { --translate-x:0; --translate-y:0; --width:700px; --height:650px; } 100% { --translate-x:-350px; --translate-y:-23px; --width:250px; --height:250px; } }
        @keyframes lastImage { 0% { --w:250px; --h:250px; } 100% { --w:700px; --h:650px; transform: translate(0,0) scale(1) !important; z-index:10; } }
        @keyframes fadeIn { from { opacity:0; visibility:hidden; --scale:0.5; } to { opacity:1; visibility:visible; --scale:1; } }
        @keyframes alignImage { 0% { --tX:750px; --tY:250px; } 60% { --tX:0; --tY:0; --w:250px; --h:250px; } 100% { --tX:0; --tY:0; --w:250px; --h:250px; } }
      `}</style>
    </div>
  );
};

export default ImageGallery;
