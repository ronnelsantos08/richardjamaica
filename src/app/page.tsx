import React from "react";
import HeroSection from "@/components/HeroSection";
import EnvelopeInvite from "@/components/EnvelopeInvite";
import Sidebar from "@/components/Sidebar";
import GlobalStyles from "@/components/GlobalStyles";
import FlipBook from "@/components/FlipBook"; 
import ImageGallery from "@/components/ImageGallery";

const pagesData = [
  // Cover Front
  {
    front: (
      <div
        className="flex flex-col items-center justify-center h-full 
                   cursor-pointer transition-transform duration-300 
                   hover:scale-105 hover:shadow-lg"
      >
        <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-great-vibes)' }}>
          Richard & Jamaica
        </h1>
        <p className="text-xl mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
          Our Wedding Story
        </p>
        
        {/* Click instruction button */}
        <div className="px-6 py-2 rounded-full bg-pink-300 text-white shadow-md
                        hover:bg-pink-400 transition-colors duration-300">
          Click to Open
        </div>
      </div>
    ),
  
  
    back: (
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-semibold">Back Cover</h1>
        <p className="text-lg">Join us for our special day!</p>
      </div>
    ),
    isCoverPage: true,
  },

  // Page 1
  {
    front: (
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 h-full">
        <div className="md:w-1/2">
          <p className="text-lg md:text-xl">
            Richard & Jamaica’s story began in 2021. Richard first met Jamaica when he visited her office to inquire about land. He thought she was a maid 🤣… only to find out she was the owner’s daughter 😅.
          </p>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/images/page1.jpeg" 
            alt="Richard & Jamaica meeting" 
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    ),
    back: (
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 h-full">
        <div className="md:w-1/2">
          <p className="text-lg md:text-xl">
            He fell in love at first sight 💘, tracked her down on Facebook, and started pursuing her. Before saying yes, Jamaica asked for a CENOMAR to make sure he was single 😅—and when it came back clear, she said “YES” 💕 on July 20, 2021.
          </p>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/images/countdown.jpeg" 
            alt="Proposal scene" 
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    ),
  },

  // Page 2
  {
    front: (
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 h-full">
        <div className="md:w-1/2">
          <p className="text-lg md:text-xl">
            After years of dating and keeping their love a secret 🤫, Richard finally asked her to marry him on September 28, 2025 💍—and they’re now ready for forever together.
          </p>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/images/prenup8.jpeg" 
            alt="Engagement" 
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    ),
    back: (
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 h-full">
        <div className="md:w-1/2">
          <p className="text-lg md:text-xl">
            Stay tuned as we celebrate our love with family and friends. Thank you for being part of our journey!
          </p>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/images/prenup2.jpeg" 
            alt="Celebration" 
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    ),
  },

  // Back Cover
  {
    front: (
      <div className="flex flex-col items-center justify-center h-full">
        <img 
          src="/images/prenup14.jpeg" 
          alt="Back Cover" 
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </div>
    ),
    back: (
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-3xl font-semibold">That's all, folks!</h2>
        <p className="text-lg">We hope you enjoyed our story ❤️</p>
      </div>
    ),
    isBackCover: true,
  },
];

const Page: React.FC = () => {
    return (
        <div className="font-body antialiased min-h-screen">
            <GlobalStyles />
            <Sidebar />
            
            <main className="flex-grow ml-0 relative z-10">
                <HeroSection />
                <EnvelopeInvite />

                {/* FlipBook Section */}
                <section className="mt-0" id="ourstory">
                    <FlipBook pages={pagesData} />
                </section>

                  {/* Image Gallery Section */}
                  <section
                  className="mt-0 relative w-full min-h-screen flex flex-col items-center justify-center"
                  id="gallery"
                  style={{
                    backgroundImage: "url('/images/bgprenup.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                    <ImageGallery />
              </section>
            </main>
        </div>
    );
};

export default Page;
