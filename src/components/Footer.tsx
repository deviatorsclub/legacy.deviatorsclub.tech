import { Link } from "react-router-dom";
import ClubSocials from "../data/ClubSocial";

export default function Footer() {
  return (
    <footer id="footer" className="bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <p
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white cursor-pointer"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          Deviators Club
        </p>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          The coolest tech haven on the campus! We are a group of tech
          enthusiasts diving deep into the world of technology and having a
          blast while doing it.
        </p>

        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          {ClubSocials.map((social, index) => (
            <li key={index}>
              <Link
                to={social.url}
                target="_blank"
                className="mr-4 hover:underline md:mr-6 "
              >
                {social.name}
              </Link>
            </li>
          ))}
        </ul>

        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2021-2022 Deviators Club . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
