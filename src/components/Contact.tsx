import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Email</h4>
                  <a 
                    href="mailto:haranh503@gmail.com" 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    haranh503@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Phone</h4>
                  <a 
                    href="tel:+917092003788" 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    +91 7092003788
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">LinkedIn</h4>
                  <a 
                    href="http://linkedin.com/in/hari-haran-k-08a8a1249/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Hariharan Krishnamoorthy
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Github className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">GitHub</h4>
                  <a 
                    href="https://github.com/hariharan1476" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    @hariharan1476
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;