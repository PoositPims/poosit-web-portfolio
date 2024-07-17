import React from "react";
import Image from "next/image";
import { AiFillLinkedin } from "react-icons/ai";
import pingPic from "../../public/Poosit-pic.png";

function MyBasicDetail() {
  return (
    <div>
      <div className="text-center p-10">
        <div className="relative mx-auto bg-gradient-to-b from-blue-600 rounded-full w-60 h-60 mb-10 overflow-hidden md:h-60 md:w-60 shadow-2xl  hover:from-red-600 hover:to-yellow-200">
          <Image src={pingPic} layout="fill" objectFit="cover" alt="picture" />
        </div>
        <h2 className="text-5xl py-2 gradient-text font-medium md:text-6xl">
          Poosit Pimsensri
        </h2>
        <div className="md:border-2 md:shadow-lg md:rounded-xl">
          <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
            Frontend Developer <br />
            <p className="md:text-2xl md:mt-5 ">
              and &nbsp;
              <span className="gradient-text-red">Dream Chaser.</span>
            </p>
          </h3>
          <p className="text-md py-5  text-gray-800 md:text-md max-w-xl mx-auto dark:text-white">
            A simple person who want to push through to the limit &quot; i will
            never do that &quot; with fixed mindset that i was not engineering
            student. <br />
            <br />
            After realize that, my background degree is not fit with my interest
            at all, and want to try something new that i have never learned
            before. <br />
            <br />
            Then coding is an answer which can improve this world to not stop
            orbit. I think It would be good if i can be a small part of this
            industry. I finally found it and i will dedicate for it.
          </p>
        </div>
      </div>
      <div className="5xl flex justify-center text-gray-600">
        <a href="https://www.linkedin.com/in/poosit-pimsensri-b368181a7/">
          <AiFillLinkedin className="text-5xl dark:text-white hover:text-blue-600 dark:hover:text-blue-600" />
        </a>
      </div>
    </div>
  );
}

export default MyBasicDetail;
