"use client";

import React, { useState } from "react";

const Sidebar: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Mobile Hamburger Button */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed top-4 left-4 z-50 lg:hidden p-2 bg-[#E6E0FF]/90 rounded-lg shadow-md"
            >
                {open ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                )}
            </button>

            {/* Sidebar */}
            <nav
                id="sidebar"
                className={`fixed top-0 left-0 h-screen w-20 bg-[#E6E0FF]/90 backdrop-blur-sm 
                    shadow-xl p-4 flex flex-col items-center border-r border-lilac border-opacity-40 
                    z-40 transition-transform duration-300
                    ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
            >
                <div className="mb-10 mt-4">
                    <span className="font-header color-dusty-blue text-4xl font-bold">RJ</span>
                </div>

                <div className="flex flex-col space-y-6">
                    {/* HOME */}
                    <a
                        href="#home"
                        className="group relative flex justify-center items-center p-3 rounded-full color-dusty-blue hover:bg-lilac/20 transition duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        <span className="absolute left-full ml-4 p-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
                            Home
                        </span>
                    </a>

                    {/* INVITE */}
                    <a
                        href="#invite"
                        className="group relative flex justify-center items-center p-3 rounded-full color-lilac hover:bg-lilac/20 transition duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        <span className="absolute left-full ml-4 p-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
                            Invite
                        </span>
                    </a>

                    {/* OUR STORY */}
                    <a
                        href="#ourstory"
                        className="group relative flex justify-center items-center p-3 rounded-full color-dusty-blue hover:bg-lilac/20 transition duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                        </svg>
                        <span className="absolute left-full ml-4 p-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
                            Our Story
                        </span>
                    </a>

                    {/* PRENUP */}
                    <a
                        href="#prenup"
                        className="group relative flex justify-center items-center p-3 rounded-full color-lilac hover:bg-lilac/20 transition duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 7h1.5a2 2 0 0 0 0-4c-.7 0-1.5.3-2 1L2 5M10 7H8.5a2 2 0 0 1 0-4c.7 0 1.5.3 2 1L13 5M12 21v-4"></path>
                            <path d="M17.8 20.2a5.5 5.5 0 1 0 0-14 5.5 5.5 0 0 0 0 14Z"></path>
                        </svg>
                        <span className="absolute left-full ml-4 p-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
                            Gallery
                        </span>
                    </a>

                    {/* LOCATION */}
                    <a
                        href="#location"
                        className="group relative flex justify-center items-center p-3 rounded-full color-dusty-blue hover:bg-lilac/20 transition duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span className="absolute left-full ml-4 p-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
                            Location
                        </span>
                    </a>

                    {/* RSVP */}
                    <a
                        href="#rsvp"
                        className="group relative flex justify-center items-center p-3 rounded-full color-lilac hover:bg-lilac/20 transition duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span className="absolute left-full ml-4 p-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
                            RSVP
                        </span>
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Sidebar;
