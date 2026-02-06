import React from "react";
import { motion } from "framer-motion";
import TypewriterText from "../components/TypewriterText";
import TimelinePage2 from "../components/TimelinePage2";
import GitHubIcon from "../components/GithubIcon";
import LinkedInIcon from "../components/LinkedInIcon";
import EmailIcon from "../components/EmailIcon";
import Projects from "./Projects";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <div className="min-h-screen px-6 py-24 text-white relative z-10">
      {/* ================= HERO ================= */}
      <section className="mb-28 max-w-5xl">
        <TypewriterText />

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
            Syed Mohammed Shadaab
          </span>
        </motion.h1>

        {/* TEXT + SOCIALS (FIXED STRUCTURE) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-10 max-w-2xl"
        >
          <p className="text-lg md:text-xl text-gray-300">
            Full Stack Developer building scalable applications with{" "}
            <span className="text-blue-400 font-medium">Angular</span> and{" "}
            <span className="text-indigo-400 font-medium">Spring Boot</span>
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-3 mt-8">
            <a
              href="https://github.com/syedmohammedshadaab"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-8 h-8 text-slate-400 hover:text-white transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/syedmohammedshadaaab"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-8 h-8 text-slate-400 hover:text-white transition" />
            </a>

            <EmailIcon email="syedshadaab2@gmail.com" />
          </div>
        </motion.div>

        {/* CTA BUTTONS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-4 flex-wrap items-center"
        >
          <a
            href="/projects"
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-7 py-3 rounded-xl shadow-lg shadow-blue-600/40"
          >
            View Projects
          </a>

          <a
            href="resume/Syed_Mohammed_Shadaab_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="backdrop-blur-md bg-white/10 hover:bg-white/20 transition border border-white/20 text-white px-7 py-3 rounded-xl"
          >
            Download Resume
          </a>

          <a
            href="mailto:syedshadaab2@gmail.com"
            className="text-gray-300 hover:text-white transition underline underline-offset-4"
          >
            Contact Me
          </a>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-28 max-w-3xl"
      >
        <h2 className="text-2xl font-semibold mb-5 text-white">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I am a passionate full-stack developer focused on building clean,
          maintainable, and high-performance web applications using modern
          frontend and backend technologies.
        </p>
      </motion.section>

      {/* ================= SKILLS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-28"
      >
        <h2 className="text-2xl font-semibold mb-6 text-white">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {[
            "Java",
            "TypeScript",
            "Angular",
            "Bootstrap",
            "HTML5",
            "CSS3",
            "Spring Boot",
            "Spring MVC",
            "JPA",
            "Hibernate",
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
            "React",
          ].map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 rounded-full text-sm font-medium text-gray-200
              backdrop-blur-md bg-white/10 border border-white/20
              hover:bg-white/20 hover:border-blue-400/50 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.section>

      {/* ================= TIMELINE ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-28"
      >
        <TimelinePage2 />
      </motion.section>

      {/* ================= PROJECTS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-28"
      >
        <div className="mt-10">
          <Projects />
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
