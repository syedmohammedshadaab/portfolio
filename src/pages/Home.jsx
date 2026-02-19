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

const sectionSpacing = "mb-40";

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
      {/* Scroll Progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 origin-left z-50"
      />

      {/* ===== GRID + MIDNIGHT MIST BACKGROUND ===== */}
      <div className="absolute inset-0 z-0">
        {/* Grid Background */}
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

        {/* Midnight Mist Radial Gradient */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
              radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
              radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
            `,
          }}
        />
      </div>

      {/* Animated Gradient Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/20 blur-[140px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-indigo-600/20 blur-[140px] rounded-full animate-pulse" />

      {/* Cursor Glow */}
      <div
        className="fixed w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none z-10"
        style={{
          transform: `translate(${cursorPos.x - 150}px, ${cursorPos.y - 150}px)`,
        }}
      />

      {/* ===== CONTENT ===== */}
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
              Syed Mohammed Shadaab{" "}
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
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300"
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition" />
            </a>

            <a
              href="/resume.pdf"
              download
              className="relative flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:scale-105 transition-transform duration-300"
            >
              <FiDownload />
              Download Resume
            </a>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-24" />

        {/* ABOUT */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`max-w-4xl mx-auto ${sectionSpacing}`}
        >
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 hover:border-cyan-500/30 transition">
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
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl py-4 text-center font-medium hover:border-cyan-500 hover:bg-white/10 transition cursor-pointer"
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
