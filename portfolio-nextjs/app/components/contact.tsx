import React from 'react'
import { Poppins } from "@next/font/google";
import { Button } from "@/components/ui/button";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500"],
  });

const Contact = () => {
  return (
    <> <div className={poppins.className}>
        <div className='text-white text-3xl'>
        <div className="relative h-28">
        <h2 className="absolute bottom-1 text-3xl text-white ml-4">Contact Me </h2></div>

            <h3 className='text-xl mt-8'>Full Name</h3>
            <div className='bg-gradient-to-r from-purple-500 to-cyan-300 w-9/12 pb-1 shadow-lg rounded-xl px-1 mt-2'>
                    <input type="text" className='w-full px-5 py-2 text-base bg-[rgb(18,18,50)] text-white outline-none rounded-xl' placeholder='Enter Your Name Here'/>
                </div>
            <h3 className='text-xl mt-4'>Email</h3>
            <div className='bg-gradient-to-r from-purple-500 to-cyan-300 w-9/12 pb-1 shadow-lg rounded-xl px-1 mt-2'>
                    <input type="text" className='w-full px-5 py-2 text-base bg-[rgb(18,18,50)] text-white outline-none rounded-xl' placeholder='Enter Your Email Here'/>
                </div>
            <h3 className='text-xl mt-4'>Phone No.</h3>
            <div className='bg-gradient-to-r from-purple-500 to-cyan-300 w-9/12 pb-1 shadow-lg rounded-xl px-1 mt-2'>
                    <input type="text" className='w-full px-5 py-2 text-base bg-[rgb(18,18,50)] text-white outline-none rounded-xl' placeholder='Enter Your Phone Here'/>
                </div>
            <h3 className='text-xl mt-4'>Message</h3>
            <div className='bg-gradient-to-r from-purple-500 to-cyan-300 w-9/12 pb-1 shadow-lg rounded-xl px-1 mt-2'>
                    <input type="text" className='w-full px-5 py-2 text-base bg-[rgb(18,18,50)] text-white outline-none rounded-xl' placeholder='Type Your Message Here '/>
                </div>
                <Button className="mt-4 px-9 bg-gradient-to-r from-purple-500 to-cyan-300 rounded-full text-white hover:ring-2 ring-purple-500 ring-offset-4 ring-offset-blue-950 dark:ring-offset-slate-900 shadow-[1px_1px_50px_2px_rgba(0,255,255,0.3)]">
              Submit
            </Button>
            </div>
        </div>
    </>
  )
}

export default Contact