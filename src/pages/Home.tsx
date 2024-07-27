import React, { useRef, useEffect, useState } from "react";
import back from "../assets/v882-kul-55.jpg";
import logo from "../assets/Dev_logo[1].png";
import "./Home.css";

const Home: React.FC = () => {
  const bgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const container = containerRef.current;
    const bg = bgRef.current;

    if (!container || !bg) return;

    let current = 0;
    let target = 0;
    const ease = 0.05;

    function lerp(start: number, end: number, t: number) {
      return start * (1 - t) + end * t;
    }

    function smoothScroll() {
      current = lerp(current, target, ease);
      current = parseFloat(current.toFixed(2));

      if (bg) {
        bg.style.transform = `translateY(${-current * 0.5}px)`;
      }
      if (container) {
        container.style.transform = `translateY(${-current}px)`;
      }

      requestAnimationFrame(smoothScroll);
    }

    function handleScroll() {
      target = window.scrollY;
    }

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    smoothScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-black text-white text-center font-medium h-[100vh]">
      <div
        className="fixed inset-0"
        style={{ height: "200vh" }}
        ref={containerRef}
      >
        <section id="hero-section" className="relative h-screen">
          <img
            src={logo}
            alt="logo"
            className="h-20 w-20 sm:h-[120px] sm:w-[120px] md:h-60 md:w-60 absolute z-10 top-4 left-4 sm:top-8 sm:left-8"
          />
          <img
            src={back}
            className="h-full w-full absolute inset-0 object-cover bg-fixed parallax-bg"
            ref={bgRef}
            alt="Background"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold">
              DEVIATORS CLUB
            </h1>
          </div>
        </section>
      </div>
      {windowWidth > 768 && (
        <div className="h-[1000vh]">
        </div>
      )}
    </div>
  );
};

export default Home;