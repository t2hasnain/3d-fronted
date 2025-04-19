
import React, { useRef, useEffect } from 'react';
import { ArrowRight, MessageSquare, BarChart3, Calendar, FileText, CircleDollarSign, Wand2 } from 'lucide-react';
import { cn } from "@/lib/utils";

// Interactive feature card with 3D effect
const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  className,
  index
}: { 
  icon: React.ReactNode,
  title: string,
  description: string,
  className?: string,
  index: number
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const mouseX = e.clientX - left;
      const mouseY = e.clientY - top;
      
      const centerX = width / 2;
      const centerY = height / 2;
      
      const rotateX = (mouseY - centerY) / 10;
      const rotateY = (centerX - mouseX) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      card.style.transition = 'transform 0.5s ease';
    };
    
    const handleMouseEnter = () => {
      card.style.transition = 'transform 0.1s ease';
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "glass-card rounded-2xl p-6 transform transition-all", 
        "hover:shadow-neon cursor-pointer",
        className
      )}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="bg-fasteos-purple/20 p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      
      <a href="#" className="group inline-flex items-center text-fasteos-purple hover:text-fasteos-blue transition-colors">
        <span className="mr-2">Learn more</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
};

const Features = () => {
  const featuresData = [
    {
      icon: <MessageSquare className="h-8 w-8 text-fasteos-purple" />,
      title: "Smart Communications",
      description: "AI-powered messaging that understands context and helps you communicate more effectively.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-fasteos-blue" />,
      title: "Comprehensive Analytics",
      description: "Track your business performance with detailed reports and customizable dashboards.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-fasteos-lightPurple" />,
      title: "Intelligent Scheduling",
      description: "Let AI optimize your calendar based on priorities and team availability.",
    },
    {
      icon: <FileText className="h-8 w-8 text-fasteos-magenta" />,
      title: "Document Management",
      description: "Organize, edit, and share documents with powerful collaborative features.",
    },
    {
      icon: <CircleDollarSign className="h-8 w-8 text-fasteos-orange" />,
      title: "Financial Tracking",
      description: "Monitor expenses, generate invoices, and manage your financial operations.",
    },
    {
      icon: <Wand2 className="h-8 w-8 text-white" />,
      title: "Design Wizard",
      description: "Create professional marketing materials with AI-powered design templates.",
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden bg-fasteos-darkPurple/80">
      {/* Background elements */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-fasteos-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-fasteos-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful <span className="text-gradient">Features</span></h2>
          <p className="text-lg text-white/80">
            Discover the innovative tools that make Fasteos the ultimate business productivity platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              className="animate-fade-in"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
