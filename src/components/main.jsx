import "../styles/main.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../components/useMousePosition ";

const Main = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <div className="mainSection">
      <motion.div
        className="maskSection"
        animate={{
          WebkitMaskPosition: `${x - (size - 300)}px ${y - (size/2) + 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          I'm a junior full stack developer who's not yet been outdone by a
          coffee-fueled AI (but it's close). Mostly making websites and trying
          not to break too much.
        </p>
      </motion.div>

      <div className="bodySection">
        <p>
          I'm all about that <span>creative chaos</span> while crafting digital
          experiences. You might find me coding in one moment and searching for
          the nearest coffee shop in the next."
        </p>
        <img
          className="profileIMG"
          src={require("../static/Images/profile.jpeg")}
          alt=""
        />
      </div>
    </div>
  );
};

export default Main;
