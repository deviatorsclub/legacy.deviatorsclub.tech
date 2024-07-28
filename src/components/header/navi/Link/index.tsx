import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { scale, slide } from "../../anim";

export default function Index({
  data,
  isActive,
  setSelectedIndicator,
}: {
  data: { title: string; href: string; index: number };
  isActive: boolean;
  setSelectedIndicator: (arg0: string) => void;
}) {
  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      <Link to={href}>{title}</Link>
    </motion.div>
  );
}
