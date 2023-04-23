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
          {/* <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p> */}
          <h2 className="text-4xl font-bold">Awards and Achievements</h2>
        </div>
        <div className="mt-8 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Qualified GATE 2003-2004"
            subTitle="AIR -102"
            result="98.94 pecentile"
            // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Qualified GATE 2003"
            subTitle="AIR -108"
            result="97.94 pecentile"
            // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Qualified NIPER entrance for admission in MS (Pharm)"
            // subTitle="Lorem ipsum dolor sit amet alternative."
            // result="Success"
            // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Award CSIR SRF"
            // subTitle="Lorem ipsum dolor sit amet alternative."
            result="2012"
            // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Award CSIR Research Associateship"
            // subTitle="Lorem ipsum dolor sit amet alternative."
            result="2014-2015"
            // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Job Experience</h2> */}
        </div>
        <div className="mt-20 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Best Patent award on CSIR Foundation Day"
            // subTitle="Lorem ipsum dolor sit amet alternative."
            result="2014"
            // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Best Research Paper award on CSIR Foundation Day"
            // subTitle="Lorem ipsum dolor sit amet alternative."
            result="2015"
            // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Award for outstanding contribution to compound library on CSIR Foundation Day"
            // subTitle="Lorem ipsum dolor sit amet alternative."
            result="2015"
            // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Dr PC Vyas Memorial Award at Rajasthan Science Congress 8"
            // subTitle="Lorem ipsum dolor sit amet alternative."
            result="2021"
            // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
