import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Mywork from "./Components/My Work/Mywork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero/>}></Route>
        <Route  element={<Navbar/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        {/* <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <TechStack></TechStack>
        <Mywork></Mywork>
        <Contact></Contact>
        <Footer></Footer> */}
      </Routes>
    </div>
  );
};

export default App;
