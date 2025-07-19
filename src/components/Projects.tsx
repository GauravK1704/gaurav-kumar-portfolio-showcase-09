
import React from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Projects = () => {
  const projects = [
    {
      title: 'ZeroWasteMart',
      description: 'AI-powered eco-marketplace that helps users buy/sell recyclable materials with intelligent product recommendations. Semifinalist at Hackmania 2024 – Microsoft Gurgaon.',
      stack: ['HTML', 'JavaScript', 'Firebase', 'Lovable AI'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Digital Detox Extension',
      description: 'Chrome Extension to reduce social media addiction using AI curation, usage tracking, and real-time feedback to help users manage their digital consumption.',
      stack: ['JavaScript', 'Chrome APIs', 'Firebase', 'AI APIs'],
      github: '#',
      demo: '#'
    },
    {
      title: 'PetRadar',
      description: 'Lost & Found Pet Network using GPS, QR tags, AI image recognition, and community forum to help reunite pets with their families.',
      stack: ['FlutterFlow', 'Firebase', 'AI Image Recognition', 'Google Maps API'],
      github: '#',
      demo: '#'
    },
    {
      title: 'DigiWadi',
      description: 'Government-grade platform for digitizing Anganwadi operations with role-based dashboard, biometric attendance, and nutrition tracking.',
      stack: ['Firebase', 'Lovable AI', 'Face Recognition API', 'Geo-fencing'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Myntra Clone',
      description: 'Frontend replica of Myntra e-commerce website built using core web technologies. Fully responsive and animated user interface.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/GauravK1704/myntra-clone',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-slate-800/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-12 sm:mb-16">
            My <span className="text-blue-400 glow">Projects</span>
          </h2>
        </ScrollReveal>
        
        <div className="max-w-7xl mx-auto">
          {/* Featured Project */}
          <ScrollReveal direction="scale" delay={200}>
            <div className="mb-12 sm:mb-16">
              <div className="glass card-hover rounded-2xl p-6 sm:p-8 border border-blue-400/30 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-2 sm:gap-4">
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full neon-glow w-fit">Featured</span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">{projects[0].title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">{projects[0].description}</p>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {projects[0].stack.map((tech) => (
                      <span key={tech} className="px-2 sm:px-3 py-1 sm:py-2 glass text-blue-300 text-xs sm:text-sm rounded-lg neon-glow skill-icon cursor-hover">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <a
                      href={projects[0].github}
                      className="flex items-center justify-center gap-3 btn-glow ripple cursor-hover px-6 py-3"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={projects[0].demo}
                      className="flex items-center justify-center gap-3 glass neon-glow px-6 py-3 rounded-lg text-blue-400 hover:text-white transition-all duration-300 cursor-hover group"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Other Projects Grid */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {projects.slice(1).map((project, index) => (
              <ScrollReveal 
                key={project.title} 
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 150}
              >
                <div className="glass card-hover rounded-xl p-4 sm:p-6 border border-slate-600/30 relative overflow-hidden group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed flex-grow">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {project.stack.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-md skill-icon cursor-hover">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 mt-auto">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 cursor-hover group"
                      >
                        <Github size={16} className="group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-all duration-300 cursor-hover group"
                      >
                        <ExternalLink size={16} className="group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm">Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
