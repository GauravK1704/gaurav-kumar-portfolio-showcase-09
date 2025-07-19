
import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleDownloadResume = () => {
    // Create a simple resume PDF content
    const resumeContent = `
Gaurav Kumar - Software Developer Resume

CONTACT INFORMATION
Email: gaurav@example.com
Phone: +1 (555) 123-4567
LinkedIn: linkedin.com/in/gauravkumar
GitHub: github.com/gauravkumar

PROFESSIONAL SUMMARY
Experienced software developer with expertise in modern web technologies.
Passionate about creating efficient, scalable applications with clean code.

TECHNICAL SKILLS
• Frontend: React, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS
• Backend: Node.js, Express, Python, Java
• Database: MongoDB, PostgreSQL, MySQL
• Tools: Git, Docker, AWS, CI/CD

EXPERIENCE
Senior Software Developer | TechCorp (2022-Present)
• Developed and maintained React applications
• Collaborated with cross-functional teams
• Improved application performance by 40%

Software Developer | WebSolutions (2020-2022)
• Built responsive web applications
• Implemented RESTful APIs
• Mentored junior developers

EDUCATION
Bachelor of Science in Computer Science
University Name (2016-2020)
GPA: 3.8/4.0

PROJECTS
• E-commerce Platform: Full-stack application with React and Node.js
• Task Management App: Real-time collaboration tool
• Weather Dashboard: API integration and data visualization
    `;

    // Create and download the resume as a text file (in a real app, you'd generate a PDF)
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Gaurav_Kumar_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass neon-glow shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-bold text-white cursor-hover">
            <span className="text-blue-400 glow">G</span>aurav<span className="text-blue-400 glow">K</span>umar
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium animated-underline cursor-hover relative group text-sm xl:text-base"
              >
                {item.label}
                <span className="absolute inset-0 bg-blue-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </button>
            ))}
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-3 xl:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 cursor-hover text-sm xl:text-base"
            >
              <Download size={16} />
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white cursor-hover p-2 rounded-lg glass neon-glow"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 glass rounded-xl p-4 sm:p-6 animate-fade-in">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 sm:py-3 text-gray-300 hover:text-blue-400 transition-all duration-300 animated-underline cursor-hover text-sm sm:text-base"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 w-full mt-3 sm:mt-4 px-3 sm:px-4 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 cursor-hover text-sm sm:text-base"
            >
              <Download size={16} />
              Download Resume
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
