import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2007 - Current
          </p>
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Assistant Professor"
            subTitle="Department of Pharmaceutical Engineering & Technology (BHU), Varanasi"
            result="2018-Current"
            // des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Post-doctoral Research Associate"
            subTitle="Georgetown university Washington DC"
            result="2016-2018"
            des="LCMS based Metabolomics and Proteomics"
          />
          <ResumeCard
            title="Post-doctoral Research Associate (CSIR-RA)"
            subTitle="CSIR-Indian Institute of Integrative Medicine, Jammu"
            result="2015-2016"
            des="Enrolled in AcSIR (Academy of Scientific and Innovative Research, http://acsir.res.in/ ). Under Supervision of Dr. Ram A. Vishwakarma"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2> */}
        </div>
        <div className="mt-20 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Research Assistant"
            subTitle="CSIR-Indian Institute of Integrative Medicine, Jammu"
            result="2010-2011"
            des="Govt of India sponsored multi institutional project: VI-D&P/334/09-10/TDT and BT/PR/10546/NDB/52/172/2008. PI: Dr. Ram Vishwakarma"
          />
          <ResumeCard
            title="Research Associate (Industrial R&D)"
            subTitle="Piramal Life Science, Mumbai"
            result="2007-2010"
            des="In Natural Product Chemistry lab (Medicinal Chemistry division) New Chemical Entities Department in Piramal Life Sciences"
          />
          <ResumeCard
            title="Lecturer"
            subTitle="Seedling Pharmacy College, Jaipur"
            result="May 2007- Aug 2007"
            // des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
