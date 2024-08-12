import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Link from "./Link";
import Curve from "./Curve";
import Footer from "./footer";
import styles from "./style.module.scss";
import { menuSlide } from "../anim";

const navItems = [
  {
    title: "Home",
    href: "/",
    element: "home",
  },
  {
    title: "About",
    href: "/about",
    element: "about",
  },
  {
    title: "Our Team",
    href: "/meets",
    element: "meets",
  },
  {
    title: "Contact",
    href: "/contact",
    element: "footer",
  },
];

export default function Index({ toggleActive }: { toggleActive: () => void }) {
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
              toggleActive={toggleActive}
            />
          ))}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
