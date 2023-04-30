import React from "react";
import Footer from "../components/footer/Footer";
import Title from "../components/layouts/Title";
import Navbar from "../components/navbar/Navbar";
import App1 from "./Gallery/src/App";

function Gallery() {
    return (
      <div>
        <Navbar />
        <App1/>
        {/* <Footer /> */}
      </div>
    );
  }
  
  export default Gallery;