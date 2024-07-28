import React, { useRef, useEffect } from "react";
import back from "../assets/v882-kul-55.jpg";
import logo from "../assets/Dev_logo[1].png";
import "./Home.css";
import AboutUs from "./Aboutus";
import Meets from "./meets/zoompara/Index";
import Footer from "../components/Footer";


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
    <>
      <div className="bg-black text-white text-center font-medium h-[75vh]">
        <div
          className="fixed inset-0"
          // style={{ height: "100vh" }}
          ref={containerRef}
        >
          <section id="hero-section" className="relative h-screen">
            <img
              src={logo}
              alt="logo"
              className="xl:h-72 xl:w-72 z-10 absolute xl:left-2 xl:top-[-42px] 2xl:h-72 2xl:w-72 2xl:z-10 2xl:left-2 2xl:top-[-52px] md:h-56 md:w-56 md:top-[-33px] md:left-3 sm:h-44 sm:w-44 sm:left-[5px] lg:h-72 lg:w-72 lg:z-10 lg:left-2 lg:top-[-52px] h-36 w-36"
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
      </div>
      <AboutUs />
      <Meets />
      <Footer />
    </>
  );
};

export default Home;
