import React from "react";
import Title from "../components/layouts/Title";
import Navbar from "../components/navbar/Navbar";

function Courses() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="flex justify-center items-center text-center mt-4">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="Courses"
        />
      </div>
    </div>
  );
}

export default Courses;
