/* eslint-disable react-hooks/rules-of-hooks */
import { useRef, useEffect, useState, useMemo } from "react";
import { useScroll, useTransform, motion, useSpring, MotionValue } from "framer-motion";
import styles from "./styles.module.scss";
import Teaminfo from "../Teaminfo";

// Import all your images
import Picture1 from "./images/WhatsApp Image 2024-07-26 at 13.33.30_fb4c8f6d.jpg";
// import Picture2 from "./images/ayush.jpg";
// import Picture3 from "./images/vidushi.jpg";
import Picture4 from "./images/pooja.jpg";
import Picture5 from "./images/tanmay.jpg";
import Picture6 from "./images/diksha.jpg";
import Picture7 from "./images/kanak.jpg";
// import Picture8 from "./images/saurabh.jpg";
// import Picture9 from "./images/divyansh.jpg";
import Picture10 from "./images/deepika.png";
// import Picture11 from "./images/yash.jpg";
// import Picture12 from "./images/manas.jpg";
// import Picture13 from "./images/pulkit.jpg";
import Picture14 from "./images/vivek.jpg";
import Picture15 from "./images/kunal.jpg";
// import Picture16 from "./images/dipti.jpg";
import Picture17 from "./images/kkb.jpg";

interface Picture {
  src: string;
  alt: string;
  scale: MotionValue<number>;
}

export default function Index() {
  const container = useRef<HTMLDivElement>(null);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
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

  const getScaleFactor = (baseScale: number) => {
    if (screenWidth < 480) return baseScale * 0.5;
    if (screenWidth < 768) return baseScale * 0.75;
    return baseScale;
  };

  const createScale = (baseScale: number) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, getScaleFactor(baseScale)]);
    return useSpring(scale, { stiffness: 100, damping: 30 });
  };

  const pictures: Picture[] = useMemo(() => [
    { src: Picture1, alt: "Logo", scale: createScale(15) },
    // { src: Picture2, alt: "Ayush", scale: createScale(6) }, 
    // { src: Picture3, alt: "Vidushi", scale: createScale(14) },
    { src: Picture4, alt: "Pooja", scale: createScale(6) },
    { src: Picture5, alt: "Tanmay", scale: createScale(11) },
    { src: Picture6, alt: "Diksha", scale: createScale(8) },
    { src: Picture7, alt: "Kanak", scale: createScale(9) },
    // { src: Picture8, alt: "Saurabh", scale: createScale(10) },
    // { src: Picture9, alt: "Divyansh", scale: createScale(11) },
    { src: Picture10, alt: "Deepika", scale: createScale(12) },
    // { src: Picture11, alt: "Yash", scale: createScale(13) },
    // { src: Picture12, alt: "Manas", scale: createScale(14) },
    // { src: Picture13, alt: "Pulkit", scale: createScale(15) },
    { src: Picture14, alt: "Vivek", scale: createScale(6) },
    { src: Picture15, alt: "Kunal", scale: createScale(6) },
    // { src: Picture16, alt: "Dipti", scale: createScale(16) },
    { src: Picture17, alt: "KK Bhatt", scale: createScale(11) },
  ], [scrollYProgress, screenWidth]);

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