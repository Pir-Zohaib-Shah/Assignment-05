import React from "react";
import Image from "next/image";
import myImage from "@/app/public/About-Pic.jpg";
import { Poppins, Montserrat } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
});

const About = () => {
  return (
    <>
      <div className={poppins.className}>
        <div className="text-white">
          <div className="relative h-32">
            <div className="text-3xl ml-4 absolute bottom-1">About</div>
          </div>
          <div className="flex items-center space-x-3">
            <Image 
              src={myImage}
              alt="Project pic"
              className="h-96 w-96 m-auto mt-10 mr-4"
            />
            <div className={montserrat.className}>
            <p className="text-lg">
              Hello! I’m Zohaib Shah, and I started my coding journey in
              2023 through the Governor Sindh initiative. Since then, I’ve been
              passionate about learning and expanding my skills in programming.
              Alongside coding, I have a deep love for photography, photo
              editing, and graphic design. I enjoy capturing moments and
              transforming them into visually striking creations. My diverse
              interests fuel my creativity and drive my desire to innovate in
              both tech and design. I’m excited to share my work with you and
              look forward to what the future holds! and there is my skills below!
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
