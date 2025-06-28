import React, { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  Database, 
  Brain,
  Settings,
  CheckCircle
} from 'lucide-react';

const skillCategories = [
  {
  title: 'Frontend',
  icon: Code,
  color: 'from-blue-600 to-cyan-600',
  skills: [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'Bootstrap', level: 80 },
    { name: 'JavaScript', level: 90 }
  ]
},
  {
    title: 'Backend',
    icon: Database,
    color: 'from-green-600 to-emerald-600',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 82 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'REST APIs', level: 85 },
      { name: 'JWT Auth', level: 80 }
    ]
  },
  {
    title: 'CS Fundamentals',
    icon: Brain,
    color: 'from-red-600 to-orange-600',
    skills: [
      { name: 'Data Structures & Algorithms', level: 90 },
      { name: 'Object-Oriented Programming (OOPs)', level: 88 },
      { name: 'Database Management Systems (DBMS)', level: 85 },
      { name: 'Computer Networks', level: 82 },
      { name: 'Operating Systems', level: 80 }
    ]
  },
  {
    title: 'Tools & Workflow',
    icon: Settings,
   color: 'from-indigo-600 to-purple-600',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'VS Code', level: 85 },
      { name: 'Postman', level: 80 },
      { name: 'Swagger', level: 78 },
    ]
  }
];
export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          skillCategories.flatMap(c => c.skills).forEach((skill, index) => {
            setTimeout(() => {
              let current = 0;
              const increment = skill.level / 30;
              const skillKey = `${skill.name}`;
              const timer = setInterval(() => {
                current += increment;
                if (current >= skill.level) {
                  current = skill.level;
                  clearInterval(timer);
                }
                setAnimatedLevels(prev => ({ ...prev, [skillKey]: Math.floor(current) }));
              }, 30);
            }, index * 100);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4" ref={sectionRef}>
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-white mb-4">
            Skills Overview
          </h2>
          <p className="text-gray-400 text-md">
            A snapshot of my key technical strengths and learning focus areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`transition-all duration-1000 ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white/5 p-8 md:p-9 rounded-2xl border border-white/10">
  <div className="flex items-center mb-5">
    <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-white font-semibold text-xl">{category.title}</h3>
  </div>

                  <div className="space-y-3">
  {category.skills.map(skill => {
    const progress = animatedLevels[skill.name] ?? 0;

    return (
      <div key={skill.name}>
        <div className="flex justify-between text-sm text-gray-300">
          <span>{skill.name}</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 bg-gray-700 rounded-full">
          <div
            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
            style={{ width: `${progress}%` }}
          />
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

        {/* Certifications (Optional) */}
        <div className={`mt-16 transition-all duration-1000 ${
          isVisible ? 'animate-fadeInUp' : 'opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Prompt Design in Vertex AI – Google Cloud',
              'Frontend Developer (React) – HackerRank',
              'Goldman Sachs Software Engineering Virtual Experience – Forage'
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
