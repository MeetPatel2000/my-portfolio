import React from "react";
import { motion } from "framer-motion";
import { Typewriter, AnimText } from "./motiontext"; // Import the function


const Hero = () => {
    const phrases = ["I'm a software developer", "I'm a full-stack developer"];
    return (
            <section className="hero" id="hero">
                <div>
                    <motion.div
                        animate={{ x: 560, y: 5 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 0.2,
                        }}
                    >
                        <h1>
                            <Typewriter text="Meet Patel" />
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, x: 250, y: 10 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 0.2,
                        }}
                    >
                        <h2 className="typing-container">
                            <AnimText
                                phrases={phrases}
                                typingSpeed={100}
                                deletingSpeed={50}
                                pauseDuration={2000}
                            />
                        </h2>
                    </motion.div>
                </div>

                <div className="profileDiv"></div>
                <img
                    className="profileIMG"
                    src={require("../static/Images/profile.jpeg")}
                    alt=""
                />
            </section>
    );
};

export default Hero;
