
import React from 'react';
import { GraduationCap, Calendar, Trophy, Users } from 'lucide-react';

const Education = () => {
  const extracurriculars = [
    'Poster project Exhibition at IPEC 2023&24',
    'Attended BEcon 2025 at IIT Delhi',
    'Kotlin Developer Event – GL Bajaj Institute',
    'Blockchain Workshop – IPEC',
    'GitHub Fundamentals Workshop – GitHub India',
    'Lovable AI Workshop – Web AI Design Platform'
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Education & <span className="text-blue-400">Achievements</span>
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-colors duration-200">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-blue-600/20 rounded-lg">
                  <GraduationCap size={32} className="text-blue-400" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    B.Tech – Computer Science & Engineering
                  </h3>
                  <h4 className="text-lg text-blue-400 mb-1">
                    (Data Science)
                  </h4>
                  
                  <h4 className="text-lg text-blue-400 mb-3">
                    Inderprastha Engineering College, AKTU
                  </h4>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar size={16} className="text-gray-400" />
                    <span className="text-gray-300">2023 – 2027</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-green-600/20 inline-block px-4 py-2 rounded-lg mr-2">
                      <span className="text-green-400 font-semibold">1st Year CGPA: 7.55</span>
                    </div>
                    <div className="bg-green-600/20 inline-block px-4 py-2 rounded-lg">
                      <span className="text-green-400 font-semibold">2nd Year CGPA: 7.8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Extracurriculars */}
            <div className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800/70 transition-colors duration-200">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-purple-600/20 rounded-lg">
                  <Trophy size={32} className="text-purple-400" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Extracurriculars & Events
                  </h3>
                  
                  <div className="space-y-3">
                    {extracurriculars.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Users size={16} className="text-purple-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm leading-relaxed">{activity}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-gray-400 text-sm mt-4 italic">
                    Active participant in coding contests, seminars, and innovation challenges
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
