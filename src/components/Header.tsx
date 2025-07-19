
import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import jsPDF from 'jspdf';

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
    const pdf = new jsPDF();
    
    // Set font sizes and line height
    const lineHeight = 7;
    let yPosition = 20;
    
    // Header
    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Gaurav Kumar', 20, yPosition);
    yPosition += 10;
    
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Software Developer', 20, yPosition);
    yPosition += 15;
    
    // Contact Information
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('CONTACT INFORMATION', 20, yPosition);
    yPosition += lineHeight;
    
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Email: gk1237677@gmail.com', 20, yPosition);
    yPosition += lineHeight;
    pdf.text('LinkedIn: linkedin.com/in/gaurav-kumar-502371216/', 20, yPosition);
    yPosition += lineHeight;
    pdf.text('GitHub: github.com/GauravK1704', 20, yPosition);
    yPosition += 10;
    
    // Professional Summary
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('PROFESSIONAL SUMMARY', 20, yPosition);
    yPosition += lineHeight;
    
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    const summary = 'B.Tech CSE Student passionate about building impactful web and AI-based applications. Building the future, one line of code at a time.';
    const summaryLines = pdf.splitTextToSize(summary, 170);
    pdf.text(summaryLines, 20, yPosition);
    yPosition += summaryLines.length * lineHeight + 5;
    
    // Technical Skills
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('TECHNICAL SKILLS', 20, yPosition);
    yPosition += lineHeight;
    
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    pdf.text('• Frontend: React, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS', 20, yPosition);
    yPosition += lineHeight;
    pdf.text('• Backend: Node.js, Express, Python, Java', 20, yPosition);
    yPosition += lineHeight;
    pdf.text('• Database: MongoDB, PostgreSQL, MySQL', 20, yPosition);
    yPosition += lineHeight;
    pdf.text('• Tools: Git, Docker, AWS, CI/CD', 20, yPosition);
    yPosition += 10;
    
    // Education
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('EDUCATION', 20, yPosition);
    yPosition += lineHeight;
    
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Bachelor of Technology in Computer Science Engineering', 20, yPosition);
    yPosition += lineHeight;
    pdf.text('Lovely Professional University (2022-2026)', 20, yPosition);
    yPosition += 10;
    
    // Projects
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('PROJECTS', 20, yPosition);
    yPosition += lineHeight;
    
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    pdf.text('• E-commerce Platform: Full-stack application with React and Node.js', 20, yPosition);
    yPosition += lineHeight;
    pdf.text('• AI-Based Applications: Machine learning and AI integration projects', 20, yPosition);
    yPosition += lineHeight;
    pdf.text('• Web Development Projects: Modern responsive web applications', 20, yPosition);
    
    // Save the PDF
    pdf.save('Gaurav_Kumar_Resume.pdf');
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
