import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chapters from "./pages/Chapters";
import Courses from "./pages/Courses";
import Grants from "./pages/Grants";
import Home from "./pages/Home";
import Patents from "./pages/Patents";
import Research from "./pages/Research";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route index element={<Home />} /> */}
        <Route exact path="/patents" element={<Patents />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/research" element={<Research />} />
        <Route exact path="/chapters" element={<Chapters />} />
        <Route exact path="/reviews" element={<Reviews />} />
        <Route exact path="/grants" element={<Grants />} />
        <Route exact path="/students" element={<Grants />} />
        {/* <gallery/> */}
        {/* <Route exact path="/grants" element={<Grants />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
