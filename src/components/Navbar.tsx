import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, BrainCircuit, X, Bot, Cpu, Hexagon, Square, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 font-poppins",
      isScrolled ? "bg-fasteos-darkPurple/80 backdrop-blur-lg shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-gradient">Fasteos</span>
        </a>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#what-is-fasteos" className="text-white/80 hover:text-white transition-colors">What is Fasteos?</a>
          <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#showcase" className="text-white/80 hover:text-white transition-colors">Showcase</a>
          <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a>
          <Button className="bg-fasteos-purple hover:bg-fasteos-purple/90 text-white btn-glow">
            Download Now
          </Button>
        </div>

        <button 
          className={cn(
            "md:hidden w-14 h-14 rounded-full relative focus:outline-none flex items-center justify-center transition-all duration-300",
            mobileMenuOpen ? "bg-white text-fasteos-darkPurple rotate-90" : "bg-fasteos-purple/20 text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-8 w-8" />
          ) : (
            <div className="w-6 h-6 relative">
              <span className="absolute h-0.5 w-full bg-current top-1"></span>
              <span className="absolute h-0.5 w-full bg-current top-3"></span>
              <span className="absolute h-0.5 w-full bg-current top-5"></span>
            </div>
          )}
        </button>
      </div>

      <div className={cn(
        "fixed top-20 inset-x-0 h-[calc(100vh-5rem)] bg-gradient-to-b from-fasteos-darkPurple/95 to-fasteos-purple/20 backdrop-blur-xl z-40 transition-all duration-500 rounded-t-3xl overflow-hidden shadow-2xl",
        mobileMenuOpen ? "translate-y-0" : "translate-y-full"
      )}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-fasteos-purple/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-fasteos-blue/20 rounded-full blur-2xl animate-pulse-slow"></div>
          
          <div className="absolute top-1/4 right-10 w-16 h-16 bg-white/5 rounded-lg animate-float rotate-12"></div>
          <div className="absolute bottom-1/3 left-10 w-20 h-20 bg-white/5 rounded-lg animate-float-reverse -rotate-12"></div>
        </div>
        
        <div className="container mx-auto px-4 py-8 h-full flex flex-col relative z-10">
          <div className="mb-6 text-center relative">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-fasteos-purple/30 rounded-full flex items-center justify-center animate-float">
                <BrainCircuit className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-fasteos-blue/30 rounded-full flex items-center justify-center animate-float-reverse">
                <Square className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-fasteos-purple/30 rounded-full flex items-center justify-center animate-float">
                <Bot className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-comic text-white mb-1">AI-Powered App</h3>
            <div className="flex items-center justify-center gap-2">
              <Cpu className="w-4 h-4 text-fasteos-purple" />
              <span className="text-fasteos-purple text-sm font-bold">3D Experience</span>
              <Hexagon className="w-4 h-4 text-fasteos-blue" />
            </div>
          </div>

          <div className="mb-8 relative perspective-3d mx-auto w-48">
            <div className="card-3d bg-fasteos-darkPurple/40 backdrop-blur-sm border border-white/10 rounded-xl p-2 shadow-xl">
              <div className="aspect-[9/16] bg-fasteos-dark rounded-lg overflow-hidden">
                <div className="h-1/6 bg-gradient-to-r from-fasteos-purple to-fasteos-blue flex items-center justify-center">
                  <span className="text-white font-bold font-comic">Fasteos AI</span>
                </div>
                <div className="p-2 space-y-2">
                  <div className="h-24 bg-white/5 rounded-lg flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-fasteos-purple/80" />
                  </div>
                  <div className="h-4 bg-white/10 rounded-full w-3/4 mx-auto"></div>
                  <div className="h-4 bg-white/10 rounded-full w-1/2 mx-auto"></div>
                  <div className="flex justify-center pt-2">
                    <div className="w-10 h-10 rounded-full bg-fasteos-purple/30 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-fasteos-purple"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-fasteos-blue/20 rounded-full blur-xl animate-pulse-slow"></div>
          </div>

          <div className="space-y-6 text-center">
            <a href="#what-is-fasteos" 
              className="text-xl text-white/80 hover:text-white transition-colors font-poppins block"
              onClick={() => setMobileMenuOpen(false)}
            >
              What is Fasteos?
            </a>
            <a href="#features" 
              className="text-xl text-white/80 hover:text-white transition-colors font-poppins block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a href="#showcase" 
              className="text-xl text-white/80 hover:text-white transition-colors font-poppins block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Showcase
            </a>
            <a href="#testimonials" 
              className="text-xl text-white/80 hover:text-white transition-colors font-poppins block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <Button 
              className="bg-fasteos-purple hover:bg-fasteos-purple/90 text-white btn-glow w-48 font-poppins mx-auto transition-all duration-300 group hover:scale-105 hover:shadow-neon"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Github className="w-5 h-5 mr-2 group-hover:rotate-[360deg] transition-transform duration-500" />
              Open Source
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
