import React from "react";
import Image from "next/image";

function EachSoftSkill({ pic, alt, title, content }) {
  return (
    <div className=" text-center shadow-lg p-10 rounded-xl mt-10 dark:bg-white ">
      <Image src={pic} width={100} height={100} alt={alt} className="mx-auto" />
      <h3 className="text-lg font-medium pt-8 pb-2">{title}</h3>
      <p className="py-2">{content}</p>
    </div>
  );
}

export default EachSoftSkill;
