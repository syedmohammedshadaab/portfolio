import React from "react";
import { motion } from "framer-motion";
import TypewriterText from "../components/TypewriterText";
import TimelinePage2 from "../components/TimelinePage2";
import GitHubIcon from "../components/GithubIcon";
import LinkedInIcon from "../components/LinkedInIcon";
import EmailIcon from "../components/EmailIcon";
import Projects from "./Projects";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const sectionSpacing = "mb-32";

const Home = () => {
  return (
    <div className="min-h-screen w-full px-6 sm:px-10 pt-32 pb-24 text-white relative">

      {/* ================= HERO ================= */}
      <section className="max-w-4xl mx-auto text-center md:text-left">

        <TypewriterText />

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mt-6"
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
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0"
        >
          Full Stack Developer building scalable applications with{" "}
          <span className="text-blue-400 font-medium">Angular</span> and{" "}
          <span className="text-indigo-400 font-medium">Spring Boot</span>.
        </motion.p>

        {/* SOCIAL GLASS CONTAINER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex justify-center md:justify-start gap-6 mt-10
                     bg-white/5 backdrop-blur-md
                     border border-white/10
                     px-8 py-4 rounded-full w-fit mx-auto md:mx-0"
        >
          <a href="" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="w-6 h-6 text-gray-400 hover:text-white transition hover:scale-110" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="w-6 h-6 text-gray-400 hover:text-white transition hover:scale-110" />
          </a>
          <EmailIcon email="" />
        </motion.div>

        {/* CTA SECTION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 flex flex-col items-center md:items-start gap-6"
        >
          {/* Primary Button */}
          <a
            href="/projects"
            className="w-full sm:w-auto text-center
                       bg-blue-600 hover:bg-blue-700
                       px-8 py-4 rounded-full
                       font-semibold
                       shadow-[0_0_30px_rgba(59,130,246,0.4)]
                       transition-all duration-300"
          >
            View Projects
          </a>

          {/* Secondary Actions */}
          <div className="flex gap-8 text-sm text-gray-400">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              download
              className="hover:text-white transition"
            >
              Download Resume
            </a>

            <a
              href=""
              className="hover:text-white transition"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="h-px bg-white/10 my-24 max-w-6xl mx-auto" />

      {/* ================= ABOUT ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`max-w-3xl mx-auto text-center md:text-left ${sectionSpacing}`}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          <span className="text-blue-500">/</span> About
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
        className={`max-w-6xl mx-auto ${sectionSpacing}`}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center md:text-left">
          <span className="text-blue-500">/</span> Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "Java", "TypeScript", "Angular", "React",
            "Spring Boot", "Spring MVC", "Hibernate",
            "MySQL", "MongoDB", "Docker",
            "Git", "Postman", "Maven",
            "IntelliJ", "VS Code", "Vercel"
          ].map((skill) => (
            <div
              key={skill}
              className="text-center py-3 rounded-xl
                         bg-white/5 border border-white/10
                         hover:border-blue-500/50
                         hover:bg-white/10
                         transition duration-300"
            >
              {skill}
            </div>
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
        className={`max-w-6xl mx-auto ${sectionSpacing}`}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center md:text-left">
          <span className="text-blue-500">/</span> Experience
        </h2>

        <TimelinePage2 />
      </motion.section>

      {/* ================= PROJECTS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center md:text-left">
          <span className="text-blue-500">/</span> Projects
        </h2>

        <Projects />
      </motion.section>
    </div>
  );
};

export default Home;
