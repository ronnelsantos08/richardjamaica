"use client";

import React from "react";

const GlobalStyles: React.FC = () => (
  <style>
    {`
      /* ---------------------------------------------------- */
      /* 1. CUSTOM FONTS & COLORS */
      /* ---------------------------------------------------- */
      @import url('https://fonts.googleapis.com/css2?family=Barriecito&family=Imperial+Script&family=Tangerine:wght@400;700&display=swap');

      .font-main-script { font-family: 'Imperial Script', cursive; }
      .font-accent-script { font-family: 'Tangerine', cursive; }
      .font-header { font-family: 'Barriecito', cursive; }
      .font-body { font-family: 'Inter', sans-serif; }

      .color-dusty-blue { color: #5B88A5; }
      .color-lilac { color: #C8A2C8; }
      .color-sage-green { color: #9ABF92; }

      body {
        background-color: #f0f0f4;
        color: #3e3e3e;
      }

      .btn-primary {
        background-color: #5B88A5;
        color: white;
      }
      .btn-primary:hover {
        background-color: #4C728C;
      }

      .carousel-image {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 1.5s ease-in-out;
      }
      .carousel-image.active { opacity: 1; }

      #petal-canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }

      .decorative-divider {
        height: 2px;
        background: linear-gradient(to right, transparent, #C8A2C8, transparent);
      }

      html { scroll-behavior: smooth; }
    `}
  </style>
);

export default GlobalStyles;
