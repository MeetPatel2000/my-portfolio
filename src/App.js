// App.js
import React,{useState} from "react";
import { motion } from 'framer-motion';
import "./App.css"; // Import CSS file for global styles
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Main from "./components/main";
import GlobalMaskEffect from "./components/useGlobalMaskEffect";
import SkillsSection from "./components/skills";

function App() {

  
  return (
    <div className="App">
      {/* Add the red dot element */}
      <Navbar />
      <Hero />
      <Main/>
      <SkillsSection/>
      {/* Your other components */}
    </div>
  );
}

export default App;
