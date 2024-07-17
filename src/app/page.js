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
          <div className="lg:grid gap-10 lg:grid-cols-3">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white ">
              <Image
                src={design}
                width={100}
                height={100}
                alt="design"
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Always open to learn new things
              </h3>
              <p className="py-2">
                I only fill a glass of water less than half full because I am
                always seeking more knowledge. As the world continues to turn,
                so do I. I will never stop learning!
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white ">
              <Image
                src={code}
                width={100}
                height={100}
                alt="code"
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Work under pressure
              </h3>
              <p className="py-2">
                I excel in high-pressure environments, maintaining composure and
                delivering results even under tight deadlines.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={consulting}
                width={100}
                height={100}
                alt="consulting"
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Interpersonal skills
              </h3>
              <p className="py-2">
                I am capable of interacting effectively with people from all
                walks of life. I treat everyone with respect and kindness,
                fostering a collaborative environment to achieve tasks
                efficiently.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
