import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

import React from "react";
import { Signup, Web } from "./Components/Pages";
import { Accelerate } from "./Components/Accelerate";
import { CompanyCarousel } from "./Components/CompanyCarousel";
import Courses from "./Components/Courses";
import { Hero } from "./Components/Hero";
import Learners from "./Components/Learners";

import { Transform } from "./Components/Transform";
import WorksSection from "./Components/WorksSection";
import { News } from "./Components/News";
import Footer from "./Components/Footer";

export const Home = () => {
  return (
    <>
      <Hero />
      <CompanyCarousel />
      <Transform />
      <Courses />
      <WorksSection />
      <Learners />
      <Accelerate />
      <News />
    </>
  );
};

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="*" element={<Home />} />

        <Route path="/web" element={<Web />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
