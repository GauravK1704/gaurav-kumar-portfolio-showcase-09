import React from 'react';
import { Briefcase, Calendar, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Member of SIG C++',
      organization: 'Computer Society of India IPEC',
      duration: 'May 2025 - Present',
      type: 'Organization'
    },
    {
      title: 'Contributor',
      organization: 'GSSoc 2025',
      duration: 'Jul 2025',
      type: 'Open Source'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="text-blue-400">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-slate-900/50 rounded-xl p-8 hover:bg-slate-900/70 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-blue-600/20 rounded-lg">
                    <Briefcase size={32} className="text-blue-400" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <Building size={16} className="text-blue-400" />
                      <span className="text-lg text-blue-400 font-medium">
                        {exp.organization}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar size={16} className="text-gray-400" />
                      <span className="text-gray-300">{exp.duration}</span>
                    </div>
                    
                    <div className="inline-block px-3 py-1 bg-purple-600/20 rounded-full">
                      <span className="text-purple-400 text-sm font-medium">{exp.type}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;