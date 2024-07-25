  import React, { useRef, useEffect } from "react";
  // import gsap from "gsap";
  // import { ScrollTrigger } from "gsap/ScrollTrigger";
  import back from "../assets/v882-kul-55.jpg";
  import logo from "../assets/Dev_logo[1].png";
  import './Home.css';

  // gsap.registerPlugin(ScrollTrigger);

  const Home: React.FC = () => {
    const bgRef = useRef<HTMLImageElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const experienceMiddleRef = useRef<HTMLDivElement>(null);
    const extraBoxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      // Parallax effect
      if (bgRef.current) {
        const parallaxElement = bgRef.current;
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          parallaxElement.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }
    }, []);

    useEffect(() => {
      // GSAP animations
      if (experienceRef.current && experienceMiddleRef.current && extraBoxRef.current) {
        const exp = gsap.timeline({
          scrollTrigger: {
            trigger: experienceRef.current,
            start: "top top",
            end: "+=1000",
            scrub: true,
            markers: true,
            pin: experienceRef.current,
          }
        });

        exp.to(experienceMiddleRef.current, {
          "--progress1": 1,
          ease: "none",
          smoothOrigin: true
        });

        exp.from(
          extraBoxRef.current,
          {
            scaleX: 100,
            ease: "none"
          },
          "-=0.4"
        );
      }
    }, []);

    return (
      <div className="bg-black text-white text-center font-medium">
        <section id="hero-section" className="relative h-screen">
          <img src={logo} alt="logo" className="h-60 w-60 mt-[-50px] absolute z-10"/>
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
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque voluptatem optio dolore non nulla, quisquam soluta? Dolorem adipisci libero, labore expedita ipsa assumenda cum, doloribus aliquid reiciendis natus dolores atque soluta ipsam eos illo dolore! Omnis odit eum atque distinctio sunt eos velit sint. Quasi ex quidem natus voluptatibus ut tempora quis minima sint, quo nobis similique molestias rem! Corrupti dolor voluptates doloribus vel quisquam voluptatum culpa architecto eius explicabo enim ipsa est temporibus voluptatem provident, ut quia! Provident culpa placeat dolor autem libero dolorum rem ratione magni officiis repudiandae sunt incidunt cum, eum ex doloribus pariatur reprehenderit, vitae nemo ipsa soluta excepturi vero! Commodi perferendis quas eius voluptates hic, nemo libero a laboriosam quasi. Maxime quibusdam at, dolore vero nobis molestiae sint corrupti assumenda provident? Ipsam neque non velit, corrupti assumenda ratione sunt similique libero et ipsum deleniti placeat mollitia tenetur odit quas veritatis iusto recusandae maiores quam fugit! Ipsam, voluptates doloribus enim at iusto asperiores nobis fuga placeat harum numquam, architecto veritatis magni, esse soluta laudantium similique repudiandae consectetur! Deserunt ullam molestias consectetur suscipit omnis sint earum quia? Veniam numquam mollitia vitae est tenetur praesentium sint earum consectetur, corrupti aut nesciunt maiores, ex totam obcaecati a! Beatae soluta eligendi ipsa pariatur, hic, dolorum ratione nihil esse alias quod saepe incidunt dignissimos deserunt magni cum qui adipisci! Architecto, rerum officiis, esse quidem eius quia perferendis magnam doloremque inventore consequuntur ipsum obcaecati. Quis facere quaerat quam assumenda sit quibusdam ullam ex nesciunt veritatis, eligendi consectetur nostrum voluptatem, illum enim laudantium praesentium? Alias quibusdam error aspernatur corporis itaque iusto maxime, optio perferendis molestias, eveniet qui rem ratione obcaecati. Ducimus excepturi debitis vel inventore impedit ab consequuntur recusandae rem deleniti iure eveniet cum voluptatum consectetur provident neque quia, nulla soluta mollitia, optio minus perspiciatis eius quas. Voluptates quod deserunt nostrum consequuntur expedita inventore sit dignissimos perferendis. Voluptatem eveniet illo doloribus consectetur deleniti asperiores sint nisi, a est voluptas enim corrupti ipsum, ex dolor. Ullam, nam! Est consectetur sit ducimus quibusdam reiciendis non quidem voluptas itaque, labore distinctio voluptates minima. Voluptatum, fugiat enim? Magni adipisci vero perspiciatis? Aliquam quidem est magni consequatur mollitia dicta dolores aliquid nostrum, eos quae? Praesentium dicta necessitatibus maxime labore odio nostrum delectus. Repellendus quaerat magni tempore enim minus quisquam expedita illo sequi culpa quasi labore quia iste minima, assumenda voluptates eum asperiores nihil tempora. Corrupti, consequuntur? Illum laudantium sed iste inventore minima fuga excepturi? Saepe sunt vero praesentium, quos numquam cum ipsum quo officia vel accusantium quae et nostrum accusamus provident ab excepturi aliquid officiis. Ut neque facilis modi suscipit assumenda repellat, eius ipsum at? Rerum, consequatur laboriosam, dolore earum nesciunt explicabo adipisci tempora labore ex alias aspernatur eius obcaecati? Repellat accusantium, quod itaque ea deleniti optio unde. Doloremque animi dolores error illum, quaerat dolore ut deserunt odio! Dignissimos harum corrupti possimus at alias, reiciendis assumenda delectus expedita voluptas eum adipisci fugiat? Modi odio alias mollitia minus obcaecati soluta maiores praesentium sed, facere vero blanditiis eum saepe voluptatem quaerat dignissimos, iure consequatur suscipit voluptas aliquam, autem nostrum qui dolorum! Perferendis expedita cum eveniet suscipit corrupti autem blanditiis inventore magnam, iusto nobis voluptatem ipsa voluptates iste nihil explicabo soluta numquam atque temporibus debitis totam doloribus nisi facilis possimus quidem? Pariatur atque officia iusto neque assumenda totam iure ullam ad aliquam? Quia fugiat distinctio, ipsum neque deserunt rem fuga recusandae voluptatum suscipit debitis perferendis doloribus nisi modi obcaecati magnam perspiciatis temporibus porro itaque, quod atque earum facere! Sed praesentium dolore ex illum iure consectetur voluptas quibusdam nihil. Asperiores officia, aliquid ad qui facilis quibusdam ullam, ex, natus nesciunt sint quo corrupti recusandae mollitia harum voluptates eaque. Inventore, harum veritatis odit, modi, mollitia sequi accusantium fugiat libero ipsa minus rerum quo vitae dignissimos voluptatibus eius quod eaque adipisci dolorum laboriosam in! Repellendus incidunt at suscipit quasi possimus culpa dolore ullam a commodi laboriosam tempora aut error iusto nesciunt unde eligendi, ad, tenetur molestiae magnam sit obcaecati reprehenderit, veritatis reiciendis odit! Quibusdam reprehenderit nostrum vitae quod similique ducimus in suscipit! Quae rerum reiciendis ea voluptatum omnis commodi nobis! Omnis corporis architecto in facere quia! Illo rem reiciendis at repellat soluta facilis, architecto nesciunt iure quidem nisi nemo totam similique? Placeat dolore soluta, et quisquam reiciendis, at minima maxime possimus laudantium asperiores repellat. Sapiente quas veniam in, placeat provident et iure quibusdam tenetur odit, reprehenderit earum dignissimos laborum corporis eligendi cumque ut! Ullam molestiae itaque alias labore illum asperiores omnis aliquam totam ad, perferendis deserunt necessitatibus, sunt quia culpa aspernatur repudiandae. Pariatur perspiciatis dolorem modi enim esse ex necessitatibus quas, qui ipsa rerum cumque vel numquam architecto ad quibusdam. Cumque sunt harum reprehenderit, voluptate ea quod, dicta quam libero maiores quisquam illum nostrum labore repudiandae dolor quaerat inventore? Doloremque beatae eveniet illum similique commodi quas perferendis laudantium ut recusandae at quo dicta consequatur sint, placeat nihil modi molestias sapiente fuga inventore neque fugiat, eaque enim facere omnis? Magnam, quia porro itaque vero sunt qui aspernatur molestias, ut, explicabo commodi accusamus cumque quasi iure necessitatibus! Magnam perferendis minima, ipsam, amet nisi cumque non, neque omnis ducimus iste distinctio! Reiciendis impedit quo sed aperiam, odit repudiandae a magni facere fugiat dignissimos at ex. Eius natus libero delectus explicabo dicta labore impedit atque. Incidunt praesentium consequuntur voluptatum ad doloribus nisi inventore, nihil officia repudiandae voluptate vero nostrum expedita quod, totam assumenda! Perferendis reiciendis est quos illum quasi? Asperiores voluptate omnis illo dolorem! Deleniti, dolor voluptas? Neque facere corrupti quidem rerum dolorem? Itaque corrupti dolores dolore odio maxime nisi repellendus obcaecati quis assumenda ex saepe, suscipit facere a facilis officiis laborum esse aut ducimus repudiandae placeat molestiae. Aut deleniti minima, voluptate rerum, reprehenderit nisi quidem adipisci obcaecati nemo autem assumenda magni facere quam distinctio quo sit, optio corporis aliquam! Cumque molestiae asperiores vero repellendus assumenda. Odit hic pariatur esse porro et numquam possimus dolore eligendi quisquam voluptatem aliquam repellendus, nemo illo vel blanditiis laboriosam molestias labore dolores animi? Repellendus, consequuntur itaque temporibus quas assumenda voluptatum molestias impedit asperiores sapiente ex sint repellat, sequi maiores labore! Excepturi dolore repellendus neque repudiandae ducimus molestiae culpa non praesentium illum consectetur.
        </div>
      </div>
    );
  };

  export default Home;
