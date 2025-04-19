
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-fasteos-dark text-white/80 pt-16 pb-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gradient">Fasteos</h3>
            <p className="mb-6">
              The next-gen platform that simplifies business tools, combining AI, 3D design, and automation in one sleek app.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-fasteos-purple transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-fasteos-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-fasteos-purple transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-fasteos-purple transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-fasteos-purple transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#what-is-fasteos" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>What is Fasteos?</span>
                </a>
              </li>
              <li>
                <a href="#features" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Features</span>
                </a>
              </li>
              <li>
                <a href="#showcase" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>App Showcase</span>
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Testimonials</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Documentation</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Tutorials</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Support</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>API</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Careers</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span>Terms of Service</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Fasteos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
