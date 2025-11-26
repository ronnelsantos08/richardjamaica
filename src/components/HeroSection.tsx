"use client";

import React, { useState, useEffect, useRef } from "react";

interface ImageProps {
    src: string;
    alt: string;
    theme: string;
}

interface Petal {
    x: number;
    y: number;
    s: number;
    w: number;
    r: number;
    sp: number;
    color: string;
}

const PetalColors = [
    "rgba(255, 230, 240, 0.7)",
    "rgba(200, 162, 200, 0.7)",
    "rgba(255, 255, 255, 0.8)"
];

const HeroSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const intervalTime = 5000;

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const carouselImages: ImageProps[] = isMobile
        ? [
            { src: "/images/mobile1.jpeg", alt: "Mobile Engagement 1", theme: "Lilac" },
            { src: "/images/mobile2.jpeg", alt: "Mobile Engagement 2", theme: "Dusty Blue" },
            { src: "/images/mobile3.jpeg", alt: "Mobile Engagement 3", theme: "Sage Green" },
            { src: "/images/mobile4.jpeg", alt: "Mobile Engagement 4", theme: "Dusty Green" },
        ]
        : [
            { src: "/images/hero1.jpeg", alt: "Engagement photo 1", theme: "Lilac" },
            { src: "/images/hero2.jpeg", alt: "Engagement photo 2", theme: "Dusty Blue" },
            { src: "/images/hero3.jpeg", alt: "Engagement photo 3", theme: "Sage Green" },
            { src: "/images/hero4.jpeg", alt: "Engagement photo 4", theme: "Dusty Green" },
        ];

    // Carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
        }, intervalTime);
        return () => clearInterval(interval);
    }, [carouselImages.length]);

    // Petals animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.offsetWidth;
        let height = canvas.offsetHeight;

        canvas.width = width;
        canvas.height = height;

        const numPetals = 40;
        let petals: Petal[] = [];
        let animationFrameId: number;

        const resetPetal = (i: number) => {
            const size = Math.random() * 3 + 2;
            petals[i] = {
                x: Math.random() * width,
                y: Math.random() * height * 2 - height,
                s: size,
                w: Math.random() * 0.4 + 0.1,
                r: Math.random() * Math.PI * 2,
                sp: Math.random() * 1 + 0.5,
                color: PetalColors[Math.floor(Math.random() * PetalColors.length)]
            };
        };

        for (let i = 0; i < numPetals; i++) resetPetal(i);

        const drawPetal = (p: Petal) => {
            ctx.save();
            ctx.beginPath();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.r);
            ctx.fillStyle = p.color;
            ctx.ellipse(0, 0, p.s * 1.5, p.s * 0.8, 0, 0, 2 * Math.PI);
            ctx.fill();
            ctx.restore();
        };

        let t = 0;
        const animate = () => {
            width = canvas.offsetWidth;
            height = canvas.offsetHeight;
            canvas.width = width;
            canvas.height = height;

            ctx.clearRect(0, 0, width, height);

            t += 0.01;

            petals.forEach((p, i) => {
                p.y += p.sp;
                p.x += Math.sin(t * p.w) * 0.5;
                p.r += 0.01;

                if (p.y > height + p.s) {
                    resetPetal(i);
                    p.y = -p.s;
                }

                drawPetal(p);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    const handleError = (
        e: React.SyntheticEvent<HTMLImageElement, Event>,
        fallback: string
    ) => {
        const img = e.target as HTMLImageElement;
        img.onerror = null;
        img.src = fallback;
    };

    return (
        <section id="home" className="min-h-screen relative p-8 overflow-hidden">

            {/* Top Decoration */}
            <div
                className="absolute top-0 left-0 w-full sm:h-60 h-40 z-30 opacity-70"
                style={{
                    backgroundImage: "url('/images/heroborder.png')",
                    backgroundRepeat: "repeat-x",
                    backgroundSize: "contain",
                    transform: "scaleY(-1)",
                    backgroundPosition: "top center",
                }}
            ></div>

            {/* Bottom Decoration */}
            <div
                className="absolute bottom-0 right-0 w-full sm:h-80 h-50 z-30 opacity-70"
                style={{
                    backgroundImage: "url('/images/heroborder2.png')",
                    backgroundRepeat: "repeat-x",
                    backgroundSize: "contain",
                    backgroundPosition: "bottom center",
                    transform: "scaleY(1)",
                    transformOrigin: "bottom",
                }}
            ></div>

            {/* Background Carousel */}
            <div className="absolute inset-0 z-0">
                {carouselImages.map((image, i) => (
                    <img
                        key={i}
                        className={`carousel-image ${i === currentIndex ? "active" : ""}`}
                        src={image.src}
                        alt={image.alt}
                        onError={(e) =>
                            handleError(
                                e,
                                `https://placehold.co/1600x900/CCCCCC/FFFFFF?text=${image.theme}`
                            )
                        }
                    />
                ))}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Petals */}
            <canvas ref={canvasRef} id="petal-canvas" className="absolute inset-0 z-[15]"></canvas>

            {/* Content */}
            <div className="relative z-20 flex items-center justify-center min-h-screen">
                <div className="text-center text-white p-6 rounded-lg max-w-2xl ">

                    <p className="text-4xl md:text-5xl font-accent-script italic mb-4">
                        We joyfully invite you to the wedding of
                    </p>

                    <h1 className="font-main-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none">
                        Richard
                        <div className="font-accent-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl my-2">&</div>
                        Jamaica
                    </h1>

                    <p className="text-3xl md:text-4xl uppercase tracking-widest mt-6 font-header border-t pt-4 border-white/50">
                        January 18, 2026
                    </p>

                    {/* Default Audio Player */}
                    <div className="mt-8">
                        <audio
                            src="/music/bgmusic.mp3"
                            controls
                            loop
                            className="w-full sm:w-80 mx-auto rounded-lg shadow-lg"
                        >
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
