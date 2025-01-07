import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe} from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

// Features Data
export const featuresData = [
  {
    id: 1,
    title: "Full Stack Web Developer",
    des: "Build dynamic, responsive, and scalable web applications using MongoDB, Express, React, and Node.js.",
  },
  {
    id: 2,
    icon: <AiFillAppstore />,
    title: "API Development: ",
    des: "Design and implement robust RESTful APIs for seamless data communication between front-end and back-end.",
  },
  {
    id: 3,
    icon: <SiProgress />,
    title: "Database Management",
    des: "Efficiently manage and optimize databases using MongoDB for high-performance applications.",
  },
  {
    id: 4,
    icon: <FaMobile />,
    title: "Real-Time Applications",
    des: " Develop real-time features like chat systems and notifications using WebSockets.",
  },
  {
    id: 5,
    icon: <SiAntdesign />,
    title: "UX Design",
    des: "Create user-friendly interfaces with React, ensuring a smooth and engaging user experience.",
  },
  {
    id: 6,
    icon: <FaGlobe />,
    title: "Hosting Websites",
    des: "Deploy web applications on cloud platforms like AWS or Heroku and provide ongoing maintenance and support.",
  },
];
