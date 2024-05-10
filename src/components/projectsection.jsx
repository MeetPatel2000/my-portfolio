/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useRef} from "react";
import { projects } from "../cardContents";
import { useTransform, useScroll, motion } from 'framer-motion';
import "../styles/project.css"



const Project = () => {

  const container = useRef(null);

  const { scrollYProgress } = useScroll({

    target: container,

    offset: ['start end', 'start start']

  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])

  return (
    <div>
      <div>
        <h1>My Work</h1>
        <h4>Note: I tried my best here</h4>
      </div>
    {projects.map((project, index) => (
      <div ref={container} className="cardContainer" key={index}>
        <div className="card" style={{ backgroundColor: project.color, top: `calc(-5vh + ${index * 25}px)` }}>
          <h2>{project.title}</h2>
          <div className="body">
            <div className="description">
              <p>{project.description}</p>
              <span>
                <a href={project.url} target="_blank" rel="noopener noreferrer">See more</a>
                <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black"/>
                </svg>
              </span>
            </div>
            <div className="imageContainer">
              <motion.div
              style={{scale: imageScale}}>
              <div className="inner">
                <img
                  src={project.src}
                  alt="image"
                />
              </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Project;