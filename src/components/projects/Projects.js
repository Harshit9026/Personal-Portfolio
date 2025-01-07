import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title=" Robot Fleet Monitoring Dashboard "
          des="  Designed and implemented a responsive dashboard using React.js to visualize real-time telemetry data for a fleet of
 robots, integrating WebSockets and periodic polling for updates. Built a FastAPI backend to generate mock telemetry data for up to 10 robots, exposing RESTful and WebSocket APIs
 for real-time updates and seamless integration with the frontend."
          src={projectOne}
          githubLink="https://github.com/Harshit9026/Fleet-dashboard-Frontend.git"
        />
        <ProjectsCard
          title=" MERN Stack Book Store with Inventory Management "
          des="  Developed a Book Store App using the MERN Stack (MongoDB, Express.js, React, Node.js) with features like
 authentication and an inventory management system for seamless book tracking. Built an Admin Panel allowing admins to upload, edit, and delete books, ensuring efficient inventory management and
 content control."
          src={projectTwo}
           githubLink="https://github.com/Harshit9026/Mern-Book-Store.git"
        />
        <ProjectsCard
          title=" Food Ordering Application "
          des="  Full-Stack Development with React, Node.js, and MongoDB: Built a complete food ordering application using React.js
 for the frontend, Node.js and Express.js for the backend, and MongoDB for efficient data storage and management.
  Stripe Payment Integration and Order Management: Integrated Stripe API for secure online payments."
          src={projectThree}
           githubLink="https://github.com/Harshit9026/Eat-On.git"
        />
      </div>
    </section>
  );
}

export default Projects