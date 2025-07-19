import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Web Developer', 'AI Enthusiast', 'Tech Explorer', 'Problem Solver'];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const text = texts[currentIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === text) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        setCurrentText(prev => 
          isDeleting ? prev.slice(0, -1) : text.slice(0, prev.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      </div>
      
      {/* Floating Elements - Responsive sizes */}
      <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 bg-blue-500/10 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-32 sm:w-48 h-32 sm:h-48 bg-purple-500/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-5 sm:left-10 w-16 sm:w-24 h-16 sm:h-24 bg-cyan-500/10 rounded-full blur-2xl float-animation" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="scale" delay={200}>
            <div className="mb-6 sm:mb-8">
              <span className="text-base sm:text-lg md:text-xl text-blue-400 font-semibold">Hey, I'm</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-2 sm:mb-4">
                <span className="text-blue-400">Gaurav</span> Kumar
              </h1>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={400}>
            <div className="mb-6 sm:mb-8 h-12 sm:h-14 md:h-16 flex items-center justify-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light">
                <span className="text-blue-400">{currentText}</span>
                <span className="animate-pulse text-blue-400">|</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={600}>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              B.Tech CSE Student passionate about building impactful web and AI-based applications.
              <br className="hidden sm:block" />
              <span className="text-blue-300">Building the future, one line of code at a time.</span>
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={800}>
            <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-10 lg:mb-12">
              <a
                href="https://github.com/GauravK1704"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 glass neon-glow rounded-full cursor-hover transition-all duration-300 hover:scale-110"
              >
                <Github size={24} className="text-white sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/gaurav-kumar-502371216/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 glass neon-glow rounded-full cursor-hover transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} className="text-white sm:w-7 sm:h-7" />
              </a>
              <a
                href="mailto:gk1237677@gmail.com"
                className="p-3 sm:p-4 glass neon-glow rounded-full cursor-hover transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} className="text-white sm:w-7 sm:h-7" />
              </a>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={1000}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12 px-4">
              <button
                onClick={scrollToProjects}
                className="btn-glow ripple cursor-hover text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              >
                Explore Portfolio
              </button>
              <button
                onClick={scrollToAbout}
                className="px-6 sm:px-8 py-3 sm:py-4 glass neon-glow text-blue-400 hover:text-white rounded-lg font-semibold transition-all duration-300 cursor-hover animated-underline text-base sm:text-lg w-full sm:w-auto"
              >
                Learn More About Me
              </button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={1200}>
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <button
                onClick={scrollToAbout}
                className="group relative p-3 sm:p-4 glass neon-glow rounded-full cursor-hover transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] animate-pulse hover:animate-none"
              >
                <ChevronDown 
                  size={28} 
                  className="text-blue-400 group-hover:text-white transition-colors duration-300 transform group-hover:translate-y-1 sm:w-8 sm:h-8" 
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-md group-hover:blur-lg transition-all duration-300"></div>
              </button>
              <div className="text-center">
                <p className="text-blue-400/70 text-xs sm:text-sm font-medium animate-fade-in">Scroll Down</p>
                <div className="w-6 sm:w-8 h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mt-1 animate-pulse"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
