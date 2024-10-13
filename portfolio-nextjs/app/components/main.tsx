import React from "react";
import Image from "next/image";
import { Poppins } from "@next/font/google";
import { Montserrat } from "@next/font/google";
import { Button } from "@/components/ui/button";

import myImage from "@/app/public/My.jpg"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300"],
});

const Main = () => {
  return (
    <>
      <div className="flex">
        <div className=" w-2/4 mt-40 ml-36">
          <div className={poppins.className}>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 via-cyan-300 to-cyan-300 bg-clip-text text-transparent">
              <strong>Hello, i'm Zohaib Shah,</strong>
            </h1>
            <h2 className="text-4xl mr-10 text-white">Front End Developer</h2>
            <div className={montserrat.className}>
          <p className="text-white mt-9">I am a Creative Thinker | Turning Ideas into Digital Reality</p>
          <p className="text-white mt-1">I am a Web Developer | Crafting Seamless User Experiences</p>
          <p className="text-white mt-1">I am a Frontend Engineer | Building Beautiful, Responsive Websites</p>
            </div>
            <Button className="mt-9 bg-gradient-to-r from-purple-500 to-cyan-300 rounded-full text-white hover:ring-2 ring-purple-500 ring-offset-4 ring-offset-blue-950 dark:ring-offset-slate-900 shadow-[1px_1px_50px_2px_rgba(0,255,255,0.3)]">Download CV</Button>
          </div>
        </div>
          <Image className="h-96 w-96 m-auto mt-28 rounded-full shadow-[1px_1px_60px_4px_rgba(0,255,255,0.3)]"
            src={myImage}
            alt="My Image"
          />
      </div>
    </>
  );
};

export default Main;
