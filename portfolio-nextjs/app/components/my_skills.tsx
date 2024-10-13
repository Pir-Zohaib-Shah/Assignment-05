import React from "react";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

const My_skills = () => {
  return (
    <>
      <div className={poppins.className}>
        <div className="text-white list-none ">
          <div className="text-3xl ml-4">My Skills</div>
          <div className="w-2/3 text-lg">
            <li className="m-2 p-1">
              <h3 className="mt-10">HTML</h3>
              <span className="bg-slate-800 block h-5 border-black border-2 overflow-hidden transition-all rounded-xl m-2 shadow-inner">
                <div className="h-6 mb-2 w-full bg-gradient-to-r from-purple-500 to-cyan-300 "></div>
              </span>
              <h3 className="mt-5">CSS</h3>
              <span className="bg-slate-800 block h-5 border-black border-2 overflow-hidden transition-all rounded-xl m-2 shadow-inner">
                <div className="h-6 mb-2 w-5/6 bg-gradient-to-r from-purple-500 to-cyan-300 "></div>
              </span>
              <h3 className="mt-5">TYPESCRIPT</h3>
              <span className="bg-slate-800 block h-5 border-black border-2 overflow-hidden transition-all rounded-xl m-2 shadow-inner">
                <div className="h-6 mb-2 w-3/6 bg-gradient-to-r from-purple-500 to-cyan-300 "></div>
              </span>
              <h3 className="mt-5">NEXT.JS</h3>
              <span className="bg-slate-800 block h-5 border-black border-2 overflow-hidden transition-all rounded-xl m-2 shadow-inner">
                <div className="h-6 mb-2 w-3/4 bg-gradient-to-r from-purple-500 to-cyan-300 "></div>
              </span>
              <h3 className="mt-5">TAILWIND CSS</h3>
              <span className="bg-slate-800 block h-5 border-black border-2 overflow-hidden transition-all rounded-xl m-2 shadow-inner">
                <div className="h-6 mb-2 w-4/5 bg-gradient-to-r from-purple-500 to-cyan-300 "></div>
              </span>
            
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default My_skills;
