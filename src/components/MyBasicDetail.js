import React from "react";
import Image from "next/image";
import { AiFillLinkedin } from "react-icons/ai";
import pingPic from "../../public/Poosit-pic.png";

function MyBasicDetail() {
  return (
    <div className="text-center p-10 md:px-20 md:flex md:justify-around">
      <div>
        <div className="relative mx-auto bg-gradient-to-b from-blue-600 rounded-full w-60 h-60 mb-10 overflow-hidden md:h-60 md:w-60 shadow-2xl  hover:from-red-600 hover:to-yellow-200">
          <Image src={pingPic} layout="fill" objectFit="cover" alt="picture" />
        </div>
        <h2 className="text-4xl py-2 gradient-text font-medium md:text-5xl">
          Poosit Pimsensri
        </h2>
      </div>
      <div className="md:shadow-lg md:rounded-xl my-auto bg-white py-5 rounded-xl">
        <h3 className="text-2xl py-2 md:text-3xl ">
          Frontend Developer <br />
          <p className="md:text-2xl ">
            and &nbsp;
            <span className="gradient-text-red">Dream Chaser.</span>
          </p>
        </h3>
        <p className="text-md py-5  text-gray-800 md:text-md max-w-xl mx-auto ">
          <span className="font-semibold gradient-text-red">
            &quot;Labor Omnia Vincit&quot;{" "}
          </span>
          is a Latin phrase that inspired me to step out of my comfort zone and
          push through to my limits. <br />
          <br />
          With a passion for technology and programming, I am not afraid of hard
          work. Instead, I fear work that does not contribute to my skill
          development.
        </p>
        <div className="4xl flex justify-center text-gray-600">
          <a href="https://www.linkedin.com/in/poosit-pimsensri-b368181a7/">
            <AiFillLinkedin className="text-5xl  hover:text-blue-600 dark:hover:text-blue-600" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyBasicDetail;
