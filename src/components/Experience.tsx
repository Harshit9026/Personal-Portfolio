import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Web Developer',
    company: 'SSTRUENCE Pvt Ltd.',
    location: 'Remote',
    period: 'March-2024 - May-2024',
    description: ' Enhanced UI/UX by refining design aesthetics and optimizing layout. Improved site navigation and responsiveness, increasing average session duration and pages per visit. Implemented performance-optimized animations, ensuring seamless compatibility across devices.',
    achievements: [
      ' user engagement by 20%',
      ' Increased mobile traffic by 15% ',
      ' reduced bounce rate by 25% through responsive design improvements'
    ]
  },
  {
    title: 'Senior Web Developer',
    company: 'SAE India',
    period: '2022 - 2026',
    description: ' Led the development of the club’s official website using React.js and Tailwind CSS. increasing visitor engagement by Collaborated with a team of 5 members to create an event management system Integrated REST APIs.',
    achievements: [
      'enabling real-time registrations for 200+ participants.',
      'Reduced bug reports by 50% through testing',
      'Improved user experience across all platforms'
    ]
  },

];

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center transition-all duration-1000 ${
                  isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="h-4 w-4 text-white" />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:order-2'
                }`}>
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300">
                        <Calendar className="h-3 w-3 mr-1" />
                        {experience.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {experience.title}
                    </h3>
                    
                    <div className="flex items-center text-gray-400 mb-4">
                      <span className="font-semibold text-blue-400">{experience.company}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {experience.location}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-gray-400 text-sm flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className={`mt-20 transition-all duration-1000 delay-1000 ${
          isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Education</h3>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-white mb-2">
              Bachelor of Technology
            </h4>
            <div className="flex items-center text-gray-400 mb-4">
              <span className="font-semibold text-blue-400">National Institute of Technology, Dugapur</span>
              <span className="mx-2">•</span>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                2022-2026
              </div>
            </div>
            <p className="text-gray-300">
              Pursuing Btech with a focus on Software Engineering and Web Development. 
              Active member of the Computer Science Club and hackathon participant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}