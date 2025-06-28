import  { useEffect, useRef, useState } from 'react';
import { Code, Coffee, Music, Camera } from 'lucide-react';
import Profilepic from "../assets/profile-pic-2.png"

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Cups of Coffee', value: '1000+' }
];

const interests = [
  { icon: Code, label: 'Clean Code', color: 'text-blue-400' },
  { icon: Coffee, label: 'Tea Lover', color: 'text-amber-400' },
  { icon: Music, label: 'Music Lover', color: 'text-purple-400' },
  { icon: Camera, label: 'Photography', color: 'text-green-400' }
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate stats
          stats.forEach((stat, index) => {
            const numericValue = parseInt(stat.value.replace(/\D/g, ''));
            let current = 0;
            const increment = numericValue / 30;
            const timer = setInterval(() => {
              current += increment;
              if (current >= numericValue) {
                current = numericValue;
                clearInterval(timer);
              }
              setAnimatedStats(prev => {
                const newStats = [...prev];
                newStats[index] = Math.floor(current);
                return newStats;
              });
            }, 50);
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
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-slideInLeft' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl rounded-full"></div>
              <img
                src={Profilepic}
                alt="Harshit Shukla"
                className="relative w-80 h-80 mx-auto rounded-full object-cover border-4 border-white/20 shadow-2xl"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'animate-slideInRight' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Hello! I'm Harshit Shukla</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer  specialize in building responsive, scalable web applications using React, Node.js, and modern web technologies. Through hands-on projects, internships, and hackathons, I've developed a strong foundation in frontend and backend development, and I’m always eager to learn and solve real-world problems.

              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or enjoying a good cup of coffee while planning my next 
                creative project.
              </p>

              {/* Interests */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {interests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                      <Icon className={`h-5 w-5 ${interest.color}`} />
                      <span className="text-gray-300 text-sm">{interest.label}</span>
                    </div>
                  );
                })}
              </div>

              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Let's Work Together
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}