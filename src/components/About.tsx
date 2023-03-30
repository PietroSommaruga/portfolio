import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-light-secondary dark:text-dark-secondary text-2xl pl-[20px]">
        About
      </h3>

      <div className="relative -mb-20 md:m-0 flex-shrink-0 w-32 h-44 h-content rounded-full md:rounded-lg md:w-[224px] md:h-[224px] xl:w-[400px] xl:h-[500px]">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          src="https://media.licdn.com/dms/image/C4E03AQGg02Di6aR8kQ/profile-displayphoto-shrink_800_800/0/1654790222575?e=1684972800&v=beta&t=XfumyP9dOacLGdG5vykYgdbiJr9-ndG7Gf0Fb2b4-is"
          alt=""
          className="relative -mb-20 mt-10 md:m-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-[224px] md:h-[224px] xl:w-[400px] xl:h-[500px] z-10"
        />
        <div className="absolute top-10 aspect-square bg-new w-32 h-32 md:w-[224px] xl:w-[400px] xl:h-[500px]" />
      </div>

      <div className="space-y-5 px-0 md:px-10 md:min-h-[224px] flex flex-col justify-center">
        <h4 className="text-3xl font-semibold text-light-primary dark:text-dark-primary">
          Un po' della mia
          <span className="underline decoration-general-violet mx-2">
            storia
          </span>
        </h4>

        <p className="text-md text-light-primary dark:text-dark-primary">
          {
            "La tecnologia è una mia grande passione da quando sono piccolo, tanto da spingermi a diventare uno sviluppatore. Grazie alla mia esperienza nello sport, ho imparato l'importanza del lavoro di squadra, che applico anche nel lavoro. Sono sempre alla ricerca di nuove sfide per crescere professionalmente e personalmente."
          }
        </p>
      </div>
    </div>
  );
}
