import React from "react";
import Footer from "../components/footer/Footer";
import Title from "../components/layouts/Title";
import Navbar from "../components/navbar/Navbar";

function Grants() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="flex justify-center items-center text-center mt-4">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="Grants and Consultancy"
        />
      </div>
      <h2 className="text-4xl font-bold ml-20">
        As Project Investigator/ Main Investigator
      </h2>
      <div className="max-w-screen-xl mx-auto">
        <p className="text-base font-bodyFont leading-6 tracking-wide mt-8">
          1. Seed Money IIT BHU 10 Lakh: Isolation and characterization of
          metabolites from plants and microbes to accelerate drug discovery
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
          2. One Industrial consultancy project: Analysis of herbs and Species:
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
          3. Exploring Anti-infective Potential of Panchagavya: Metabolomics and
          Proteomics Approaches By DST, for three years.
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
          4. CRG/2022/001637 titled Targeting CDK9 by coumarin based inhibitors:
          Design, Preparation and Biological Evaluation by SERB- CRG
        </p>
      </div>
      <h2 className="text-4xl font-bold ml-20 mt-10">As Co-Investigator</h2>
      <div className="max-w-screen-xl mx-auto">
        <p className="text-base font-bodyFont leading-6 tracking-wide mt-8">
          1. Samvit Research Foundation: By Indian Knowledge System-AICTE -40
          lakh for two years from 2022-2024, Myself as COPI.
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
          2. Targeting Long Non-coding RNAs by Agents Derived from Moringa
          Oleifera for Breast Cancer Therapy with 3500000 Feb 2020 Myself as
          COPI PI: Dr Subash Chandra Gupta ILS BHU ICMR Funded.
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
          3. Early stage detection of non-small cell lung cancer by developing
          aptamer-graphene microarray 500000 Feb 2020 Myself as COPI PI: Dr
          Marshal from IIT BHU ICMR Funded.  
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
          4. AMWATCH: Defining the AMR Burden of Antimicrobial Manufacturing
          Waste in Puducherry and Chennai 102.25 Lakhs 14th December 2020 As
          Team member in Multi-institute (Indo-UK) DBT Funded Myself as COPI.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Grants;
