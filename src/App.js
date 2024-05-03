// App.js
import React from "react";
import "./App.css"; // Import CSS file for global styles
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Main from "./components/main";
import SkillsSection from "./components/skills";
import MainComponent from "./components/scrollVelocity";

function App() {
  return (
    <div className="App">
      {/* Add the red dot element */}
      <Navbar />
      <Hero />
      <MainComponent />
      <Main />
      <SkillsSection />

      {/* Your other components */}
    </div>
  );
}

export default App;
