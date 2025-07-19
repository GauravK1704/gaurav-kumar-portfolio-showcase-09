
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-12 sm:mb-16">
            About <span className="text-blue-400">Me</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Motivated and creative B.Tech Computer Science student passionate about building impactful 
                web and AI-based applications. Eager to apply my development skills in real-world projects 
                and collaborative tech environments.
              </p>
              
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Currently pursuing Computer Science and Engineering (Data Science) at Inderprastha Engineering College, AKTU. 
                I have qualified TCS CodeVita Season 12 and was a semifinalist at Hackmania by Microsoft.
              </p>
              
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I'm always excited to explore and build — especially in web development, artificial intelligence, 
                and cloud technologies. My goal is to leverage technology to make a positive impact on society.
              </p>
              
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                <div className="bg-blue-600/20 px-3 sm:px-4 py-2 rounded-lg neon-glow hover:bg-blue-600/30 transition-all duration-300 cursor-hover group">
                  <span className="text-blue-400 font-semibold group-hover:text-white transition-colors duration-300 text-sm sm:text-base">Web Development</span>
                </div>
                <div className="bg-purple-600/20 px-3 sm:px-4 py-2 rounded-lg neon-glow hover:bg-purple-600/30 transition-all duration-300 cursor-hover group">
                  <span className="text-purple-400 font-semibold group-hover:text-white transition-colors duration-300 text-sm sm:text-base">AI & Machine Learning</span>
                </div>
                <div className="bg-green-600/20 px-3 sm:px-4 py-2 rounded-lg neon-glow hover:bg-green-600/30 transition-all duration-300 cursor-hover group">
                  <span className="text-green-400 font-semibold group-hover:text-white transition-colors duration-300 text-sm sm:text-base">Data Science</span>
                </div>
              </div>
            </div>
            
            <div className="relative group order-first lg:order-last">
              <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center card-hover overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
                  alt="Developer workspace"
                  className="w-full h-full object-cover rounded-2xl opacity-80 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent rounded-2xl group-hover:from-slate-900/50 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
