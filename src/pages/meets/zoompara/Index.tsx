import styles from './styles.module.scss';
import Picture1 from './images/WhatsApp Image 2024-07-26 at 13.33.30_fb4c8f6d.jpg';
import Picture2 from './images/ayush.jpg';
import Picture3 from './images/vidushi.jpg';
import Picture4 from './images/pooja.jpg';
import Picture5 from './images/tanmay.jpg';
import Picture6 from './images/diksha.jpg';
import Picture7 from './images/kanak.jpg';
import Picture8 from './images/saurabh.jpg';
import Picture9 from './images/divyansh.jpg';
import Picture10 from './images/deepika.jpg';
import Picture11 from './images/yash.jpg';
import Picture12 from './images/manas.jpg';
import Picture13 from './images/pulkit.jpg';
import Picture14 from './images/vivek.jpg';
import Picture15 from './images/kunal.jpg';
import Picture16 from './images/dipti.jpg';
import Picture17 from './images/kkb.jpg';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface Picture {
  src: string;
  scale: ReturnType<typeof useTransform>;
}

export default function Index() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4: MotionValue<unknown> = useTransform(scrollYProgress, [0, 1], [1, 15]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scale10 = useTransform(scrollYProgress, [0, 1], [1, 10]);
  const scale11 = useTransform(scrollYProgress, [0, 1], [1, 11]);
  const scale12 = useTransform(scrollYProgress, [0, 1], [1, 12]);
  const scale13 = useTransform(scrollYProgress, [0, 1], [1, 13]);
  const scale14 = useTransform(scrollYProgress, [0, 1], [1, 14]);
  const scale15 = useTransform(scrollYProgress, [0, 1], [1, 15]);
  const scale16 = useTransform(scrollYProgress, [0, 1], [1, 16]);

  const pictures: Picture[] = [
    { src: Picture1, scale: scale4 },
    { src: Picture2, scale: scale5 },
    { src: Picture3, scale: scale6 },
    { src: Picture4, scale: scale5 },
    { src: Picture5, scale: scale6 },
    { src: Picture6, scale: scale8 },
    { src: Picture7, scale: scale9 },
    { src: Picture8, scale: scale10 },
    { src: Picture9, scale: scale11 },
    { src: Picture10, scale: scale12 },
    { src: Picture11, scale: scale13 },
    { src: Picture12, scale: scale14 },
    { src: Picture13, scale: scale15 },
    { src: Picture14, scale: scale16 },
    { src: Picture15, scale: scale16 },
    { src: Picture16, scale: scale16 },
    { src: Picture17, scale: scale16 },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => (
          <motion.div key={index} style={{ scale }} className={styles.el}>
            <div className={styles.imageContainer}>
              <img src={src} alt="image" className={styles.image} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className={styles.newSection}>
        {/* New Section Content */}
        <h2>New Section</h2>
        <p>This is the content of the new section.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error culpa modi
          voluptates architecto, nesciunt similique veniam aut odit obcaecati ullam
          magnam laudantium voluptate impedit provident consequatur ipsa, fuga sint
          exercitationem at perferendis rerum earum? Amet fugit adipisci molestiae tenetur
          saepe? Voluptatum maiores commodi, magnam animi adipisci, enim ipsum non
          inventore provident molestiae ratione doloribus velit quos. Illum ex nulla
          minima, quis libero ipsam vitae suscipit eligendi nobis accusamus fugiat,
          excepturi explicabo dicta ratione ab ipsum facilis quasi voluptates? Iusto,
          alias corrupti, numquam reprehenderit nisi et fugiat ipsam, voluptatem sint
          adipisci impedit neque repellendus autem perspiciatis! Ab facilis numquam
          incidunt distinctio.
        </p>
      </div>
    </div>
  );
}
