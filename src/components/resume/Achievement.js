import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" Goldman Sachs Software Engineering Virtual Experience Program"
            subTitle="Governance Analyst | IT Security Assessment & Password Cracking Simulation."
            result="Success"
            des=" Performed rigorous assessments of IT security controls during a job simulation as a Goldman Sachs governance
 analyst; identified 7 critical areas for improvement, directly influencing strategic planning for future IT security
 initiatives.
 • Identified 5+ Critical issues by cracking passwords using Hashcat and suggested improvement.."
          />
        </div>
      </div>
      <div>
      </div>
    </motion.div>
  );
};

export default Achievement;
