
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from "@/lib/utils";

// Mock app screenshots data
const screenshots = [
  {
    title: "Dashboard",
    description: "Centralized overview of all your business metrics and activities.",
    color: "from-fasteos-purple to-fasteos-blue"
  },
  {
    title: "Analytics",
    description: "Detailed insights into your business performance with interactive charts.",
    color: "from-fasteos-blue to-fasteos-lightPurple"
  },
  {
    title: "Project Management",
    description: "Organize tasks, track progress, and collaborate with your team seamlessly.",
    color: "from-fasteos-purple to-fasteos-magenta"
  },
  {
    title: "Communication",
    description: "Connect with your team and clients through messaging and video calls.",
    color: "from-fasteos-blue to-fasteos-orange"
  }
];

const AppShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const deviceRef = useRef<HTMLDivElement>(null);
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };
  
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };
  
  // 3D rotation effect on mouse move
  useEffect(() => {
    const device = deviceRef.current;
    if (!device) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = device.getBoundingClientRect();
      const mouseX = (e.clientX - left) / width - 0.5;
      const mouseY = (e.clientY - top) / height - 0.5;
      
      const rotateY = mouseX * 15; // -7.5 to 7.5 degrees
      const rotateX = mouseY * -15; // -7.5 to 7.5 degrees
      
      device.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    };
    
    const handleMouseLeave = () => {
      device.style.transform = 'rotateY(0) rotateX(0)';
      device.style.transition = 'transform 0.5s ease';
    };
    
    const handleMouseEnter = () => {
      device.style.transition = 'transform 0.1s ease';
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    device.addEventListener('mouseleave', handleMouseLeave);
    device.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      device.removeEventListener('mouseleave', handleMouseLeave);
      device.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);
  
  // Auto rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="showcase" className="py-20 bg-fasteos-dark relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-fasteos-darkPurple to-fasteos-dark"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App <span className="text-gradient">Showcase</span></h2>
          <p className="text-lg text-white/80">
            Explore the beautiful interface and powerful features of Fasteos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Device mockup */}
          <div 
            className="perspective-3d relative max-w-md mx-auto lg:ml-auto"
            ref={deviceRef}
            style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s ease' }}
          >
            <div className="relative">
              {/* Device frame */}
              <div className="rounded-[3rem] shadow-2xl overflow-hidden border-8 border-fasteos-dark bg-fasteos-dark">
                {/* Screen */}
                <div className="aspect-[9/16] w-full relative overflow-hidden rounded-[2rem]">
                  {/* App screenshots */}
                  {screenshots.map((screenshot, index) => (
                    <div 
                      key={index}
                      className={cn(
                        "absolute inset-0 transition-opacity duration-500",
                        currentIndex === index ? "opacity-100" : "opacity-0"
                      )}
                    >
                      {/* Screenshot content */}
                      <div className={`h-full w-full bg-gradient-to-br ${screenshot.color} p-6 flex flex-col`}>
                        {/* App header */}
                        <div className="h-12 flex items-center justify-between mb-6">
                          <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                          <div className="text-white font-semibold">{screenshot.title}</div>
                          <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                        </div>
                        
                        {/* App content mockup */}
                        <div className="flex-1 flex flex-col space-y-4">
                          <div className="h-24 bg-white/10 rounded-xl"></div>
                          <div className="grid grid-cols-2 gap-3 h-32">
                            <div className="bg-white/10 rounded-xl"></div>
                            <div className="bg-white/10 rounded-xl"></div>
                          </div>
                          <div className="h-48 bg-white/10 rounded-xl"></div>
                          <div className="grid grid-cols-3 gap-3 h-20">
                            <div className="bg-white/10 rounded-xl"></div>
                            <div className="bg-white/10 rounded-xl"></div>
                            <div className="bg-white/10 rounded-xl"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-fasteos-dark rounded-b-xl"></div>
                </div>
              </div>
              
              {/* Floating UI elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-fasteos-purple/20 glass-card animate-float rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl bg-fasteos-blue/20 glass-card animate-float-reverse -rotate-12"></div>
            </div>
          </div>
          
          {/* App feature description */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-3">{screenshots[currentIndex].title}</h3>
            <p className="text-lg text-white/80 mb-6">{screenshots[currentIndex].description}</p>
            
            {/* Navigation indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-8">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all",
                    index === currentIndex ? "bg-fasteos-purple w-8" : "bg-white/30"
                  )}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to screenshot ${index + 1}`}
                ></button>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <button 
                onClick={goToPrev}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-fasteos-purple/20 transition-colors"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                onClick={goToNext}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-fasteos-purple/20 transition-colors"
                aria-label="Next screenshot"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
