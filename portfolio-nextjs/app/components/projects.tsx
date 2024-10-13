import React from "react";
import Image from "next/image";
import { Poppins } from "@next/font/google";
import myImage from "@/app/public/My-Work.jpg";
import myWork from "@/app/public/My_Work2.png"
import { Button } from "@/components/ui/button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

const Projects = () => {
  return (
    <>
      <div className={poppins.className}>
        <div className="relative h-36">
        <h2 className="absolute bottom-1 text-3xl text-white ml-4">Projects</h2>
        </div>
        <div className="flex mt-8">
          <div className="relative h-72 w-96 mt-6 m-auto">
            <Image src={myImage} alt="Project pic" className="hover:border-2 shadow-2xl"/>
            <Button className="absolute bottom-1 bg-gradient-to-r from-purple-500 to-cyan-300 rounded-full text-white hover:ring-2 ring-purple-500 ring-offset-4 ring-offset-blue-950 dark:ring-offset-slate-900 shadow-[1px_1px_50px_2px_rgba(0,255,255,0.3)] ml-4">
              View Project
            </Button>
          </div>
          <div className="relative h-72 w-96 mt-6 m-auto">
            <Image src={myWork} alt="Project pic" className="hover:cursor-pointer hover:border-2 shadow-2xl" />
            <Button className="absolute bottom-1 bg-gradient-to-r from-purple-500 to-cyan-300 rounded-full text-white hover:ring-2 ring-purple-500 ring-offset-4 ring-offset-blue-950 dark:ring-offset-slate-900 shadow-[1px_1px_50px_2px_rgba(0,255,255,0.3)] ml-4 ">
              View Project
            </Button> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
