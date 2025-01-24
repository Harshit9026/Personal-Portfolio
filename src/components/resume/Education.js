import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Pursuing B.tech"
            subTitle="National Institute of Technology , Durgapur (2022 - 2026)"
            result="3.90/4"
            des="Pursuing a Bachelor of Technology (B.Tech) with a focus on  gaining strong foundational knowledge in engineering principles, problem-solving, and hands-on experience with modern technologies.."
          />
          <ResumeCard
            title="High School Education"
            subTitle="St. Don Bosco Senior Secondary School Education"
            result="5.00/5"
            des="Completed high school with a perfect GPA of 5.00/5, excelling in subjects like Mathematics, Science, and Computer Science. Actively participated in extracurricular activities such as debates and sports, earning accolades for academic excellence.."
          />
          <ResumeCard
            title="12th School Education"
            subTitle="St. Don Bosco Senior Secondary School Education"
            result="5.00/5"
            des="Completed high school with a perfect GPA of 5.00/5, excelling in subjects like Mathematics, Science, and Computer Science. Actively participated in extracurricular activities such as debates and sports, earning accolades for academic excellence.."
          />
        </div>
      </div>

    </motion.div>
  );
}

export default Education