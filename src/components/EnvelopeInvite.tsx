"use client";

import React, { useState, useCallback } from "react";
import "../css/EnvelopeInvite.css";

const EnvelopeInvite: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the open state when the envelope is clicked
    const handleEnvelopeClick = useCallback(() => {
      setIsOpen(prev => !prev);
    }, []);
  
    // Defined colors from the original design (Sass variables converted to Hex)
    const colorPrimary = '#E9978C'; // Base Envelope Color (Coral/Salmon)
    const colorDarker = '#D57367'; // Darkened shade for borders/flaps
  
    const envelopeClass = `envelope ${isOpen ? 'open' : ''}`;
  
    return (
      <>
        {/* This is the necessary CSS to recreate the complex 3D and animation effects. 
          It is placed inside a <style> tag to ensure it is self-contained within this file. 
        */}
        <style>{`
          /* Fonts from the original imports */
          @import url('https://fonts.googleapis.com/css?family=Sacramento');
          @import url('https://fonts.googleapis.com/css?family=Srisakdi:700');
          @import url('https://fonts.googleapis.com/css?family=Pacifico');
  
          .envelope-container {
            display: flex;
            justify-content: center; /* Horizontal centering */
            align-items: center;     /* Vertical centering */
            min-height: 50vh;
        
            /* Background image with soft overlay */
            background: 
                linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), /* Dark overlay for readability */
                url('/images/invitebg.jpeg') no-repeat center center;
            background-size: cover;
        }

          .envelope {
            background: ${colorDarker};
            border-radius: 0 0 8px 8px;
            width: auto;            /* Auto width to follow content */
            height: auto;           /* Auto height to follow content */
            min-width: 300px;       /* Minimum size to keep shape */
            min-height: 300px;
            margin: 20px auto;
            position: relative;
            transition: all 0.6s cubic-bezier(.42,0,.58,1);
            transform-origin: 50% 50%;
            cursor: pointer;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            display: inline-block;  /* Allow it to shrink/grow based on content */
            padding: 20px;          /* Space for the card inside */
        }
  
          /* Envelope Base Shape - Left Triangle */
          .envelope::before {
              content: '';
              display: block;
              position: absolute;
              bottom: 0;
              left: 0;
              width: 0;
              height: 0;
              border-style: solid;
              border-width: 296px 0 0 300px;
              border-color: transparent transparent transparent ${colorPrimary};
              z-index: 2;
          }
  
          /* Envelope Base Shape - Right Triangle */
          .envelope::after {
              content: '';
              display: block;
              position: absolute;
              bottom: 0;
              right: 0;
              width: 0;
              height: 0;
              border-style: solid;
              border-width: 0 0 296px 300px;
              border-color: transparent transparent ${colorPrimary} transparent;
              z-index: 2;
          }
  
          /* Envelope Open State */
          .envelope.open {
              transform: rotateZ(7deg) translateY(130px) rotateY(-9deg);
          }
          
          .envelope.open .flap-outside {
              top: -1px;
              animation: open-flap 0.6s ease-in-out forwards;
          }
  
          .envelope.open .card {
              transform: translateX(14%) translateY(-200px);
              transition-delay: 0.6s;
          }
  
          /* Card (Invitation Content) */
          .card {
            background: #ffffff;
            position: relative;       /* Relative so it follows the envelope */
            overflow: hidden;
            width: auto;              /* Auto width to fit content */
            height: auto;             /* Auto height to fit content */
            max-width: 90%;           /* Optional: prevent it from getting too wide */
            padding: 20px 25px;       /* Give space inside the card */
            transform: none;          /* Removed fixed translate for auto sizing */
            transition: all 0.3s cubic-bezier(.42,0,.58,1) 0s;
            z-index: 1;
            border-radius: 8px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }
  
          .card h2 {
              font-family: 'Pacifico', cursive;
              font-size: 2.5rem;
              line-height: 0.8;
              margin-top: 0.6em;
              color: ${colorDarker};
          }
  
          .card p {
              font-family: 'Srisakdi', cursive;
              font-size: 1.2rem;
              line-height: 1.5;
              margin: 0.5rem 0;
          }
  
          .flap-container {
              border-radius: 4px;
              overflow: hidden;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              transition: all 0.4s cubic-bezier(.18,.81,.76,.93) 0s;
              z-index: 3;
          }
  
          .flap-outside {
              overflow-y: auto;
              transform-origin: 50% 0;
              animation-delay: 0.6s;
              animation-fill-mode: backwards;
              z-index: 4;
          }
          
          .flap-outside .flap {
              background: ${colorDarker};
          }
  
          .flap-outside .flap:after {
              background: ${colorDarker};
              content: '';
              display: block;
              position: absolute;
              transform: rotateX(180deg);
              height: 100%;
              width: 100%;
              left: 0;
              top: 0;
              z-index: 1;
          }
  
          .flap-inside {
              transform: rotateX(180deg);
              border-radius: 0 0 4px 4px;
              overflow: hidden;
          }
  
          .flap-inside .flap {
              border-radius: 40px 40px 80px 40px;
              border: 1px solid ${colorDarker};
              margin-top: 20px;
          }
  
          .flap {
              background: ${colorPrimary};
              border: 1px solid ${colorDarker};
              border-radius: 40px;
              overflow: hidden;
              width: 300px;
              height: 300px;
              position: absolute;
              top: -50%;
              left: 50%;
              margin: -20px 0 0 -151px;
              transform: rotateZ(45deg);
              transform-style: preserve-3d;
              transition: all 0.8s ease 0s;
              z-index: 2;
          }
  
          .lining {
              /* The original used an external background image. We replace it with a solid color. */
              background: #A3CAC0; 
              backface-visibility: hidden;
              border-radius: 0 0 40px 0;
              position: absolute;
              top: 0;
              left: 0;
              width: 92%;
              height: 92%;
          }
  
          .string {
              position: relative;
              z-index: 10;
              /* Ensure the SVG scales and centers correctly */
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
          }
          
          .string path {
              /* Set the path fill to transparent initially */
              fill: transparent !important; 
          }
  
          .textclick {
              font-family: 'Srisakdi', cursive;
              font-weight: bold;
              margin-top: 20px;
              font-size: 1.1rem;
              color: #4b4b4b;
              opacity: ${isOpen ? 0 : 1};
              transition: opacity 0.3s ease 0.8s;
          }
  
          @keyframes open-flap {
              0% {
                  transform: rotateX(0deg);
                  z-index: 4;
              }
              50% {
                  transform: rotateX(90deg);
                  z-index: 0;
              }
              100% {
                  transform: rotateX(180deg);
                  z-index: 0;
              }
          }
        `}</style>
  <div className="envelope-container" id="invite">
        {/* Envelope HTML Structure (Converted to JSX) */}
        <div className={envelopeClass} onClick={handleEnvelopeClick}>
        <div className="card">
  <h2>You're Invited!</h2>

  <p className="font-accent-script italic mb-4">
    Join us as we celebrate our wedding
  </p>

  <p className="text-lg">
    Richard Medrano & Jamaica David
    <br />
    warmly invite you to share in the joy of their special day
    <br />
    on January 18, 2026.
  </p>
</div>
</div>
          {/* SVG String - SMIL animations are preserved */}
          <svg
            version="1.1"
            className="string"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 400 400"
            enableBackground="new 0 0 400 400"
            xmlSpace="preserve"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Left string */}
            <path
              fill="none"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="M0,202.768l247.674,0.566c0,0,17.438,0.373,26.027-0.333c3.292-0.086,10.681-2.608,12.901-6.277
                c9.421-15.545,10.722-22.938,14.738-32.724c14.667-35.75,37.693-52.331,50-41.333c13.166,11.766-4.703,35.756-15.667,48.333
                c-12.222,14.018-23.661,18.463-38,24.667c-12.307,5.325-44.737,16.634-59.435,25.867c-16.134,10.137-19.231,9.467-49.832,39.508"
            >
              <animate
                id="morphoneleft"
                dur="0.8s"
                begin="0s"
                attributeName="d"
                from="M0,202.768l247.674,0.566c0,0,17.438,0.373,26.027-0.333c3.292-0.086,10.681-2.608,12.901-6.277 c9.421-15.545,10.722-22.938,14.738-32.724c14.667-35.75,37.693-52.331,50-41.333c13.166,11.766-4.703,35.756-15.667,48.333 c-12.222,14.018-23.661,18.463-38,24.667c-12.307,5.325-44.737,16.634-59.435,25.867c-16.134,10.137-19.231,9.467-49.832,39.508"
                to="M0,203l247.674,0.334c0,0,17.438,0.373,26.027-0.333c3.292-0.086,10.681-2.608,12.901-6.277c2.261-3.927,2.731-14.057,9.898-13.391 c7.167,1-9.799,17.048-11.927,19.118c-7.425,6.885-5.292,4.807-14.292,11.89c-9.167,6.667-17.411,10.963-31.75,17.167 c-12.307,5.325-88.001,46.751-102.699,55.984C119.698,297.629,104,304.5,76,318"
              />
              <animate
                id="morphtwoleft"
                dur="0.2s"
                begin="morphoneleft.end"
                attributeName="d"
                from="M0,203l247.674,0.334c0,0,17.438,0.373,26.027-0.333c3.292-0.086,10.681-2.608,12.901-6.277c2.261-3.927,2.731-14.057,9.898-13.391 c7.167,1-9.799,17.048-11.927,19.118c-7.425,6.885-5.292,4.807-14.292,11.89c-9.167,6.667-17.411,10.963-31.75,17.167 c-12.307,5.325-88.001,46.751-102.699,55.984C119.698,297.629,104,304.5,76,318"
                to="M-79.078,290.9l35.386,4.267c0,0,93.468,18.997,103.805,35.211c8.628,9.253,3.196,17.92-2.946,25.587 C45.5,368.632,6.533,364.559-0.034,368.941c-7.615,4.833-39.83-1.204-45.788,2.18c-18.972,11.783-5.168,11.094-14.71,15.36 c-10.121,5.946-21.998-7.963-34.83-1.28c-7.711,6.827-7.314,10.24-18.844,10.24c-5.964,0-23.901-2.73-37.771-0.854"
              />
              <animate
                id="morphthreeleft"
                dur="0.05s"
                begin="morphtwoleft.end"
                attributeName="d"
                from="M-79.078,290.9l35.386,4.267c0,0,93.468,18.997,103.805,35.211c8.628,9.253,3.196,17.92-2.946,25.587 C45.5,368.632,6.533,364.559-0.034,368.941c-7.615,4.833-39.83-1.204-45.788,2.18c-18.972,11.783-5.168,11.094-14.71,15.36 c-10.121,5.946-21.998-7.963-34.83-1.28c-7.711,6.827-7.314,10.24-18.844,10.24c-5.964,0-23.901-2.73-37.771-0.854"
                to="M-62.5,316.167l40.487,1.666c0,0,4.197,32.816,14.534,49.03c8.628,9.253,3.196,17.92-2.946,25.587 c-11.667,12.667-63.021,9.805-69.588,14.188c-7.615,4.833-39.83-1.204-45.788,2.18c-18.972,11.783-5.168,11.094-14.71,15.36 c-10.121,5.946-21.998-7.963-34.83-1.28c-7.711,6.827-7.314,10.24-18.844,10.24c-5.964,0-23.901-2.73-37.771-0.854"
                fill="freeze"
              />
            </path>
  
            {/* Right string */}
            <path
              fill="none"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="M600,201.587l-276.18,0.127c0,0-33.438-0.151-39.313-3.339c-6.144-3.333-38.832-67.707-59.101-70.055
                c-16.598-1.923-16.888,14.444-13.663,23.347c3.156,8.713,11.264,20.667,31.125,32.889c9.736,5.991,23.593,10.774,34.574,14.636
                c1.523,0.536,6.154,2.708,9.058,3.568c50.508,14.908,73.965,32.449,87.632,40.116"
            >
              <animate
                id="morphoneright"
                dur="0.8s"
                begin="0s"
                repeatCount="infinite"
                attributeName="d"
                from="M600,201.587l-276.18,0.127c0,0-33.438-0.151-39.313-3.339c-6.144-3.333-38.832-67.707-59.101-70.055 c-16.598-1.923-16.888,14.444-13.663,23.347c3.156,8.713,11.264,20.667,31.125,32.889c9.736,5.991,23.593,10.774,34.574,14.636 c1.523,0.536,6.154,2.708,9.058,3.568c50.508,14.908,73.965,32.449,87.632,40.116"
                to="M600,202.5l-276.18-0.786c0,0-33.438-0.151-39.313-3.339c-6.144-3.333-4.365-15.344-14.007-11.708 c-5.5,4.864,6.298,10.404,19.606,18.069c10.524,5.834,38.771,22.158,50.088,25.439c35.852,14.174,61.009,28.751,71.991,32.613 c1.521,0.536,21.243,8.804,24.147,9.663c8.181,2.457,28,10.381,41.667,18.048"
              />
              <animate
                id="morphtworight"
                dur="0.2s"
                begin="morphoneright.end"
                repeatCount="infinite"
                attributeName="d"
                from="M600,202.5l-276.18-0.786c0,0-33.438-0.151-39.313-3.339c-6.144-3.333-4.365-15.344-14.007-11.708 c-5.5,4.864,6.298,10.404,19.606,18.069c10.524,5.834,38.771,22.158,50.088,25.439c35.852,14.174,61.009,28.751,71.991,32.613 c1.521,0.536,21.243,8.804,24.147,9.663c8.181,2.457,28,10.381,41.667,18.048"
                to="M678,284.233l-56.833,13.333c0,0-98.644,16.187-79.333,51.138c22.422,16,25.663-6.034,32.721-0.451 c10.73,10.935,56.404,18.938,65.517,26.605c5.383,4.676,20.677-7.281,28.425-4c24.545,14.174,42.116,2.138,49.635,6 c9.242,4.5,10.677,19.141,12.665,20c5.601,2.457,25.901-7.667,35.258,0"
              />
              <animate
                id="morphthreeright"
                dur="0.05s"
                begin="morphtworight.end"
                repeatCount="infinite"
                attributeName="d"
                from="M678,284.233l-56.833,13.333c0,0-98.644,16.187-79.333,51.138c22.422,16,25.663-6.034,32.721-0.451 c10.73,10.935,56.404,18.938,65.517,26.605c5.383,4.676,20.677-7.281,28.425-4c24.545,14.174,42.116,2.138,49.635,6 c9.242,4.5,10.677,19.141,12.665,20c5.601,2.457,25.901-7.667,35.258,0"
                to="M688,304.501l-56.833,13.333c0,0-44.644,39.561-25.333,74.512c22.422,16,25.663-6.034,32.721-0.451 c10.73,10.935,56.404,18.938,65.517,26.605c5.383,4.676,20.677-7.281,28.425-4c24.545,14.174,42.116,2.138,49.635,6 c9.242,4.5,10.677,19.141,12.665,20c5.601,2.457,25.901-7.667,35.258,0"
                fill="freeze"
              />
            </path>
          </svg>
        </div>
    
      </>
    );
  };

export default EnvelopeInvite;
