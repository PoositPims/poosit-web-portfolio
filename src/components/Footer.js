import React from "react";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="pt-8 flex items-center justify-center pb-10 dark:bg-gray-900 dark:text-white">
      <div className="mx-auto px-8 md:px-20 flex w-full flex-col gap-5">
        <div className="mx-auto w-full flex flex-col md:flex-row gap-6 md:justify-between">
          <h1 className="text-3xl font-bold gradient-text">POOSIT </h1>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-lg">Contact me</h4>
            <div className="flex">
              <MdEmail className="text-3xl" />
              <p className="ml-3 text-lg">poosit.pims@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-lg">Socials</h4>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/poosit-pimsensri-b368181a7/">
                <AiFillLinkedin className="text-3xl" />
              </a>
              <a href="https://github.com/PoositPims">
                <FaGithub className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="border bg-gray-20" />
        <p className="w-full text-center text-gray-30">
          2024 Made by Poosit | Never stop learning!
        </p>
      </div>
    </footer>
  );
}

export default Footer;
