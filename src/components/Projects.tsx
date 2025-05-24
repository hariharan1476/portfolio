import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  website: string;
  github: string;
  technologies: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'KITS Mark Calculator',
      description: 'A web application that helps students calculate their academic marks and GPA according to the Karunya Institute grading system.',
      image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      website: 'https://kits-mark-calc.vercel.app/',
      github: 'https://github.com/hariharan1476/KITS-Mark-Calc',
      technologies: ['React', 'JavaScript', 'HTML/CSS', 'Vercel']
    },
    {
      title: 'TimeSync',
      description: 'Schedule Meeting With any Time Zone to Conduct our Meeting Without Time delay',
      image: 'timesync.webp',
      website: 'https://timesync-red.vercel.app/',
      github: 'https://github.com/hariharan1476/timesync',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB']
    },
    {
      title: 'Task Manager',
      description: 'A comprehensive task management system that allows users to create, organize, and track their tasks and projects.',
      image: 'https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      website: 'https://taskmanager-66iy.onrender.com/public-tasks',
      github: 'https://github.com/hariharan1476/taskmanager',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Render']
    },
    {
      title: 'Expense Splitter',
      description: 'An application that helps groups of friends or roommates track shared expenses and split bills fairly.',
      image: 'https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      website: 'https://expense-splitfair.vercel.app',
      github: 'https://github.com/hariharan1476/expense-split',
      technologies: ['React', 'Firebase', 'JavaScript', 'Vercel']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project demonstrates different skills and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;