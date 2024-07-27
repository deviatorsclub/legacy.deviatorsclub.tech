import React, { useRef, useEffect } from "react";
import back from "../assets/v882-kul-55.jpg";
import logo from "../assets/Dev_logo[1].png";
import "./Home.css";

const Home: React.FC = () => {
  const bgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

    window.addEventListener("scroll", handleScroll);
    smoothScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
            className="h-60 w-60 mt-[-50px] absolute z-10"
          />
          <img
            src={back}
            className="h-full w-screen absolute inset-0 object-cover bg-fixed parallax-bg"
            ref={bgRef}
            alt="Background"
          />
          <div className="absolute inset-0 flex flex-col justify-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl p-2 sm:p-5">
            <h1 className="text-9xl">DEVIATORS CLUB</h1>
          </div>
        </section>
      </div>
      {/* <div className="h-[1000vh]">
        <Meetus />
      </div> */}
    </div>
  );
};

export default Home;
