"use client";

import Image from "next/image";
import Header from "@/components/Header";
// import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import { useState } from "react";
import MyBasicDetail from "@/components/MyBasicDetail";
import TechStack from "@/components/TechStack";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <MyBasicDetail />
        </section>
        <section>
          <TechStack />
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={design}
                width={100}
                height={100}
                alt="design"
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful design
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aspernatur inventore tenetur atque, dolorem soluta quidem
                officiis voluptas neque deleniti animi!
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={code} width={100} height={100} alt="code" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful design
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aspernatur inventore tenetur atque, dolorem soluta quidem
                officiis voluptas neque deleniti animi!
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={consulting}
                width={100}
                height={100}
                alt="consulting"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful design
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aspernatur inventore tenetur atque, dolorem soluta quidem
                officiis voluptas neque deleniti animi!
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
