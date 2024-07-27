import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../anim'.
import { menuSlide } from "../anim"; // Make sure this path is correct
import Link from "./Link"; // Adjust the import path if needed
import Curve from "./Curve"; // Adjust the import path if needed
import Footer from "./footer"; // Adjust the import path if needed
import styles from "./style.module.scss";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Our Team",
    href: "/meets",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Index() {
  const location = useLocation();
  const [selectedIndicator, setSelectedIndicator] = useState(location.pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => setSelectedIndicator(location.pathname)}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
            <Link
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator === data.href}
              setSelectedIndicator={setSelectedIndicator}
            />
          ))}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
