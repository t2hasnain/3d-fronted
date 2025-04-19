
import React from 'react';
import { Zap, Lock, PieChart, Users, Sparkles, BrainCircuit } from 'lucide-react';
import { cn } from "@/lib/utils";

const FeatureCard = ({ icon, title, description, className }: { 
  icon: React.ReactNode,
  title: string,
  description: string,
  className?: string
}) => (
  <div 
    className={cn(
      "glass-card p-6 rounded-2xl h-full card-3d", 
      className
    )}
  >
    <div className="bg-gradient-to-br from-fasteos-purple/30 to-fasteos-blue/30 p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-white/70">{description}</p>
  </div>
);

const WhatIsFasteos = () => {
  return (
    <section id="what-is-fasteos" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What is <span className="text-gradient">Fasteos</span>?</h2>
          <p className="text-lg text-white/80">
            Fasteos brings together powerful business tools in one beautifully designed app, helping you work smarter, not harder.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<BrainCircuit className="h-8 w-8 text-fasteos-purple" />}
            title="AI-Powered Automation"
            description="Let artificial intelligence handle repetitive tasks while you focus on growing your business."
            className="animate-fade-in [animation-delay:100ms]"
          />
          
          <FeatureCard 
            icon={<Sparkles className="h-8 w-8 text-fasteos-blue" />}
            title="Stunning 3D Designs"
            description="Create professional-quality marketing materials with our intuitive 3D design tools."
            className="animate-fade-in [animation-delay:200ms]"
          />
          
          <FeatureCard 
            icon={<Zap className="h-8 w-8 text-fasteos-magenta" />}
            title="Lightning Fast Performance"
            description="Experience seamless operation with our optimized app architecture built for speed."
            className="animate-fade-in [animation-delay:300ms]"
          />
          
          <FeatureCard 
            icon={<Lock className="h-8 w-8 text-fasteos-orange" />}
            title="Enterprise-Grade Security"
            description="Rest easy knowing your data is protected with the latest security protocols and encryption."
            className="animate-fade-in [animation-delay:400ms]"
          />
          
          <FeatureCard 
            icon={<PieChart className="h-8 w-8 text-fasteos-lightPurple" />}
            title="Insightful Analytics"
            description="Make data-driven decisions with comprehensive analytics and visualization tools."
            className="animate-fade-in [animation-delay:500ms]"
          />
          
          <FeatureCard 
            icon={<Users className="h-8 w-8 text-fasteos-gray" />}
            title="Seamless Collaboration"
            description="Work together with your team in real-time, no matter where they are in the world."
            className="animate-fade-in [animation-delay:600ms]"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIsFasteos;
