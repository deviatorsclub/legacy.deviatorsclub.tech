// src/AboutUs.tsx
import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us font-sans bg-gradient-to-b from-black via-gray-900 to-black text-white pb-[200px]">
      <div
        className="h-96 flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/path/to/image1.jpg)" }}
      >
        <div className="bg-black bg-opacity-60 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Welcome to Our Club
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl">
            Our club is dedicated to...
          </p>
        </div>
      </div>

      <section className="py-12 px-4 text-center bg-gradient-to-b from-gray-800 to-gray-900">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Our Mission
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300">
          To provide a space for...
        </p>
      </section>

      <div
        className="h-96 flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/path/to/image2.jpg)" }}
      >
        <div className="bg-black bg-opacity-60 w-full h-full flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Our Activities
          </h2>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl">
            We engage in various activities...
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
