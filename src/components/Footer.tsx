
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              <span className="text-blue-400">Gaurav</span> Kumar
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Computer Science Student passionate about creating innovative solutions 
              and making a positive impact through technology.
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            <a
              href="https://github.com/GauravK1704"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200"
            >
              <Github size={18} className="text-white sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/gaurav-kumar-502371216/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200"
            >
              <Linkedin size={18} className="text-white sm:w-5 sm:h-5" />
            </a>
            <a
              href="mailto:gk1237677@gmail.com"
              className="p-2 sm:p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200"
            >
              <Mail size={18} className="text-white sm:w-5 sm:h-5" />
            </a>
          </div>
          
          <div className="border-t border-slate-700 pt-6 sm:pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2 text-sm sm:text-base">
              Made with <Heart size={14} className="text-red-500 sm:w-4 sm:h-4" /> by Gaurav Kumar • {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
