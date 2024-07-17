import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Header({ darkMode, setDarkMode }) {
  return (
    <section>
      <nav className="py-10 mb-10 flex justify-between">
        <h1 className="text-xl font-burtons">Poosit</h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
            />
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-blue-600 to-teal-300 text-white px-4 py-2 rounded-md ml-8"
              href="#"
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
