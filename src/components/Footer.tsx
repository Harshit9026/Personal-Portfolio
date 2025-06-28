import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
  { icon: Github, href: 'https://github.com/Harshit9026', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/Harshit9026', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/YourTwitterHandle', label: 'Twitter' },
  { icon: Mail, href: 'mailto:harshitshukla813@gmail.com', label: 'Email' }
];


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all duration-300"
            >
              Harshit Shukla
            </button>
            <p className="text-gray-400 mt-2">Software Engineer | Full Stack Development Enthusiast</p>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="group p-3 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-400 mx-2" /> by Harshit Shukla.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 Harshit Shukla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}