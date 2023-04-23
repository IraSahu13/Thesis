import React from "react";
import { motion } from "framer-motion";
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
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="PhD(CSIR-SRF)"
            subTitle="CSIR-Indian Institute of Integrative Medicine, Jammu"
            result="2011-2015"
            des="Enrolled in AcSIR (Academy of Scientific and Innovative Research). Under Supervision of Dr. Ram A. Vishwakarma 
Title- Isolation, Synthetic Modifications and Biological Evaluaton of Compounds from Dysoxylum binectariferum, Bergenia ciliata and Mallotus philippensis, Submitted on 11 February 2015, Awarded on Sept 3, 2015"
          />
          <ResumeCard
            title="M.S. (Pharm)"
            subTitle="Natural Product Chemistry Department, NIPER—Mohali"
            result="2005-2007"
            des="Under Supervision of Dr. IP Singh. 
Title- Synthesis and antileishmanial activity of piperine - amino acid conjugates"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2> */}
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B. Pharmacy"
            subTitle="Lachoo Memorial College of Science & Technology- Jodhpur"
            result="2001-2004"
            // des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
          <ResumeCard
            title="12th RBSE Ajmer"
            subTitle="Physics, Chemistry and Biology"
            result="1998"
            des="68%"
          />
          <ResumeCard
            title="10th  RBSE Ajmer"
            // subTitle="Kingstar Secondary School (2001 - 2010)"
            result="1996"
            des="66%"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
