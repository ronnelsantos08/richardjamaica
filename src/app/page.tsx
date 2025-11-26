import React from "react";
import HeroSection from "@/components/HeroSection";
import EnvelopeInvite from "@/components/EnvelopeInvite";
import Sidebar from "@/components/Sidebar";
import GlobalStyles from "@/components/GlobalStyles";

const Page: React.FC = () => {
    return (
        <div className="font-body antialiased min-h-screen">
            <GlobalStyles />
            <Sidebar />
            
            <main className="flex-grow ml-20 relative z-10">
                <HeroSection />
                <EnvelopeInvite />
            </main>
        </div>
    );
};

export default Page;