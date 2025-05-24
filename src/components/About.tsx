import React from 'react';
import { GraduationCap, Code, Database, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              As a Third‑year B.Tech student specializing in AI & DS at Karunya Institute of 
              Technology and Sciences, I am passionate about full‑stack web development, 
              algorithms, and machine learning.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I have a keen interest in advancing technologies and am actively seeking 
              opportunities in Machine Learning, Data Engineering, and Python Development roles 
              to apply my skills and contribute to innovative projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 transition-all hover:shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                B.Tech in AI & DS at Karunya Institute of Technology and Sciences
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 transition-all hover:shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Development</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Full-stack web development with modern frameworks and technologies
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 transition-all hover:shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Data Science</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Data analysis, visualization, and building machine learning models
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 transition-all hover:shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <Cpu className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">IoT & Embedded</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Working with IoT devices and embedded systems for innovative solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;