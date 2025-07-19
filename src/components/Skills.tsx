
import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';

const Skills = () => {
  const [animatedBars, setAnimatedBars] = useState<Set<number>>(new Set());
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'C' },
        { name: 'C++' },
        { name: 'JavaScript' },
        { name: 'Python' },
        { name: 'HTML' },
        { name: 'CSS' }
      ],
      color: 'blue',
      icon: '💻'
    },
    {
      title: 'Technologies',
      skills: [
        { name: 'Firebase' },
        { name: 'SQL' },
        { name: 'Git & GitHub' },
        { name: 'Tableau' }
      ],
      color: 'purple',
      icon: '⚙️'
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'AWS (Cloud Foundations)' },
        { name: 'Canva' },
        { name: 'Lovable AI' },
        { name: 'VS Code' }
      ],
      color: 'green',
      icon: '🛠️'
    },
    {
      title: 'Other Skills',
      skills: [
        { name: 'Data Analysis' },
        { name: 'Problem Solving' },
        { name: 'Cybersecurity Fundamentals' },
        { name: 'AI Solutions' },
        { name: 'Team Collaboration' },
        { name: 'Web App Development' }
      ],
      color: 'orange',
      icon: '🎯'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skillCategories.forEach((category, categoryIndex) => {
              category.skills.forEach((_, skillIndex) => {
                const skillId = categoryIndex * 100 + skillIndex;
                setTimeout(() => {
                  setAnimatedBars(prev => new Set([...prev, skillId]));
                }, (categoryIndex * 200) + (skillIndex * 100));
              });
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-600 to-blue-400',
      purple: 'from-purple-600 to-purple-400',
      green: 'from-green-600 to-green-400',
      orange: 'from-orange-600 to-orange-400'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getBorderClass = (color: string) => {
    const colorMap = {
      blue: 'border-blue-400/30',
      purple: 'border-purple-400/30',
      green: 'border-green-400/30',
      orange: 'border-orange-400/30'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={skillsRef}>
        <ScrollReveal direction="up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-12 sm:mb-16">
            My <span className="text-blue-400 glow">Skills</span>
          </h2>
        </ScrollReveal>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <ScrollReveal 
                key={category.title} 
                direction={categoryIndex % 2 === 0 ? 'left' : 'right'}
                delay={categoryIndex * 200}
              >
                <div className={`glass card-hover rounded-xl p-4 sm:p-6 border ${getBorderClass(category.color)} relative overflow-hidden group`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(category.color)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <span className="text-2xl sm:text-3xl mr-2 sm:mr-3 skill-icon">{category.icon}</span>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-2 sm:space-y-3">
                      {category.skills.map((skill, skillIndex) => {
                        const skillId = categoryIndex * 100 + skillIndex;
                        const isAnimated = animatedBars.has(skillId);
                        
                        return (
                          <div key={skill.name} className="skill-item">
                            <div className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r ${getColorClasses(category.color)} bg-opacity-20 border border-opacity-30 transform transition-all duration-300 ${isAnimated ? 'scale-105' : 'scale-100'} hover:scale-105`}>
                              <span className="text-gray-300 font-medium text-xs sm:text-sm">{skill.name}</span>
                            </div>
                          </div>
                        );
                      })}
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

export default Skills;
