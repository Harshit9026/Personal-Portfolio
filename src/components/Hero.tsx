import  { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';


const roles = [
  'Full Stack Developer',
  'Problem Solver',
  'Open Source Contributor',
  'AI & ML Enthusiast'
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typeText = () => {
      const currentRoleText = roles[currentRole];
      
      if (isTyping) {
        if (displayText.length < currentRoleText.length) {
          setDisplayText(currentRoleText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsTyping(false), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setIsTyping(true);
        }
      }
    };

    const timer = setTimeout(typeText, isTyping ? 100 : 50);
    return () => clearTimeout(timer);
  }, [displayText, isTyping, currentRole]);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

//   const downloadResume = () => {

//     // Enhanced resume content with DSA and CS subjects
//     const resumeContent = `
// ALEX JOHNSON
// Full Stack Developer & Software Engineer

// CONTACT
// Email: alex@example.com
// Phone: +1 (555) 123-4567
// Location: San Francisco, CA
// LinkedIn: linkedin.com/in/alexjohnson
// GitHub: github.com/alexjohnson

// SUMMARY
// Passionate software engineer with 5+ years of experience and strong CS fundamentals. Specialized in full-stack development, data structures & algorithms, and system design. Proven track record in building scalable applications and solving complex problems.

// TECHNICAL SKILLS
// Programming Languages: JavaScript, TypeScript, Python, Java, C++, C
// Frontend: React, Next.js, Vue.js, HTML5, CSS3, Tailwind CSS
// Backend: Node.js, Express.js, Django, Spring Boot, RESTful APIs
// Databases: PostgreSQL, MongoDB, MySQL, Redis
// Cloud & DevOps: AWS, Docker, Kubernetes, CI/CD, Linux
// Data Structures & Algorithms: Arrays, Trees, Graphs, Dynamic Programming, Sorting, Searching
// Core CS: Operating Systems, Computer Networks, Database Systems, System Design, Computer Architecture

// PROBLEM SOLVING
// LeetCode: 500+ problems solved, Rating: 1850+
// CodeChef: 200+ problems solved, 4-star rating
// Codeforces: 300+ problems solved, Rating: 1600+
// HackerRank: 150+ problems solved, 5-star rating

// EXPERIENCE
// Senior Full Stack Developer | TechCorp Solutions | 2022 - Present
// - Lead development of scalable web applications using React, Node.js, and AWS
// - Implemented efficient algorithms reducing query time by 60%
// - Mentored junior developers on DSA concepts and best practices
// - Designed system architecture for high-traffic applications (100k+ users)

// Full Stack Developer | InnovateLab | 2020 - 2022
// - Developed and maintained 15+ production applications
// - Optimized database queries and implemented caching strategies
// - Built microservices architecture using Docker and Kubernetes
// - Reduced application load time by 40% through performance optimization

// SOFTWARE ENGINEER INTERN | Google | Summer 2019
// - Worked on distributed systems and large-scale data processing
// - Implemented graph algorithms for social network analysis
// - Contributed to open-source projects with 1000+ stars on GitHub

// PROJECTS
// Custom Operating System Kernel
// - Built basic OS kernel with process scheduling and memory management
// - Technologies: C, Assembly, QEMU, GDB

// Distributed Database System
// - Implemented distributed database with ACID properties and Raft consensus
// - Technologies: Java, Multi-threading, TCP/IP, Distributed Systems

// E-Commerce Platform
// - Full-stack application with payment integration and real-time features
// - Technologies: React, Node.js, MongoDB, Stripe API, WebSockets

// EDUCATION
// Bachelor of Science in Computer Science
// University of Technology | 2014 - 2018
// GPA: 3.8/4.0, Magna Cum Laude
// Relevant Coursework: Data Structures, Algorithms, Operating Systems, Computer Networks, Database Systems, Software Engineering, Computer Architecture

// CERTIFICATIONS
// - AWS Certified Solutions Architect
// - Google Data Structures & Algorithms Certificate
// - Oracle Database Certified Associate
// - Meta Frontend Developer Certificate

// ACHIEVEMENTS
// - Winner of ACM ICPC Regional Programming Contest
// - Published research paper on "Efficient Graph Algorithms for Social Networks"
// - Open source contributor with 50+ contributions to major projects
// - Technical blog with 10k+ monthly readers
//     `;

//     const blob = new Blob([resumeContent], { type: 'text/plain' });
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'Alex_Johnson_Resume.txt';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     window.URL.revokeObjectURL(url);
//   };

const downloadResume = () => {
  const link = document.createElement('a');
  link.href = "\Harshit-Resume-new.pdf"; // Public folder path
  link.download = "Harshit-Resume-new.pdf"; // Optional: set the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// "C:\Users\harsh\Downloads\Harshit-Resume-new.pdf"

  // const handleSocialClick = (href: string) => {
  //   if (href === '#contact') {
  //     const contactSection = document.querySelector('#contact');
  //     if (contactSection) {
  //       contactSection.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   } else {
  //     // For external links, you would normally open them
  //     console.log(`Opening ${href}`);
  //   }
  // };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Harshit Shukla
            </span>
          </h1>
          
          <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-8 h-12 flex items-center justify-center">
            <span className="mr-2">I'm a</span>
            <span className="text-blue-400 font-semibold min-w-[300px] text-left">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Final-year B.Tech student at NIT Durgapur with skills in full-stack web development and a passion for solving problems through clean code and scalable systems. Hands-on experience through personal projects, internships, and competitive programming.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button 
              onClick={scrollToProjects}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center"
            >
              View My Work
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={downloadResume}
              className="text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-600 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 hover:shadow-lg flex items-center"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </button>
          </div>
          
         <div className="flex items-center justify-center space-x-6">
  {[
    { icon: Github, href: 'https://github.com/Harshit9026', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/Harshit9026', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:harshitshukla813@gmail.com', label: 'Email' }
  ].map((social, index) => {
    const Icon = social.icon;
    return (
      <a
        key={index}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
        aria-label={social.label}
      >
        <Icon className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors" />
      </a>
    );
  })}
</div>

        </div>
        
        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce"
        >
          <ArrowDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}