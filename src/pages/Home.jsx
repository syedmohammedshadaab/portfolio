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
    <div className="min-h-screen w-full px-5 sm:px-8 md:px-12 pt-28 pb-20 text-white relative z-10">

      {/* ================= HERO ================= */}
      <section className="max-w-6xl mx-auto mb-24 text-center md:text-left">

        <TypewriterText />

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
            Syed Mohammed Shadaab``
          </span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-2xl mx-auto md:mx-0"
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
            Full Stack Developer building scalable applications with{" "}
            <span className="text-blue-400 font-medium">Angular</span> and{" "}
            <span className="text-indigo-400 font-medium">Spring Boot</span>
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center md:justify-start items-center gap-4 mt-8">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-7 h-7 sm:w-8 sm:h-8 text-slate-400 hover:text-white transition" />
            </a>

            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-7 h-7 sm:w-8 sm:h-8 text-slate-400 hover:text-white transition" />
            </a>

            <EmailIcon email="" />
          </div>
        </motion.div>

        {/* CTA BUTTONS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-10"
        >
          <a
            href="/projects"
            className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 transition text-white px-7 py-3 rounded-xl shadow-lg shadow-blue-600/30"
          >
            View Projects
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            download
            className="w-full sm:w-auto text-center backdrop-blur-md bg-white/10 hover:bg-white/20 transition border border-white/20 text-white px-7 py-3 rounded-xl"
          >
            Download Resume
          </a>

          <a
            href=""
            className="w-full sm:w-auto text-center text-gray-300 hover:text-white transition underline underline-offset-4 py-3"
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
        className="max-w-3xl mx-auto mb-24 text-center md:text-left"
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-5">
          About Me
        </h2>
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
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
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mb-24 text-center md:text-left"
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
          {[
            "Java", "TypeScript", "Angular", "Bootstrap", "HTML5", "CSS3",
            "Spring Boot", "Spring MVC", "JPA", "Hibernate",
            "MySQL", "MongoDB", "Git", "Maven", "Postman",
            "Docker", "Spring Tool Suite", "IntelliJ IDEA",
            "Visual Studio Code", "Vercel", "Railway", "Render", "React"
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium
              text-gray-200 backdrop-blur-md bg-white/10 border border-white/20
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
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mb-24"
      >
        <TimelinePage2 />
      </motion.section>

      {/* ================= PROJECTS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mb-10"
      >
        <Projects />
      </motion.section>
    </div>
  );
};

export default Home;
