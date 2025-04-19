
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatIsFasteos from '@/components/WhatIsFasteos';
import Features from '@/components/Features';
import AppShowcase from '@/components/AppShowcase';
import Testimonials from '@/components/Testimonials';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll implementation
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 90, // Offset for navbar
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-fasteos-darkPurple text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhatIsFasteos />
      <Features />
      <AppShowcase />
      <Testimonials />
      <Download />
      <Footer />
    </div>
  );
};

export default Index;
