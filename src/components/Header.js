import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Header({ darkMode, setDarkMode }) {
  return (
    <section className="dark:bg-gray-900">
      <nav className="mx-auto px-6 md:px-20 py-5 flex justify-between">
        <h1 className="text-3xl font-bold gradient-text">POOSIT </h1>

        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl dark:text-white"
            />
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-blue-600 to-teal-300 text-white px-4 py-2 rounded-md ml-8 hover:from-red-600 hover:to-yellow-200"
              href="/poosit_resume.pdf"
              download="poosit_resume.pdf"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;
