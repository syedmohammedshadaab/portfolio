import React, { useEffect, useState } from "react";
import { motion, useSpring, useScroll } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import {
  SiAngular,
  SiReact,
  SiSpringboot,
  SiTypescript,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiMongodb,
  SiGit,
  SiMaven,
  SiPostman,
  SiDocker,
  SiVercel,
  SiRender,
  SiRailway,
  SiIntellijidea,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

import TypewriterText from "../components/TypewriterText";
import TimelinePage2 from "../components/TimelinePage2";
import Projects from "./Projects";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const sectionSpacing = "mb-36";

const skills = [
  { name: "Java", icon: <FaJava className="text-orange-400 text-2xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-2xl" /> },
  { name: "Angular", icon: <SiAngular className="text-red-500 text-2xl" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 text-2xl" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500 text-2xl" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-400 text-2xl" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500 text-2xl" /> },
  { name: "Spring MVC", icon: <SiSpringboot className="text-green-400 text-2xl" /> },
  { name: "JPA", icon: <SiSpringboot className="text-green-300 text-2xl" /> },
  { name: "Hibernate", icon: <SiSpringboot className="text-emerald-400 text-2xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400 text-2xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-2xl" /> },
  { name: "Git", icon: <SiGit className="text-orange-500 text-2xl" /> },
  { name: "Maven", icon: <SiMaven className="text-red-400 text-2xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-600 text-2xl" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-500 text-2xl" /> },
  { name: "Spring Tool Suite", icon: <SiSpringboot className="text-green-500 text-2xl" /> },
  { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-pink-500 text-2xl" /> },
  { name: "Visual Studio Code", icon: <SiVisualstudiocode className="text-blue-500 text-2xl" /> },
  { name: "Vercel", icon: <SiVercel className="text-white text-2xl" /> },
  { name: "Railway", icon: <SiRailway className="text-purple-400 text-2xl" /> },
  { name: "Render", icon: <SiRender className="text-indigo-400 text-2xl" /> },
  { name: "React", icon: <SiReact className="text-cyan-400 text-2xl" /> },
];

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative min-h-screen w-full px-6 sm:px-10 lg:px-16 pt-28 sm:pt-32 pb-24 text-white overflow-hidden bg-black">

      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 origin-left z-50"
      />

      {/* Cursor Glow */}
      <div
        className="fixed w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none z-0"
        style={{
          transform: `translate(${cursorPos.x - 150}px, ${cursorPos.y - 150}px)`,
        }}
      />

      {/* HERO */}
      <section className="relative max-w-5xl mx-auto text-center md:text-left z-10">
        <TypewriterText />

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mt-6"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            Name
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="mt-6 text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl"
        >
          Full Stack Developer building scalable applications with{" "}
          <span className="text-red-500 font-semibold">Angular</span> and{" "}
          <span className="text-green-500 font-semibold">Spring Boot</span>.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-5"
        >
          <a
            href="/projects"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full
                       border border-cyan-500 text-cyan-400
                       hover:bg-cyan-500 hover:text-black transition"
          >
            View Projects <FiArrowRight />
          </a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full
                       font-semibold text-white border border-cyan-500/40
                       hover:border-cyan-400
                       hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]
                       transition-all duration-300"
          >
            <FiDownload />
            Download Resume
          </motion.a>
        </motion.div>
      </section>

      {/* SKILLS */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`relative z-10 max-w-6xl mx-auto mt-32 ${sectionSpacing}`}
      >
        <h2 className="text-3xl font-bold mb-10">
          <span className="text-cyan-500">/</span> Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center gap-3
                         bg-white/5 border border-white/10 backdrop-blur-xl
                         rounded-xl py-6 px-4
                         hover:border-cyan-500/60
                         hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
                         transition-all duration-300 cursor-pointer"
            >
              {skill.icon}
              <span className="text-sm font-medium text-gray-200 text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* EXPERIENCE */}
      <section className={`relative z-10 max-w-6xl mx-auto ${sectionSpacing}`}>
        <h2 className="text-3xl font-bold mb-10">
          <span className="text-cyan-500">/</span> Experience
        </h2>
        <TimelinePage2 />
      </section>

      {/* PROJECTS */}
      <section className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">
          <span className="text-cyan-500">/</span> Projects
        </h2>
        <Projects />
      </section>

    </div>
  );
};

export default Home;
