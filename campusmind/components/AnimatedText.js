"use client"
// components/AnimatedText.js
import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
  // Define animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Stagger effect for each letter
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="flex overflow-hidden">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          style={{ display: "inline-block", marginRight: "2px" }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;