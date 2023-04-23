import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Patents from "./pages/Patents";
import Research from "./pages/Research";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route index element={<Home />} /> */}
        <Route exact path="/patents" element={<Patents />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/research" element={<Research />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
