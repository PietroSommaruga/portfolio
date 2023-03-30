import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Toggle from "./toggleIcon";

type Props = {};

interface IconColor {
  fgColor: string;
  bgColor: string;
}

const IconColor: IconColor = {
  fgColor: "gray",
  bgColor: "transparent",
};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Scocial Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/pietro-sommaruga-187127236/"
          fgColor={IconColor.fgColor}
          bgColor={IconColor.bgColor}
        />
        <SocialIcon
          url="https://github.com/PietroSommaruga"
          fgColor={IconColor.fgColor}
          bgColor={IconColor.bgColor}
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-400 cursor-pointer"
      >
        <Toggle />
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor={IconColor.fgColor}
          bgColor={IconColor.bgColor}
          url="#contact"
        />
        <a
          href="#contact"
          className="uppercase hidden md:inline-flex text-sm hover:text-gray-300"
        >
          Get In Touch
        </a>
      </motion.div>
    </header>
  );
}
