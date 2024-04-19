import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../components/useMousePosition ';

const GlobalMaskEffect = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const size = isHovered ? 400 : 40;

    return (
        <motion.div
            className="maskSection"
            animate={{
                WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
                WebkitMaskSize: `${size}px`,
            }}
            transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </motion.div>
    );
};

export default GlobalMaskEffect;
