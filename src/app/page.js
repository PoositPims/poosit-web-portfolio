"use client";

import Image from "next/image";
import Header from "@/components/Header";
// import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import deved from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="text-center p-10">
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mb-10 overflow-hidden md:h-96 md:w-96">
              <Image
                src={deved}
                layout="fill"
                objectFit="cover"
                alt="picture"
              />
            </div>
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Poosit Pimsensri
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Frontend Developer and Dream Chaser.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-md max-w-xl mx-auto">
              A simple person who want to push through to the limit &quot; i
              will never do that &quot; with fixed mindset that i was not
              engineering student. <br />
              <br />
              After realize that, my background degree is not fit with my
              interest at all, and want to try something new that i have never
              learned before. <br />
              <br />
              Then coding is an answer which can improve this world to not stop
              orbit. I think It would be good if i can be a small part of this
              industry. I finally found it and i will dedicate for it.
            </p>
          </div>
          <div className="5xl flex justify-center text-gray-600">
            <AiFillLinkedin />
          </div>
        </section>
        {/* ===================================== */}
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-80">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              quo quisquam illo molestiae unde sapiente corrupti facilis
              repellat, velit voluptatem maiores nobis iure cumque vitae,
              dolorum omnis architecto repellendus incidunt.
            </p>
            <p className="text-md py-2 leading-8 text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              quo quisquam illo molestiae unde sapiente corrupti facilis
              repellat, velit voluptatem maiores nobis iure cumque vitae,
              dolorum omnis architecto repellendus incidunt.
            </p>
          </div>
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
        {/* <section>
        <div>
          <h3>Portfolio</h3>
        </div>
      </section> */}
      </main>
    </div>
  );
}
