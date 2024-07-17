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
    <div className="my-10">
      <h3 className="text-3xl py-1">Tech Stack</h3>
      <div className="md:text-9xl text-6xl flex flex-wrap justify-center gap-10 text-gray-600">
        <FaHtml5 />
        <FaCss3Alt />
        <IoLogoJavascript />
        <FaNode />
        <RiTailwindCssFill />
        <FaReact />
        <FaVuejs />
        <BsFiletypeSql />
      </div>
    </div>
  );
}

export default TechStack;
