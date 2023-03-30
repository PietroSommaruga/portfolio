import React from 'react';
import { motion } from "framer-motion";
import Snake from './Snake';
type Props = {}

export default function Contact({}: Props) {
    const projects = [1];
  return (
    <div className='h-screen relative flex flex-col items-center overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 space-x-5'>
            {projects.map((project, k) => (
                <div key={k} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center h-screen p-20 md:p-44'>
                    <div className='skillsCard bg-black'>
                        <Snake />
                    </div>
                </div>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-general-violet/10 left-0 h-[500px] -skew-y-12'></div>
    </div>
  )
}