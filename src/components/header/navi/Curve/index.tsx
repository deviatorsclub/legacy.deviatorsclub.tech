import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

export default function Index() {
  const [paths, setPaths] = useState({ initialPath: "", targetPath: "" });

  useEffect(() => {
    // Function to update paths based on window height
    const updatePaths = () => {
      const height = window.innerHeight;
      setPaths({
        initialPath: `M100 0 L200 0 L200 ${height} L100 ${height} Q-100 ${
          height / 2
        } 100 0`,
        targetPath: `M100 0 L200 0 L200 ${height} L100 ${height} Q100 ${
          height / 2
        } 100 0`,
      });
    };

    // Update paths on initial render
    updatePaths();

    // Update paths when window resizes
    window.addEventListener("resize", updatePaths);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", updatePaths);
  }, []);

  const curve = {
    initial: {
      d: paths.initialPath,
    },
    enter: {
      d: paths.targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: paths.initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className={styles.svgCurve}>
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
}
