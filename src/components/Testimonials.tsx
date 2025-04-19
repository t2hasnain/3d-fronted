
import React, { useRef, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { cn } from "@/lib/utils";

// Testimonial data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "GrowthTech",
    content: "Fasteos has transformed how our marketing team operates. The AI-powered design tools save us hours of work every week, and the analytics dashboard gives us insights we never had before.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "NexusLabs",
    content: "As a startup founder, I needed tools that could grow with my business. Fasteos offers enterprise-level features at a price that makes sense for companies at any stage.",
    rating: 5
  },
  {
    name: "Jessica Rivera",
    role: "Operations Manager",
    company: "UrbanLogistics",
    content: "The automation capabilities in Fasteos have reduced our administrative workload by 40%. Our team can now focus on strategic initiatives instead of repetitive tasks.",
    rating: 4
  },
  {
    name: "David Williams",
    role: "Creative Director",
    company: "VisualPulse",
    content: "The 3D design tools are unlike anything I've used before. Our presentations and marketing materials have reached a new level of professionalism thanks to Fasteos.",
    rating: 5
  }
];

// Testimonial card with 3D effect
const TestimonialCard = ({ 
  name, 
  role, 
  company, 
  content, 
  rating,
  index
}: { 
  name: string,
  role: string,
  company: string,
  content: string,
  rating: number,
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
      
      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;
      
      const rotateY = deltaX / 20;
      const rotateX = -deltaY / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    };
    
    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
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
  
  // Render stars based on rating
  const renderStars = () => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={cn(
          "h-4 w-4", 
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
        )} 
      />
    ));
  };
  
  return (
    <div 
      ref={cardRef}
      className="glass-card rounded-2xl p-6 h-full transition-all"
      style={{ 
        transformStyle: 'preserve-3d',
        animationDelay: `${index * 200}ms`
      }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="relative">
          {/* Quote icon with gradient */}
          <div className="absolute -top-2 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-fasteos-purple to-fasteos-blue flex items-center justify-center">
            <Quote className="h-4 w-4 text-white" />
          </div>
          
          {/* Avatar placeholder - would be replaced with actual images */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fasteos-purple/20 to-fasteos-blue/20 border border-white/10 flex items-center justify-center">
            <span className="text-white font-semibold">{name.charAt(0)}</span>
          </div>
        </div>
        
        <div className="flex">{renderStars()}</div>
      </div>
      
      <p className="text-white/80 mb-4 italic">{content}</p>
      
      <div className="mt-auto">
        <p className="font-bold">{name}</p>
        <p className="text-white/60 text-sm">{role}, {company}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-fasteos-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-fasteos-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="text-gradient">Users Say</span></h2>
          <p className="text-lg text-white/80">
            Discover how Fasteos is helping businesses around the world improve their productivity and creativity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              {...testimonial}
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
