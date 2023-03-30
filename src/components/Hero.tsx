import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Developer", "Designer", "Creator"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative">
      <div className="bg-new absolute top-[40%]  w-screen h-[200px]  -rotate-45 z-0" />
      <h3 className="absolute top-24 uppercase tracking-[20px] text-light-secondary dark:text-dark-secondary text-2xl pl-[20px]">
        portfolio
      </h3>

      <div className="container max-w-[90%] mx-auto p-5 flex flex-col items-center b rounded-lg z-10">
        <img
          className="relative rounded-full h-24 w-24 object-cover"
          src="https://media.licdn.com/dms/image/C4E03AQGg02Di6aR8kQ/profile-displayphoto-shrink_800_800/0/1654790222575?e=1684972800&v=beta&t=XfumyP9dOacLGdG5vykYgdbiJr9-ndG7Gf0Fb2b4-is"
          alt=""
        />
        <div className="flex flex-col space-y-4 mt-10">
          <Link
            href="#about"
            className="uppercase tracking-[8px] pl-[8px] text-light-secondary hover:text-light-primary dark:text-dark-secondary dark:hover:text-dark-primary  text-md font-semibold"
          >
            about
          </Link>
          <Link
            href="#experience"
            className="uppercase tracking-[8px] pl-[8px] text-light-secondary hover:text-light-primary dark:text-dark-secondary dark:hover:text-dark-primary  text-md font-semibold"
          >
            experience
          </Link>
          <Link
            href="#skills"
            className="uppercase tracking-[8px] pl-[8px] text-light-secondary hover:text-light-primary dark:text-dark-secondary dark:hover:text-dark-primary  text-md font-semibold"
          >
            skills
          </Link>
          <Link
            href="#contact"
            className="uppercase tracking-[8px] pl-[8px] text-light-secondary hover:text-light-primary dark:text-dark-secondary dark:hover:text-dark-primary  text-md font-semibold"
          >
            get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
