import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { FaNode } from "react-icons/fa";

function TechStack() {
  return (
    <div className=" mx-8 my-10 py-10 shadow-lg rounded-xl">
      <h3 className="text-center text-3xl p-2 mb-5 font-medium dark:text-white">
        Tech Stack
      </h3>
      <div className="ms-20 md:text-9xl text-6xl grid grid-cols-2 lg:grid-cols-4 gap-10 text-gray-600">
        <FaHtml5 className="hover:text-red-500 " />
        <FaCss3Alt className="hover:text-blue-600" />
        <IoLogoJavascript className="hover:text-yellow-500" />
        <FaNode className="hover:text-green-500" />
        <RiTailwindCssFill className="hover:text-sky-500" />
        <FaReact className="hover:text-sky-500" />
        <FaVuejs className="hover:text-green-600" />
        <BsFiletypeSql className="hover:text-sky-500" />
      </div>
    </div>
  );
}

export default TechStack;
