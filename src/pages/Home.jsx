import React, { useEffect, useState } from "react";
import { motion, useSpring, useScroll } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import TypewriterText from "../components/TypewriterText";
import TimelinePage2 from "../components/TimelinePage2";
import Projects from "./Projects";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const sectionSpacing = "mb-36";

const skills = [
  "Java",
  "JavaScript",
  "TypeScript",
  "Angular",
  "React",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Tailwind CSS",
  "Spring Boot",
  "Spring MVC",
  "JPA",
  "Hibernate",
  "REST APIs",
  "MySQL",
  "MongoDB",
  "Git",
  "Maven",
  "Postman",
  "Docker",
  "Spring Tool Suite",
  "IntelliJ IDEA",
  "Visual Studio Code",
  "Vercel",
  "Railway",
  "Render",
];

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative min-h-screen w-full px-6 sm:px-10 lg:px-16 pt-28 sm:pt-32 pb-24 text-white bg-black overflow-hidden">

      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 origin-left z-50"
      />

      {/* ===== GRID BACKGROUND (PROPERLY ADDED) ===== */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Cursor Glow */}
      <div
        className="fixed w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none z-10"
        style={{
          transform: `translate(${cursorPos.x - 150}px, ${cursorPos.y - 150}px)`,
        }}
      />

      {/* ===== CONTENT WRAPPER ===== */}
      <div className="relative z-20">

        {/* HERO */}
        <section className="max-w-5xl mx-auto text-center md:text-left">
          <TypewriterText />

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mt-6"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
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
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition"
            >
              View Projects <FiArrowRight />
            </a>

            <a
              href="/resume.pdf"
              download
              className="relative flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-white overflow-hidden"
            >
              <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 animate-[spin_6s_linear_infinite]" />
              <span className="absolute inset-[2px] rounded-full bg-black" />
              <FiDownload className="relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </a>
          </motion.div>
        </section>

        {/* ABOUT */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`max-w-4xl mx-auto mt-32 ${sectionSpacing}`}
        >
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-cyan-500">/</span> About Me
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I’m a full-stack developer passionate about building scalable,
              high-performance applications using modern frontend and backend
              technologies.
            </p>
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`max-w-6xl mx-auto ${sectionSpacing}`}
        >
          <h2 className="text-3xl font-bold mb-10">
            <span className="text-cyan-500">/</span> Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl py-4 text-center font-medium hover:border-cyan-500/50 hover:bg-white/10 transition cursor-pointer"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EXPERIENCE */}
        <section className={`max-w-6xl mx-auto ${sectionSpacing}`}>
          <h2 className="text-3xl font-bold mb-10">
            <span className="text-cyan-500">/</span> Experience
          </h2>
          <TimelinePage2 />
        </section>

        {/* PROJECTS */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">
            <span className="text-cyan-500">/</span> Projects
          </h2>
          <Projects />
        </section>

      </div>
    </div>
  );
};

export default Home;
