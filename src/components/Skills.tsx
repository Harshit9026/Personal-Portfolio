// import React, { useEffect, useRef, useState } from 'react';
import { 
  // Code, 
  // Database, 
  // Brain,
  // Settings,
  CheckCircle
} from 'lucide-react';

// const skillCategories = [
//   {
//   title: 'Frontend',
//   icon: Code,
//   color: 'from-blue-600 to-cyan-600',
//   skills: [
//     { name: 'React', level: 90 },
//     { name: 'Next.js', level: 85 },
//     { name: 'TypeScript', level: 85 },
//     { name: 'Tailwind CSS', level: 88 },
//     { name: 'Bootstrap', level: 80 },
//     { name: 'JavaScript', level: 90 }
//   ]
// },
//   {
//     title: 'Backend',
//     icon: Database,
//     color: 'from-green-600 to-emerald-600',
//     skills: [
//       { name: 'Node.js', level: 85 },
//       { name: 'Express.js', level: 82 },
//       { name: 'MongoDB', level: 80 },
//       { name: 'PostgreSQL', level: 78 },
//       { name: 'REST APIs', level: 85 },
//       { name: 'GrpahQl', level: 80 }
//     ]
//   },
//   {
//     title: 'CS Fundamentals',
//     icon: Brain,
//     color: 'from-red-600 to-orange-600',
//     skills: [
//       { name: 'Data Structures & Algorithms', level: 90 },
//       { name: 'Object-Oriented Programming (OOPs)', level: 88 },
//       { name: 'Database Management Systems (DBMS)', level: 85 },
//       { name: 'Computer Networks', level: 82 },
//       { name: 'Operating Systems', level: 80 }
//     ]
//   },
//   {
//     title: 'Tools & Workflow',
//     icon: Settings,
//    color: 'from-indigo-600 to-purple-600',
//     skills: [
//       { name: 'Git', level: 90 },
//       { name: 'Docker', level: 75 },
//       { name: 'VS Code', level: 85 },
//       { name: 'Postman', level: 80 },
//       { name: 'Swagger', level: 78 },
//     ]
//   }
// ];
// export default function Skills() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({});
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           skillCategories.flatMap(c => c.skills).forEach((skill, index) => {
//             setTimeout(() => {
//               let current = 0;
//               const increment = skill.level / 30;
//               const skillKey = `${skill.name}`;
//               const timer = setInterval(() => {
//                 current += increment;
//                 if (current >= skill.level) {
//                   current = skill.level;
//                   clearInterval(timer);
//                 }
//                 setAnimatedLevels(prev => ({ ...prev, [skillKey]: Math.floor(current) }));
//               }, 30);
//             }, index * 100);
//           });
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="skills" className="py-20 relative">
//       <div className="max-w-5xl mx-auto px-4" ref={sectionRef}>
//         <div className={`text-center mb-12 transition-all duration-1000 ${
//           isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'
//         }`}>
//           <h2 className="text-4xl font-bold text-white mb-4">
//             Skills Overview
//           </h2>
//           <p className="text-gray-400 text-md">
//             A snapshot of my key technical strengths and learning focus areas
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {skillCategories.map((category, index) => {
//             const Icon = category.icon;
//             return (
//               <div
//                 key={category.title}
//                 className={`transition-all duration-1000 ${
//                   isVisible ? 'animate-fadeInUp' : 'opacity-0'
//                 }`}
//                 style={{ transitionDelay: `${index * 150}ms` }}
//               >
//                 <div className="bg-white/5 p-8 md:p-9 rounded-2xl border border-white/10">
//   <div className="flex items-center mb-5">
//     <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
//       <Icon className="h-6 w-6 text-white" />
//     </div>
//     <h3 className="text-white font-semibold text-xl">{category.title}</h3>
//   </div>

//                   <div className="space-y-3">
//   {category.skills.map(skill => {
//     const progress = animatedLevels[skill.name] ?? 0;

//     return (
//       <div key={skill.name}>
//         <div className="flex justify-between text-sm text-gray-300">
//           <span>{skill.name}</span>
//           <span>{progress}%</span>
//         </div>
//         <div className="h-2 bg-gray-700 rounded-full">
//           <div
//             className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
//             style={{ width: `${progress}%` }}
//           />
//         </div>
//       </div>
//     );
//   })}
// </div>

//                 </div>
//               </div>
//             );
//           })}
//         </div>

import React, { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  Database, 
  Brain,
  Settings
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      'React',
      'Next.js', 
      'TypeScript',
      'Tailwind CSS',
      'Bootstrap',
      'JavaScript'
    ]
  },
  {
    title: 'Backend',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'REST APIs',
      'GraphQL'
    ]
  },
  {
    title: 'CS Fundamentals',
    icon: Brain,
    color: 'from-red-500 to-orange-500',
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Computer Networks',
      'Operating Systems'
    ]
  },
  {
    title: 'Tools & Workflow',
    icon: Settings,
    color: 'from-purple-500 to-pink-500',
    skills: [
      'Git',
      'Docker',
      'VS Code',
      'Postman',
      'AWS'
    ]
  }
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate skills with staggered delay
          skillCategories.forEach((category, categoryIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(() => {
                setAnimatedSkills(prev => new Set([...prev, `${category.title}-${skill}`]));
              }, (categoryIndex * 300) + (skillIndex * 150));
            });
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative">
      {/* Subtle background pattern */}
      
      <div className="max-w-5xl mx-auto px-4" ref={sectionRef}>
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold text-white mb-4">
            Skills Overview
          </h2>
          <p className="text-gray-400 text-md">
            A snapshot of my key technical strengths and learning focus areas
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="group">
                  {/* Category Header */}
                  <div className="flex items-center mb-8">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} shadow-lg mr-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const isAnimated = animatedSkills.has(`${category.title}-${skill}`);
                      
                      return (
                        <div
                          key={skill}
                          className={`group/skill transition-all duration-700 ${
                            isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                          }`}
                          style={{ transitionDelay: `${skillIndex * 100}ms` }}
                        >
                          <div className="relative">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer">
                              <div className="flex items-center">
                                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} mr-4 group-hover/skill:scale-125 transition-transform duration-300`}></div>
                                <span className="text-white text-lg font-medium group-hover/skill:text-transparent group-hover/skill:bg-gradient-to-r group-hover/skill:bg-clip-text group-hover/skill:from-white group-hover/skill:to-gray-300 transition-all duration-300">
                                  {skill}
                                </span>
                              </div>
                              
                              {/* Hover effect line */}
                              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${category.color} transition-all duration-300 group-hover/skill:w-full w-0`}></div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decoration */}
        <div className={`mt-20 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '1200ms' }}>
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>
      
   

        {/* Certifications (Optional) */}
        <div className={`mt-16 transition-all duration-1000 ${
          isVisible ? 'animate-fadeInUp' : 'opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Prompt Design in Vertex AI – Google Cloud',
              'Frontend Developer (React) – HackerRank',
              'Goldman Sachs Software Engineering Virtual Experience – Forage',
              'AWS- Solutions Architecture Job Simulation'
            ].map((cert, index) => (
              <div key={index} className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                <CheckCircle className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <p className="text-gray-300 text-sm">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
