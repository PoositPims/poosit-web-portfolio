import Image from "next/image";
import Link from "next/link";
import React from "react";

function Portfolio() {
  return (
    <div className=" mx-8 mb-10 pb-10 md:px-20 md:mx-20 shadow-lg rounded-xl">
      <h3 className="text-center text-3xl p-2 mb-5 font-medium dark:text-gray-400">
        My projects
      </h3>
      <div className="md:grid md:grid-cols-3 ">
        <div>
          <Link href="https://visit-yala-city.vercel.app/">
            <div className="px-2 w-full">
              <Image
                src="/visit-yala.png"
                alt="visit-yala"
                width={500}
                height={500}
                className="w-full h-[250px]"
              />
            </div>
          </Link>
          <p className="text-lg text-center font-medium mt-5 dark:text-gray-400">
            Travel Guides Website
          </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
