
import React from 'react';
import { Button } from "@/components/ui/button";
import { Apple, Download as DownloadIcon, Smartphone, Sparkles } from 'lucide-react';
import { cn } from "@/lib/utils";

// Mock QR Code component (in a real app, would use a QR code generator library)
const QRCode = ({ className }: { className?: string }) => (
  <div className={cn("w-40 h-40 mx-auto p-2 bg-white rounded-xl qr-hover", className)}>
    <div className="w-full h-full border-2 border-fasteos-darkPurple rounded-lg p-2 flex flex-col items-center justify-center">
      {/* Mock QR code grid */}
      <div className="grid grid-cols-7 grid-rows-7 gap-1 w-full h-full">
        {/* Top-left position detection pattern */}
        <div className="col-span-2 row-span-2 bg-fasteos-darkPurple rounded-lg"></div>
        {/* Top-right position detection pattern */}
        <div className="col-start-6 col-span-2 row-span-2 bg-fasteos-darkPurple rounded-lg"></div>
        {/* Bottom-left position detection pattern */}
        <div className="col-span-2 row-start-6 row-span-2 bg-fasteos-darkPurple rounded-lg"></div>
        
        {/* Random QR code data cells */}
        {Array(24).fill(0).map((_, i) => (
          <div 
            key={i} 
            className="bg-fasteos-darkPurple rounded-sm"
            style={{
              gridColumnStart: Math.floor(Math.random() * 7) + 1,
              gridRowStart: Math.floor(Math.random() * 7) + 1,
            }}
          ></div>
        ))}
      </div>
      
      {/* Logo overlay */}
      <div className="absolute bg-white p-1 rounded-md">
        <div className="w-8 h-8 bg-gradient-to-br from-fasteos-purple to-fasteos-blue rounded-md flex items-center justify-center">
          <span className="text-white font-bold text-xs">F</span>
        </div>
      </div>
    </div>
  </div>
);

const Download = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-fasteos-darkPurple font-poppins">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-fasteos-darkPurple to-fasteos-dark"></div>
      
      {/* AI-themed decorative elements */}
      <div className="absolute h-full w-full overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-fasteos-purple/20 rounded-full blur-3xl animate-pulse-glow opacity-60"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-fasteos-blue/20 rounded-full blur-3xl animate-pulse-glow opacity-60"></div>
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-r from-fasteos-purple/30 to-fasteos-blue/30 rounded-full blur-2xl animate-float"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="rounded-3xl glass-card p-8 md:p-12 max-w-5xl mx-auto relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-fasteos-purple/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-fasteos-blue/30 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="font-comic text-3xl md:text-4xl font-bold mb-6">
                Download <span className="text-gradient">Fasteos</span><br />
                <span className="text-xl md:text-2xl text-white/80 font-poppins mt-2 flex items-center justify-center md:justify-start">
                  <Sparkles className="w-5 h-5 mr-2 text-fasteos-purple" />
                  AI-Powered App for Your Business
                </span>
              </h2>
              
              <p className="text-white/70 mb-8">
                Get started with Fasteos today and experience the future of business productivity tools. Available on all your devices.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button className="bg-black hover:bg-gray-900 text-white px-6 py-6 rounded-xl btn-glow flex items-center justify-center">
                  <Apple className="mr-2 h-6 w-6" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </Button>
                
                <Button className="bg-fasteos-purple hover:bg-fasteos-purple/90 text-white px-6 py-6 rounded-xl btn-glow flex items-center justify-center">
                  <Smartphone className="mr-2 h-6 w-6" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <QRCode />
                <p className="text-center mt-4 text-white/70 font-comic">Scan to download</p>
                
                {/* AI-themed decorative elements */}
                <div className="absolute -z-10 -top-6 -right-6 w-16 h-16 rounded-lg bg-gradient-to-br from-fasteos-purple/30 to-fasteos-blue/30 animate-float rotate-12"></div>
                <div className="absolute -z-10 -bottom-6 -left-6 w-16 h-16 rounded-lg bg-gradient-to-br from-fasteos-blue/30 to-fasteos-purple/30 animate-float-reverse -rotate-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
