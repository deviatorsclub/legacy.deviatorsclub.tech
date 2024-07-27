import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../anim'.
import { slide, scale } from "../../anim";

export default function Index({ data, isActive, setSelectedIndicator }:{
  data: { title: string, href: string, index: number },
  isActive: boolean,
  setSelectedIndicator: (arg0: string) => void
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
