/* eslint-disable react-hooks/rules-of-hooks */
import { useRef, useEffect, useState, useMemo, useCallback } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useSpring,
  MotionValue,
} from "framer-motion";
import styles from "./styles.module.scss";
import Teaminfo from "../Teaminfo";

// Import all your images
import Picture1 from "../../../assets/devfinallogo.png";
import Picture4 from "../../../assets/rounded team/RoundedPooja.jpg";
import Picture5 from "../../../assets/rounded team/RoundedTanmay.jpg";
import Picture6 from "../../../assets/rounded team/RoundedDiksha.jpg";
import Picture7 from "../../../assets/rounded team/Roundedkanak.jpg";
import Picture10 from "../../../assets/rounded team/RoundedDeepika.png";
import Picture14 from "../../../assets/rounded team/RoundedVivek.jpg";
import Picture15 from "../../../assets/rounded team/RoundedKunal.jpg";
import Picture17 from "../../../assets/rounded team/Roundedkk.jpg";

interface Picture {
  src: string;
  alt: string;
  scale: MotionValue<number>;
}

export default function Index() {
  const container = useRef<HTMLDivElement>(null);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getScaleFactor = useCallback((baseScale: number) => {
    if (screenWidth < 480) return baseScale * 0.5;
    if (screenWidth < 768) return baseScale * 0.75;
    return baseScale;
  }, [screenWidth]);

  const createScale = useCallback(
    (baseScale: number) => {
      const scale = useTransform(
        scrollYProgress,
        [0, 1],
        [1, getScaleFactor(baseScale)],
      );
      return useSpring(scale, { stiffness: 100, damping: 30 });
    },
    [getScaleFactor, scrollYProgress],
  );

  const pictures: Picture[] = useMemo(
    () => [
      { src: Picture1, alt: "Logo", scale: createScale(15) },
      { src: Picture4, alt: "Pooja", scale: createScale(6) },
      { src: Picture5, alt: "Tanmay", scale: createScale(16) },
      { src: Picture6, alt: "Diksha", scale: createScale(8) },
      { src: Picture7, alt: "Kanak", scale: createScale(9) },
      { src: Picture10, alt: "Deepika", scale: createScale(12) },
      { src: Picture14, alt: "Vivek", scale: createScale(6) },
      { src: Picture15, alt: "Kunal", scale: createScale(6) },
      { src: Picture17, alt: "KK Bhatt", scale: createScale(11) },
    ],
    [createScale],
  );

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, alt, scale }, index) => (
          <motion.div
            key={index}
            style={{ scale }}
            className={styles.el}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={styles.imageContainer}>
              <img
                src={src}
                alt={alt}
                className={styles.image}
                loading={index > 5 ? "lazy" : undefined}
              />
            </div>
          </motion.div>
        ))}
      </div>
      <div className={styles.newSection}>
        <div>
          <Teaminfo />
        </div>
      </div>
    </div>
  );
}
