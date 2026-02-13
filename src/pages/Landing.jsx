import React from 'react';
import Navbar from '../components/Navbar'; 
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import PopularSkills from '../components/PopularSkills';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen font-sans bg-[#0B1C2D] relative overflow-x-hidden selection:bg-[#9B4D5E] selection:text-white">
      
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#9B4D5E] blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/4 rounded-full"></div>

        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#3b82f6] blur-[150px] opacity-10 translate-y-1/3 -translate-x-1/4 rounded-full"></div>

        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#9B4D5E] blur-[180px] opacity-5 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <HowItWorks />
        <PopularSkills />
        <Testimonials />
        <CTA />
        <Footer />
      </div>

    </div>
  );
}