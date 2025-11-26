// Sidebar.tsx
import React from "react";

const Sidebar: React.FC = () => {
    return (
        <nav id="sidebar" className="w-20 fixed left-0 top-0 h-screen bg-white/90 backdrop-blur-sm shadow-xl p-4 flex flex-col items-center border-r border-lilac border-opacity-40 z-50">
            <div className="mb-10 mt-4">
                <span className="font-main-script color-dusty-blue text-4xl font-bold">R&J</span>
            </div>
            
            <div className="flex flex-col space-y-6">
                {/* Home */}
                <a href="#home" className="group relative flex justify-center items-center p-3 rounded-full color-dusty-blue hover:bg-lilac/20 transition duration-300" aria-label="Home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    <span className="absolute left-full ml-4 w-auto p-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">Home</span>
                </a>

                {/* Invite */}
                <a href="#invite" className="group relative flex justify-center items-center p-3 rounded-full color-lilac hover:bg-lilac/20 transition duration-300" aria-label="Invite Details">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    <span className="absolute left-full ml-4 w-auto p-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">Invite</span>
                </a>

                {/* Our Story */}
                <a href="#ourstory" className="group relative flex justify-center items-center p-3 rounded-full color-dusty-blue hover:bg-lilac/20 transition duration-300" aria-label="Our Story">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    <span className="absolute left-full ml-4 w-auto p-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">Our Story</span>
                </a>

                {/* Prenup / Gallery */}
                <a href="#prenup" className="group relative flex justify-center items-center p-3 rounded-full color-lilac hover:bg-lilac/20 transition duration-300" aria-label="Prenup Photos">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7h1.5a2 2 0 0 0 0-4c-.7 0-1.5.3-2 1L2 5M10 7H8.5a2 2 0 0 1 0-4c.7 0 1.5.3 2 1L13 5M12 21v-4"/><path d="M17.8 20.2a5.5 5.5 0 1 0 0-14 5.5 5.5 0 0 0 0 14Z"/></svg>
                    <span className="absolute left-full ml-4 w-auto p-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">Gallery</span>
                </a>

                {/* Location */}
                <a href="#location" className="group relative flex justify-center items-center p-3 rounded-full color-dusty-blue hover:bg-lilac/20 transition duration-300" aria-label="Location Details">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span className="absolute left-full ml-4 w-auto p-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">Location</span>
                </a>

                {/* RSVP */}
                <a href="#rsvp" className="group relative flex justify-center items-center p-3 rounded-full color-lilac hover:bg-lilac/20 transition duration-300" aria-label="RSVP">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span className="absolute left-full ml-4 w-auto p-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">RSVP</span>
                </a>
            </div>
        </nav>
    );
};

export default Sidebar;
