"use client"
import { motion, useScroll } from "framer-motion";
import React from "react";
import Nav from "../components/navBar";
import HeroImage from "../components/heroCard";
import HeroText from "../components/heroText";
import Hero from "../components/hero";
import About from "../components/about";
import SkillCard from "../components/skillCard";
import Skills from "../components/skills";
import Contact from "../components/contact";
import TimeLine from "../components/timeline";
import Footer from "../components/footer";

export default function App() {
  return (
    <motion.main >
          <Nav/>
          <Hero/>
        <section className="flex flex-col max-lg:mt-8  gap-[80px] " >
          <About/>
          <Skills/>
          <Contact/>
          <Footer/>
        </section>
    </motion.main>
  );
}
