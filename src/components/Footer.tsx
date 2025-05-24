import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <a href="#home" className="text-2xl font-bold text-blue-400 mb-6 inline-block">
            HK<span className="text-white">.</span>
          </a>
          
          <p className="mb-8 text-gray-400 max-w-lg mx-auto">
            As a full-stack developer and AI enthusiast, I'm passionate about creating efficient, 
            innovative solutions to real-world problems.
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="http://linkedin.com/in/hari-haran-k-08a8a1249/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/hariharan1476" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="mailto:haranh503@gmail.com" 
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Email
            </a>
            <a 
              href="hari.pdf" 
              download="hari.pdf"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Resume
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 flex items-center justify-center">
              <span>© {currentYear} Hariharan Krishnamoorthy. All rights reserved.</span>
              <Heart className="h-4 w-4 mx-2 text-red-500" />
              <span>Made with passion</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;