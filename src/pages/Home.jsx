import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import TypewriterText from "../components/TypewriterText";
import TimelinePage2 from "../components/TimelinePage2";
import Projects from "./Projects";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const sectionSpacing = "mb-36";

const Home = () => {
  /* ================= Scroll Progress ================= */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  /* ================= Cursor Glow (Desktop Only) ================= */
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const move = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative min-h-screen w-full px-6 sm:px-10 lg:px-16 pt-28 sm:pt-32 pb-24 text-white overflow-hidden">

      {/* Scroll Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 origin-left z-50"
      />

      {/* Ambient Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/10 blur-[160px] rounded-full" />
      <div className="absolute top-[40%] right-[-200px] w-[400px] h-[400px] bg-indigo-600/10 blur-[140px] rounded-full" />

      {/* Cursor Glow (Desktop Only) */}
      {window.innerWidth >= 768 && (
        <div
          className="fixed w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none z-0"
          style={{
            transform: `translate(${cursorPos.x - 150}px, ${cursorPos.y - 150}px)`,
          }}
        />
      )}

      {/* Grid Background (Improved for Mobile) */}
      <div
        className="absolute inset-0 -z-10 
        bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:42px_42px]"
      />

      {/* Radial Overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]" />

      {/* ================= HERO ================= */}
      <section className="relative max-w-5xl mx-auto text-center md:text-left z-10">
        <TypewriterText />

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mt-6"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
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
          <span className="text-blue-300">Angular</span> and{" "}
          <span className="text-blue-400">Spring Boot</span>.
        </motion.p>

        {/* CTA Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-5 items-center sm:items-start"
        >
          {/* View Projects */}
          <Link
            to="/projects"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full
                       border border-blue-500 text-blue-400
                       hover:bg-blue-600 hover:text-white transition"
          >
            View Projects <FiArrowRight />
          </Link>

          {/* Download Resume (STATIC VERSION) */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-3
                       px-8 py-4 rounded-full
                       font-semibold
                       border border-blue-500
                       text-blue-400
                       bg-transparent
                       transition-colors duration-300
                       hover:bg-blue-600
                       hover:text-white"
          >
            <FiDownload className="text-lg" />
            <span>Download Resume</span>
          </a>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`relative z-10 max-w-4xl mx-auto mt-32 ${sectionSpacing}`}
      >
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 hover:border-blue-500/40 transition">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-blue-500">/</span> About Me
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            I’m a full-stack developer focused on building scalable backend
            systems with Spring Boot and modern responsive frontend
            applications.
          </p>
        </div>
      </motion.section>

      {/* ================= EXPERIENCE ================= */}
      <section className={`relative z-10 max-w-6xl mx-auto ${sectionSpacing}`}>
        <h2 className="text-3xl font-bold mb-10">
          <span className="text-blue-500">/</span> Experience
        </h2>
        <TimelinePage2 />
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">
          <span className="text-blue-500">/</span> Projects
        </h2>
        <Projects />
      </section>
    </div>
  );
};

export default Home;
