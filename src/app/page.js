"use client";

import design from "../../public/design.png";
import code from "../../public/code.png";
import MyBasicDetail from "@/components/MyBasicDetail";
import TechStack from "@/components/TechStack";
import EachSoftSkill from "@/components/EachSoftSkill";

export default function Home() {
  const softskills = [
    {
      pic: design,
      alt: "design",
      title: "Always open to learn new things",
      content:
        "I only fill a glass of water less than half full because I am always seeking more knowledge. As the world continues to turn, so do I. I will never stop learning !",
    },
    {
      pic: code,
      alt: "code",
      title: "Work under pressure",
      content:
        "I excel in high-pressure environments, maintaining composure and delivering results even under tight deadlines.",
    },
    {
      pic: design,
      alt: "design",
      title: "Interpersonal skills",
      content:
        "I am capable of interacting effectively with people from all walks of life. I treat everyone with respect and kindness, fostering a collaborative environment to achieve tasks efficiently.",
    },
  ];

  return (
    <div>
      <main className="bg-white  dark:bg-gray-900">
        <section className="min-h-screen">
          <MyBasicDetail />
        </section>
        <section>
          <TechStack />
          <div className="px-8 md:px-20 lg:grid gap-10 lg:grid-cols-3 py-10">
            {softskills.map((item, index) => (
              <EachSoftSkill
                id={index}
                key={index}
                pic={item.pic}
                alt={item.alt}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
