import React from "react";
import { motion, useSpring, useScroll, useTransform } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import TypewriterText from "../components/TypewriterText";
import TimelinePage2 from "../components/TimelinePage2";
import Projects from "./Projects";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
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
  "Tailwind CSS",
  "Spring Boot",
  "Hibernate",
  "MySQL",
  "MongoDB",
  "Docker",
  "Git",
];

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="relative min-h-screen w-full px-6 sm:px-10 lg:px-16 pt-28 pb-24 text-white bg-black overflow-hidden">

      {/* Scroll Progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 origin-left z-50"
      />

      {/* Background */}
      <motion.div
        style={{ y: yParallax }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        {/* Gradient Glows */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-cyan-500/20 blur-[200px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[200px] rounded-full animate-pulse" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
              linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      <div className="relative z-20">

        {/* HERO */}
        <section className="max-w-5xl mx-auto text-center md:text-left">
          <TypewriterText />

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl lg:text-6xl font-extrabold mt-6"
          >
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Name
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full animate-pulse" />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-300 max-w-xl"
          >
            Full Stack Developer building scalable applications with Angular & Spring Boot.
          </motion.p>

          {/* Buttons (NO magnetic animation) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-6"
          >
            <a
              href="/projects"
              className="px-8 py-4 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition duration-300 flex items-center gap-2 justify-center"
            >
              View Projects <FiArrowRight />
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold flex items-center gap-2 justify-center hover:scale-105 transition duration-300"
            >
              <FiDownload /> Download Resume
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-20"
          >
            <div className="w-6 h-10 border-2 border-cyan-500 rounded-full flex justify-center mx-auto md:mx-0">
              <div className="w-1 h-3 bg-cyan-500 mt-2 rounded-full animate-bounce" />
            </div>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-24" />

        {/* ABOUT */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`max-w-4xl mx-auto ${sectionSpacing}`}
        >
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 transition-all duration-500 hover:border-cyan-500/40 hover:-translate-y-2">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-cyan-500">/</span> About Me
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Passionate full-stack developer focused on performance,
              scalability, and clean architecture.
            </p>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-24" />

        {/* SKILLS */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`max-w-6xl mx-auto ${sectionSpacing}`}
        >
          <h2 className="text-3xl font-bold mb-12">
            <span className="text-cyan-500">/</span> Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl py-6 text-center font-medium transition cursor-pointer hover:border-cyan-500/50"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-24" />

        {/* EXPERIENCE */}
        <section className={`max-w-6xl mx-auto ${sectionSpacing}`}>
          <h2 className="text-3xl font-bold mb-10">
            <span className="text-cyan-500">/</span> Experience
          </h2>
          <TimelinePage2 />
        </section>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-24" />

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
