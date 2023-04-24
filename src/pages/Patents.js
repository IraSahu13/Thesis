import React from "react";
import Footer from "../components/footer/Footer";
import Title from "../components/layouts/Title";
import Navbar from "../components/navbar/Navbar";

function Patents() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="flex justify-center items-center text-center mt-4">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="Patents"
        />
      </div>
      <div className="max-w-screen-xl mx-auto">
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          1. WO2014167580A1, US20160046611, EP2984078, C2909280, IN 2013DE01077,
          Vishwakarma, R.A.; Jain, S.K.; Bharate, S.B.; Dar, A.H.; Khajuria, A.;
          Samdarshi, M.; Bhola, S.K.; Qazi, A.K.; Hussain, A.; Sidiq, T.; Uma
          Shaanker, R.; Ravikanth, G.; Vasudeva, R.; Patel, M.K.; Ganeshaiah,
          K.N. New chromone alkaloid dysoline for the treatment of cancer and
          inflammatory disorders.  {" "}
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
          2. WO2014170914A1, US20160052915, EP2986605, CA2908084, IN2013DE01142,
          Vishwakarma, R.A.; Bharate, S.B.; Bhushan, S.; Mondhe Dilip Manikrao;
          Jain, S.K.; Meena, S.; Guru, S.K.; Pathania, A.S.; Kumar, S. Behl
          Akanksha, Mintoo Mubashir Javed, Bharate Sonali Sandip and Joshi
          Prashant Cyclin-dependent kinase inhibition by
          5,7-dihydroxy-8-(3-hydroxy-1-methylpiperidin-4-yl)-2-methyl-4H-chromen-4-on
          analogs.{" "}
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
          3. WO2014188440A1, US20160122360, EP3004116, CA2913281, IN2013DE01565,
          Jain, S.K.; Sidiq, T.; Meena, S.; Khajuria, A.; Vishwakarma, R.A.;
          Bharate, S.B. Tetrahydro-2H-pyrano[(3, 2 - C)] -isochromene-6-ones and
          analogs for the treatment of inflammatory disorders.  
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
          4. IN 201611002826. Bharate SB, Singh S, Singh GD, Jain SK, Kumar A,
          Singh B, Gupta AP, Anand R, Singh A, Kushwaha M, Gupta M, Sharma G,
          Sharma A, Vishwakarma RA. Standardized extract of Bergenia ciliata for
          the treatment of inflammatory disorders.{" "}
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
          5. Standardized Extract of Dysoxylum binectariferum for the treatment
          of inflammatory disorders (File in process).{" "}
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
          6. Indolylkojyl derivatives as inhibitor of invasion and metastasis in
          human mammary gland carcinomas. 2016 (application number
          201711022402)on, qualitative and quantitative analysis of natural
          products
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Patents;
