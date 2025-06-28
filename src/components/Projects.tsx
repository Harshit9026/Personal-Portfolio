import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const projects = [
  {
    title: 'Fleet Monitoring Dashboard',
    description: ' Developed a real-time telemetry dashboard using React.js, WebSockets, and polling, improving data update efficiency .Engineered a scalable FastAPI backend to simulate real-time telemetry for 10+ autonomous robotic units. both RESTful and WebSocket APIs to enable seamless bidirectional communication and data flow.',
    image: 'https://th.bing.com/th/id/OIP.qiO9rGEk0snF4B1M_5yIswHaFB?r=0&rs=1&pid=ImgDetMain',
    technologies: ['React', 'Node.js', 'MongoDb', 'Express'],
    githubUrl: '#',
    category: 'Full Stack',
    date: '2024'
  },
  {
    title: 'Online Book Store with Inventory Management',
    description: ' Built a full-stack e-commerce web application using the MERN stack .Implemented secure user authentication and dynamic inventory management for efficient book tracking and content control.Developed a feature-rich admin panel, improving book listing management and boosting operational .',
    image: 'https://i.pinimg.com/originals/1d/18/b8/1d18b8bd3ac726dd772a17fbbf4dd01e.jpg',
    technologies: ['React', 'Node.js', 'MongoDb', 'Express'],
    githubUrl: '#',
    category: 'Full Stack',
    date: '2024'
  },
  {
    title: 'Food App',
    description: ' Developed a food ordering web application with secure user authentication (JWT),shopping cart, and order tracking system. Integrated Stripe API for secure payment processing, ensuring a seamless checkout experience. Implemented real-time order management with dynamic status updates.',
    image: 'https://i.pinimg.com/originals/80/7e/51/807e51d4b964d37bc9861caf91d8b896.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Full Stack',
    date: '2024'
  },
  {
    title: 'Modern Bussiness App',
    description: 'Designed and implemented a complete compiler with lexical analysis, syntax parsing, semantic analysis, and code generation for a custom programming language.',
    image: 'https://th.bing.com/th/id/OIP.Q7w0u3uboyvAP4nSqntj_gHaED?r=0&rs=1&pid=ImgDetMain',
    technologies: ['Html', 'Css', 'Javascript', 'ReactJs'],
    githubUrl: '#',
    category: 'Frontend',
    date: '2023'
  },
  {
    title: 'Travel App',
    description: 'Interactive web application for visualizing sorting algorithms, graph algorithms, and data structures. Helps students understand complex algorithms through animations.',
    image: 'https://th.bing.com/th/id/OIP.B2XaCqJM_nphDCKLVMF8lAHaET?r=0&rs=1&pid=ImgDetMain',
    technologies: ['Html', 'Css', 'Javascript', 'ReactJs'],
    githubUrl: '#',
    category: 'Frontend',
    date: '2023'
  },
  {
    title: 'Real Time Chat Application',
    description: 'Built a Chat Application tool for network troubleshooting and security analysis. Captures and analyzes network traffic with detailed protocol breakdown.',
    image: 'https://th.bing.com/th/id/OIP.mrTTZ-_NEDPPGbXVM3F6XgHaFj?r=0&rs=1&pid=ImgDetMain',
    technologies: ['React.Js', 'Node.Js' , 'Express', 'MongoDB' , 'Socket.io'],
    githubUrl: '#',
    category: 'Full Stack',
    date: '2024'
  },
  {
    title: 'AI Code Viewer',
    description: 'An AI-powered Code Viewer tool using OpenAI API. Users can generate unique images from text prompts with various style options.',
    image: 'https://th.bing.com/th/id/OIP.3sCNQMza0Ai-NaRgE_f-IQHaEc?r=0&rs=1&pid=ImgDetMain',
    technologies: ['React.Js', 'Node.Js', 'OpenAI'],
    githubUrl: '#',
    category: 'AI/ML',
    date: '2025'
  },
  // {
  //   title: 'Competitive Programming Solutions',
  //   description: 'Collection of optimized solutions for 500+ algorithmic problems from LeetCode, Codeforces, and other platforms. Includes detailed explanations and complexity analysis.',
  //   image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg',
  //   technologies: ['C++', 'Python', 'Java', 'Algorithms', 'Data Structures'],
  //   liveUrl: '#',
  //   githubUrl: '#',
  //   category: 'Algorithms',
  //   date: '2022-2024'
  // },
  // {
  //   title: 'Social Media Analytics',
  //   description: 'A comprehensive analytics platform for social media management with detailed insights, reporting, and automated scheduling.',
  //   image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
  //   technologies: ['Vue.js', 'Python', 'Django', 'Chart.js', 'PostgreSQL'],
  //   liveUrl: '#',
  //   githubUrl: '#',
  //   category: 'Full Stack',
  //   date: '2023'
  // }
];

const categories = ['All', 'Full Stack', 'AI/ML', 'Frontend'];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
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

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            A showcase of my work spanning systems programming, algorithms, full-stack development, and CS fundamentals
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl ${
                isVisible ? 'animate-scaleIn' : 'opacity-0 scale-75'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    aria-label="View Live Site"
                  >
                    <ExternalLink className="h-4 w-4 text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    aria-label="View Source Code"
                  >
                    <Github className="h-4 w-4 text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300">
                    <Tag className="h-3 w-3 mr-1" />
                    {project.category}
                  </span>
                  <span className="flex items-center text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs hover:bg-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-10'
        }`}>
          <a
            href="https://github.com/Harshit9026"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}