import AboutPoints from "../data/About";

const AboutUs = () => {
  return (
    <div className="about-us font-sans from-black text-white mt-[100vh]" id="about">
      <div className="h-96 flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat">
        <div className="bg-black bg-opacity-60 w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            About us
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-20">
            Welcome to Deviators
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-xl xl:w-[70%]">
            Welcome to DEVIATORS… The coolest tech haven on the campus! We are a
            group of tech enthusiasts diving deep into the world of technology
            and having a blast while doing it.
            <br />
            Whether you’re a newbie or a seasoned coder, we provide a playground
            for all, where innovation thrives, ideas are shared and everybody
            debates on “It’s a feature not a Bug”. Join us, explore, innovate,
            while making memories and let's push the boundaries of what's
            possible together!
            <p className="text-left">
              <br />
              “HelloWorld!”
              <br />
              -Every typical engineer
            </p>
          </p>
        </div>
      </div>

      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Our Mission
          <div className="text-xl flex flex-wrap justify-center items-center">
            {AboutPoints.map((item, index) => (
              <div key={index} className="text-xl flex flex-col w-[400px] m-20">
                <div className="flex justify-center text-4xl space-x-2 opacity-70">
                  <p>01</p>
                  <h2>{item.title}</h2>
                </div>
                <p className="text-base min-h-28">{item.desc}</p>
              </div>
            ))}
          </div>
        </h2>
      </section>
    </div>
  );
};

export default AboutUs;
