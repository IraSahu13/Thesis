import React from "react";
import Footer from "../components/footer/Footer";
import Title from "../components/layouts/Title";
import Navbar from "../components/navbar/Navbar";

function Chapters() {
  return (
    <div>
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
        <div className="flex justify-center items-center text-center mt-4">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="Book Chapters"
          />
        </div>
        <div className="max-w-screen-xl mx-auto">
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            1. Tarkeshwar Dubey, Shreyans Kumar Jain, & Siva Hemalatha. Chapter
            Blumea lacera (Asteraceae), a Potential Herb of Medicinal Value in
            Modern Aspects. In: Singh Bikarma, Sharma Yash Pal, editors. From
            Ethnobotany to Ethnopharmacology: Exploiting Plants for Novel Drug
            Molecules. ed. New Delhi, India: New India Publishing Agency; 2021.
            p. 397-410.
          </p>
          <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
            2. Bharat Goel, Bharat Sahu, & Shreyans Kumar Jain*. Chapter
            Plant-Derived Drug Discovery: Introduction to Recent Approaches. In:
            Singh Bikarma, editor. Botanical Leads for Drug Discovery. ed.
            Singapore: Springer Singapore; 2020. p. 1-27. (doi:
            https://doi.org/10.1007/978-981-15-5917-4_1).
          </p>
          <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
            3. Amrita K Cheema, Scott Grindrod, Xiaogang Zhong, Shreyans Jain,
            Smrithi S Menon, Khyati Y Mehta, Simeng Suy, Sean Collins, Yiwen
            Wang, & Olga Timofeeva. Chapter Discovery of Metabolic Biomarkers
            Predicting Radiation Therapy Late Effects in Prostate Cancer
            Patients. Human Cell Transformation. ed. Springer; 2019. p. 141-150.
          </p>
          <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
            4. Shreyans Kumar Jain. Chapter Dysoxylum Binectariferum Hook.f., An
            Indian Medicinal Plant as a Source for Anti-Cancer Agents. In: Singh
            Bikarma, editor. Plants for Human Survival and Medicine. ed. New
            Delhi, India: New India Publishing Agency; 2019. p. 115-149.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Chapters;
