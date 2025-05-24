import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-center mb-6">
              <Award className="h-16 w-16 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
              Professional Certifications
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
              I've earned various certifications to enhance my skills and knowledge in different areas of technology, 
              including web development, data science, and machine learning.
            </p>
            
            <div className="flex justify-center">
              <a 
                href="https://hariharan1476.github.io/web-certificates/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
                View All Certifications
              </a>
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 px-8 py-6">
            <p className="text-gray-700 dark:text-gray-300 text-center">
              These certifications demonstrate my commitment to continuous learning and professional development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;