import React from "react";
import Footer from "../components/footer/Footer";
import Title from "../components/layouts/Title";
import Navbar from "../components/navbar/Navbar";
import App1 from "./student/src/App.js";

function Student() {
    return (
      <div>
        <Navbar />
        <App1/>
        {/* <Footer /> */}
      </div>
    );
  }
  
  export default Student;