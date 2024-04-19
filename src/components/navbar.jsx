// Navbar.js
import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";

const MagneticLink = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  // Create x and y motion values and apply spring animations
  const x = useMotionValue(0);
  const springX = useSpring(x, {
    damping: 30,
    stiffness: 300,
  });

  const y = useMotionValue(0);
  const springY = useSpring(y, {
    damping: 30,
    stiffness: 300,
  });

  // Adjust the handleMouseEnter function
  const handleMouseEnter = (event) => {
    setIsHovered(true);
    const linkRect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const linkCenterX = linkRect.left + linkRect.width / 2;
    const linkCenterY = linkRect.top + linkRect.height / 2;

    // Calculate the distance from the link's center to the mouse pointer
    let distanceX = mouseX - linkCenterX;
    let distanceY = mouseY - linkCenterY;

    // Define the maximum distance for the magnetic effect
    const maxDistance = 50; // Adjust this value as needed

    // Clamp the distances to the maximum allowed range
    distanceX = Math.max(-maxDistance, Math.min(maxDistance, distanceX));
    distanceY = Math.max(-maxDistance, Math.min(maxDistance, distanceY));

    // Apply the spring effect to x and y
    x.set(distanceX * 0.45); // Adjust the 0.2 multiplier for sensitivity
    y.set(distanceY * 0.45); // Adjust the 0.2 multiplier for sensitivity
  };

  // Define the handleMouseLeave function
  const handleMouseLeave = () => {
    // When the mouse leaves the link, reset x and y values to 0
    x.set(0);
    y.set(0);
  };

  // Use the x and y spring animations in your motion.a component
  return (
    <motion.a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="nav-link"
    >
      {children}
    </motion.a>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <MagneticLink href="/" className="logo">
        <span className="logo">© Code By MK</span>
      </MagneticLink>
      <motion.div animate={{ x: -10, y: -65 }} transition={{ duration: 0.5 }}>
        <div className="links-container">
          <MagneticLink href="#about" id="abour">
            About
          </MagneticLink>
          <MagneticLink href="#portfolio" id="projects">
            Projects
          </MagneticLink>
          <MagneticLink href="#contact" id="contact">
            Contact
          </MagneticLink>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
