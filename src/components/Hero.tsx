
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Download, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Simple 3D animation effect for the hero section
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const appImageRef = useRef<HTMLDivElement>(null);

  // 3D rotation effect on mouse move
  useEffect(() => {
    const container = containerRef.current;
    const appImage = appImageRef.current;

    if (!container || !appImage) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const mouseX = e.clientX - left;
      const mouseY = e.clientY - top;
      
      const rotateY = ((mouseX / width) - 0.5) * 10; // -5 to 5 degrees
      const rotateX = ((mouseY / height) - 0.5) * -10; // -5 to 5 degrees
      
      appImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      appImage.style.transform = 'rotateX(0) rotateY(0)';
      appImage.style.transition = 'transform 0.5s ease';
    };

    const handleMouseEnter = () => {
      appImage.style.transition = 'transform 0.1s ease';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden hero-gradient pt-20" ref={containerRef}>
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-fasteos-purple/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-fasteos-blue/20 rounded-full blur-3xl animate-pulse-glow"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Modern Business
              <span className="block text-gradient">Simplified</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
              Fasteos is a next-gen platform that simplifies business tools, combining AI, 3D design, and automation in one sleek app.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-fasteos-purple hover:bg-fasteos-purple/90 text-white px-6 py-6 rounded-full btn-glow">
                <Download className="mr-2 h-5 w-5" />
                <span>Download for iOS</span>
              </Button>
              <Button className="bg-fasteos-blue hover:bg-fasteos-blue/90 text-white px-6 py-6 rounded-full btn-glow">
                <Download className="mr-2 h-5 w-5" />
                <span>Download for Android</span>
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative perspective-3d" ref={appImageRef}>
            {/* 3D App Mockup with floating elements */}
            <div className="relative max-w-md mx-auto card-3d">
              {/* Main app screen */}
              <div className="rounded-3xl shadow-2xl overflow-hidden border-4 border-white/20 bg-gradient-to-br from-fasteos-purple/30 to-fasteos-blue/30 backdrop-blur">
                <div className="aspect-[9/16] w-full bg-fasteos-darkPurple flex items-center justify-center p-4">
                  {/* Simplified app interface mockup */}
                  <div className="w-full h-full rounded-xl overflow-hidden shadow-xl bg-fasteos-dark">
                    <div className="h-1/6 bg-gradient-to-r from-fasteos-purple to-fasteos-blue flex items-center justify-between px-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                      <div className="text-white font-semibold">Fasteos</div>
                   

                      <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                    </div>
                    <div className="text-white text-sm font-semibold flex justify-center">Made By Muhammad Hasnain</div>
                    <div className="h-5/6 bg-fasteos-darkPurple p-4 space-y-4">
                 
                    <div className="h-1/3 bg-white/5 rounded-lg flex justify-center items-center">
  <a
    href="https://github.com/t2hasnain/3d-fronted"
    target="_blank"
    rel="noopener noreferrer"
    className="backdrop-blur-md bg-black/30 px-3 py-1 rounded-full flex items-center text-white font-semibold text-base hover:bg-black/40 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-5 h-5 mr-2"
    >
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.809 1.305 3.495.997.108-.776.42-1.305.763-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 0 1 3.003-.404c1.02.004 2.047.137 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.803 5.625-5.475 5.922.43.37.823 1.096.823 2.21v3.285c0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
    <span className="text-sm sm:text-base">Open Source</span>
  </a>
</div>
                      <div className="h-1/6 bg-white/5 rounded-lg"></div>
                      <div className="grid grid-cols-2 gap-2 h-1/3">
                        <div className="bg-white/5 rounded-lg"></div>
                        <div className="bg-white/5 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-5 -right-10 w-24 h-24 bg-fasteos-purple/30 glass-card rounded-2xl animate-float rotate-12"></div>
              <div className="absolute -bottom-8 -left-12 w-28 h-28 bg-fasteos-blue/30 glass-card rounded-2xl animate-float-reverse -rotate-12"></div>
              <div className="absolute top-1/4 -left-14 w-16 h-16 bg-white/10 glass-card rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <a 
        href="#what-is-fasteos" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 flex flex-col items-center hover:text-white transition-colors"
      >
        <span className="mb-2">Scroll Down</span>
        <ChevronDown className="animate-bounce h-6 w-6" />
      </a>
    </section>
  );
};

export default Hero;
