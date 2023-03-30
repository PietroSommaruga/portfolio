import About from "@/components/About";
import BackgroundElements from "@/components/BackgroundElements";
import Contact from "@/components/Skills";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import Head from "next/head";
import { getRGBColor, getAccessibleColor } from "../utils/index";
import { useEffect, useState } from "react";

export default function Home() {
  const TextLight = getRGBColor("#000000", "text");
  const textSecondary = getRGBColor("#6B7280", "secondary");
  const textDark = getRGBColor("#FFFFFF", "textdark");
  const textDarkSecondary = getRGBColor("#6B7280", "textdarksecondary");
  const bgDark = getRGBColor("#252525", "bgdark");
  const bgLight = getRGBColor("#FFFFFF", "bglight");
  const bgViolet = getRGBColor("#815ac0", "bgviolet");

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setTheme(localStorage.getItem("theme") ?? "light");
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <div className="dark:bg-dark-primary bg-light-primary text-white h-screen  overflow-y-scroll overflow-x-hidden z-0 snap-y snap-mandatory scrollbar scrollbar-track-gray-400/10 scrollbar-thumb-black">
      <Head>
        <title>Pietro Portfolio</title>
        <style>
          :root{" "}
          {`{${TextLight} ${textSecondary} ${textDark} ${textDarkSecondary} ${bgDark} ${bgLight} ${bgViolet}}`}
        </style>
      </Head>

      <Header />

      <div id="hero" className="snap-start">
        <Hero />
      </div>

      <section id="about" className="mt-5 snap-start">
        <About />
      </section>

      <section id="experience" className="snap-start">
        <WorkExperience />
      </section>

      {/* Contact Me */}
      <section id="skills" className="snap-center">
        <Contact />
      </section>
      <div id="contact" className="snap-center">
        <ContactMe />
      </div>
    </div>
  );
}
