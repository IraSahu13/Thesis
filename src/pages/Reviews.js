import React from "react";
import Footer from "../components/footer/Footer";
import Title from "../components/layouts/Title";
import Navbar from "../components/navbar/Navbar";

function Reviews() {
  return (
    <div>
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
        <div className="flex justify-center items-center text-center mt-4">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="Reviews"
          />
        </div>
        <div className="max-w-screen-xl mx-auto">
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            1. Journal of Organic Chemistry (ACS)
          </p>
          <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
            2. ACS-Omega
          </p>
          <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
            3. Current Topics in Medicinal Chemistry (Bentham)
          </p>
          <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
            4. Mini-reviews in medicinal chemistry (Bentham)
          </p>
          <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
            5. Natural Product Research (T&F)
          </p>
          <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
            6. Journal of Biomolecular Structure and Dynamics (T&F)
          </p>
          <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
            7. Organic & Biomolecular Chemistry (RSC)
          </p>
          <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
            8. Molecular Diversity (Springer)
          </p>
          <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
            9. Journal of Herbal Medicine (Elsevier)
          </p>
          <p className="text-base font-bodyFont leading-6 tracking-wide mt-3">
            10. Journal of Chromatographic Science
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Reviews;
