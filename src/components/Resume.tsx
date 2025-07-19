
import React from 'react';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  const handleDownloadResume = () => {
    // For now, this will show an alert. In a real implementation, 
    // you would link to an actual PDF file
    alert('Resume download functionality would be implemented here with an actual PDF file.');
  };

  return (
    <section id="resume" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="text-blue-400">Resume</span>
        </h2>
        
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-slate-900/50 rounded-xl p-8">
            <div className="mb-6">
              <FileText size={64} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Download My Resume</h3>
              <p className="text-gray-300">
                Click the button below to view or download my resume.
              </p>
            </div>
            
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-3 mx-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 hover:transform hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </button>
            
            <p className="text-sm text-gray-400 mt-4">
              PDF format • Last updated: December 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
