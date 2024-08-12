import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import styles from "./style.module.scss";
import Nav from "./navi/index";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isActive) setIsActive(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const toggleActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <div onClick={toggleActive} className={styles.button}>
            <div
              className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && (
          <div
            className={styles.menu}
            style={isMobile ? { width: "100%" } : {}}
          >
            <div className={styles.body}>
              <Nav toggleActive={toggleActive} />
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
