
import React from 'react';
import { Award, Shield, BarChart3, Cloud, Code, Brain } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Certifications = () => {
  const certifications = [
    {
      title: 'Cisco Introduction to Cybersecurity',
      icon: Shield,
      color: 'blue'
    },
    {
      title: 'Cisco Cybersecurity Essentials',
      icon: Shield,
      color: 'blue'
    },
    {
      title: 'Deloitte Certified Data Analytics Job Simulation',
      icon: BarChart3,
      color: 'green'
    },
    {
      title: 'AWS Academy Graduate – Cloud Foundations',
      icon: Cloud,
      color: 'orange'
    },
    {
      title: 'TCS CodeVita Season 12 – Round 1 Cleared',
      icon: Code,
      color: 'purple'
    },
    {
      title: 'Semifinalist, Hackmania by Microsoft',
      subtitle: 'ZeroWasteMart Project',
      icon: Brain,
      color: 'red'
    }
  ];

  const getIconColor = (color: string) => {
    const colorMap = {
      blue: 'text-blue-400',
      green: 'text-green-400',
      orange: 'text-orange-400',
      purple: 'text-purple-400',
      red: 'text-red-400'
    };
    return colorMap[color as keyof typeof colorMap] || 'text-blue-400';
  };

  const getBgColor = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-600/20',
      green: 'bg-green-600/20',
      orange: 'bg-orange-600/20',
      purple: 'bg-purple-600/20',
      red: 'bg-red-600/20'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-blue-600/20';
  };

  return (
    <section id="certifications" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Certifications & <span className="text-blue-400">Achievements</span>
          </h2>
        </ScrollReveal>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <ScrollReveal 
                  key={index} 
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  delay={index * 100}
                >
                  <div className="glass card-hover rounded-xl p-6 border border-slate-600/30 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className={`p-3 ${getBgColor(cert.color)} rounded-lg w-fit mb-4`}>
                        <IconComponent size={24} className={getIconColor(cert.color)} />
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {cert.title}
                      </h3>
                      
                      {cert.subtitle && (
                        <p className="text-gray-400 text-sm">{cert.subtitle}</p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
