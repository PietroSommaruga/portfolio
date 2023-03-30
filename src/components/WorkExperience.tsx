import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import content from "../assets/card-copy/experience/content.json";

interface WorkExperience {
  url: string;
  role: string;
  azienda: string;
  duration: string;
  competenze: string[];
  description: string[];
}

type Props = {};

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col md:flex-row max-w-full justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="relative w-screen md:w-[0]">
        <div className="circle w-[100px] absolute top-[300px] md:top-[0]" />
      </div>

      <div className="relative w-full flex space-x-5 items-end overflow-x-scroll p-10 snap-x snap-mandatory relative  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#815ac0]/80 scrollbar-thin">
        {content["experience"].map(
          (experience: WorkExperience, index: number) => (
            <ExperienceCard key={index} content={experience} />
          )
        )}
      </div>
    </motion.div>
  );
}
