import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
    const textRefs = useRef([]);

    useEffect(() => {
        // Register ScrollTrigger for each text element
        textRefs.current.forEach(text => {
            gsap.to(text, {
                backgroundSize: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: text,
                    start: 'center 80%',
                    end: 'center 20%',
                    scrub: true,
                },
            });
        });
    }, []);

    return (
        <div className="skill-container">
            <h1 className="skill-text" ref={(el) => (textRefs.current[0] = el)}>React<span_skills>Skills 60% <span className="span_note">*as per google</span></span_skills></h1>
            <h1 className="skill-text" ref={(el) => (textRefs.current[1] = el)}>Node.JS<span_skills>Skills 50% <span className="span_note">That i can assure</span></span_skills></h1>
            <h1 className="skill-text" ref={(el) => (textRefs.current[2] = el)}>HTML5 & CSS3<span_skills>Skills 80% <span className="span_note">I use MDN</span></span_skills></h1>
            <h1 className="skill-text" ref={(el) => (textRefs.current[3] = el)}>Javascript<span_skills>Skills 70% <span className="span_note">Using it from 2018</span></span_skills></h1>
            <h1 className="skill-text" ref={(el) => (textRefs.current[4] = el)}>Mongo DB<span_skills>Skills 65% <span className="span_note">Still learning new things</span></span_skills></h1>
        </div>
    );
};

export default SkillsSection;
