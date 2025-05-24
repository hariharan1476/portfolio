import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Full Stack Development',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'MongoDB', level: 70 },
      ]
    },
    {
      title: 'AI/ML & Data Science',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'TensorFlow', level: 75 },
        { name: 'Pandas', level: 80 },
        { name: 'Data Visualization', level: 70 },
        { name: 'Machine Learning', level: 75 },
      ]
    },
    {
      title: 'IoT & Embedded Systems',
      skills: [
        { name: 'Arduino', level: 70 },
        { name: 'Raspberry Pi', level: 65 },
        { name: 'Sensor Integration', level: 75 },
        { name: 'Embedded C', level: 60 },
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem-Solving', level: 90 },
        { name: 'Communication', level: 85 },
        { name: 'Time Management', level: 80 },
        { name: 'Teamwork', level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've developed a diverse set of skills through academic projects, self-learning, and hands-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                      <div 
                        className="h-2 bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;