import React from 'react';
import { Download, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Hariharan</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-6">
              AI & DS Student | Full Stack Developer | ML Enthusiast
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
              As a Third‑year B.Tech student specializing in AI & DS, I'm passionate about 
              full‑stack web development, algorithms, and machine learning. I'm actively seeking 
              opportunities in Machine Learning, Data Engineering, and Python Development.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="hari.pdf" 
                download="hari.pdf"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Download className="h-5 w-5" />
                Download CV
              </a>
              <a 
                href="#contact" 
                className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
  <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
    <img
      src="pic 1 normal.jpeg"  // 👈 Replace with your photo path
      alt="Hariharan Krishnamoorthy"
      className="w-full h-full object-cover"
    />
  </div>
</div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ChevronDown className="h-8 w-8 text-gray-600 dark:text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;