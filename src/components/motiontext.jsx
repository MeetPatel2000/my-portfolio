import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Typewriter = ({ text, typingSpeed = 100 }) => {
  // Define state variables for index and displayed text
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  // Create an effect to handle the typewriter effect
  useEffect(() => {
    // Define the typeCharacter function
    const typeCharacter = () => {
      // Check if the index is within the bounds of the text length
      if (index < text.length) {
        // Update the displayed text with the current character from text
        setDisplayedText((prevText) => {
          const newText = prevText + text.charAt(index);
          console.log(
            `Updating displayedText: ${prevText} + ${text.charAt(
              index
            )} = ${newText}`
          );
          return newText;
        });
        // Increment the index
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        // Clear the interval when the text is fully displayed
        console.log("Text fully displayed, clearing interval.");
        clearInterval(interval);
      }
    };

    // Set an interval to call the typeCharacter function at the specified typing speed
    const interval = setInterval(typeCharacter, typingSpeed);
    console.log("Interval set for typeCharacter function.");

    // Clean up the interval when the component unmounts or the text changes
    return () => {
      console.log("Component unmounted, clearing interval.");
      clearInterval(interval);
    };
  }, [text, typingSpeed, index]);

  // Render the motion div with the displayed text
  return <motion.div>{displayedText}</motion.div>;
};

const AnimText = ({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}) => {
  // State variables for managing text, indices, and mode
  const [displayedText, setDisplayedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Effect to handle typing and deleting text
  useEffect(() => {
    // Function to handle typing and deleting characters
    const handleTypeAndDelete = () => {
      if (isDeleting) {
        // Deleting text one character at a time
        if (currentCharIndex > 0) {
          setDisplayedText((prevText) => prevText.slice(0, -1));
          setCurrentCharIndex((prevIndex) => prevIndex - 1);
        } else {
          // Finished deleting, switch to typing mode
          setIsDeleting(false);
          // Move to next phrase or loop back to the first phrase
          setCurrentPhraseIndex(
            (prevIndex) => (prevIndex + 1) % phrases.length
          );
          // Reset character index for the new phrase
          setCurrentCharIndex(0);
        }
      } else {
        // Typing text one character at a time
        if (currentCharIndex < phrases[currentPhraseIndex].length) {
          setDisplayedText(
            (prevText) =>
              prevText + phrases[currentPhraseIndex][currentCharIndex]
          );
          setCurrentCharIndex((prevIndex) => prevIndex + 1);
        } else {
          // Finished typing, switch to deletion mode after pause
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    };

    // Start interval for typing and deleting text
    const intervalId = setInterval(
      handleTypeAndDelete,
      isDeleting ? deletingSpeed : typingSpeed
    );

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, [
    isDeleting,
    currentCharIndex,
    currentPhraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return <span>{displayedText}</span>;
};

export { Typewriter, AnimText };
