import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold"> Experience</h2>
        </div>
        <div className="mt-14 w-full  border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Senior Web Developer"
            subTitle="SAE India (2022 - 2026)"
            result="Oman"
            des="– Led the development of the club’s official website using React and Tailwind CSS, increasing visitor engagement by 40%. Collaborated with a team of 5 members to create an event management system, enabling real-time registrations for
 200+ participants. Integrated REST APIs for a news blog, improving information accessibility for club members. Optimized the website for
 performance, reducing page load time by 30%. Conducted workshops on backend development for 50+ students, enhancing club visibility.."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
