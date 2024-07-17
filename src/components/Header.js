import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Header({ darkMode, setDarkMode }) {
  return (
    <section>
      <nav className="pt-10  flex justify-between">
        <h1 className="text-4xl font-bold gradient-text">POOSIT </h1>

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
              href="/poosit-resume.pdf"
              download="poosit-resume.pdf"
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
