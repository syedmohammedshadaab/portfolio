import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
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

const sectionSpacing = "mb-36";

const Home = () => {
  return (
    <div className="min-h-screen w-full px-6 sm:px-10 lg:px-16 pt-32 pb-24 text-white relative">

      {/* ================= HERO ================= */}
      <section className="max-w-5xl mx-auto text-center md:text-left">

        <TypewriterText />

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
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
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto md:mx-0 leading-relaxed"
        >
          Full Stack Developer building scalable applications with{" "}
          <span className="text-blue-400 font-medium">Angular</span> and{" "}
          <span className="text-indigo-400 font-medium">Spring Boot</span>.
        </motion.p>

        {/* SOCIAL ICONS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex items-center justify-center md:justify-start gap-5 mt-10"
        >
          {[ 
            { component: <GitHubIcon />, href: "" },
            { component: <LinkedInIcon />, href: "" }
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center
                         w-11 h-11 rounded-full
                         bg-white/5 border border-white/10
                         hover:bg-blue-600/20
                         hover:border-blue-500/40
                         transition duration-300"
            >
              <div className="w-5 h-5 text-gray-300">
                {item.component}
              </div>
            </a>
          ))}

          <div className="flex items-center justify-center
                          w-11 h-11 rounded-full
                          bg-white/5 border border-white/10
                          hover:bg-blue-600/20
                          hover:border-blue-500/40
                          transition duration-300">
            <EmailIcon email="" />
          </div>
        </motion.div>

        {/* CTA SECTION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 flex flex-col md:flex-row md:items-center gap-6"
        >
          {/* View Projects */}
          <a
            href="/projects"
            className="bg-blue-600 hover:bg-blue-700
                       px-8 py-4 rounded-full
                       font-semibold text-base
                       shadow-[0_0_35px_rgba(59,130,246,0.4)]
                       transition-all duration-300"
          >
            View Projects
          </a>

          {/* Premium Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="group relative inline-flex items-center gap-3
                       px-8 py-4 rounded-full font-semibold text-base
                       border border-blue-500 text-blue-400
                       overflow-hidden
                       transition-all duration-500
                       hover:text-white
                       hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
          >
            {/* Glow background */}
            <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition duration-500" />

            <FiDownload className="relative z-10 text-lg group-hover:translate-y-0.5 transition duration-300" />
            <span className="relative z-10">Download Resume</span>
          </a>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="h-px bg-white/10 my-28 max-w-6xl mx-auto" />

      {/* ================= SKILLS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className={`max-w-6xl mx-auto ${sectionSpacing}`}
      >
        <h2 className="text-3xl font-bold mb-10 text-center md:text-left">
          <span className="text-blue-500">/</span> Skills
        </h2>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {[
            "Java", "TypeScript", "Angular", "React",
            "Spring Boot", "Hibernate", "MySQL",
            "MongoDB", "Docker", "Git",
            "Postman", "IntelliJ", "VS Code", "Vercel"
          ].map((skill) => (
            <div
              key={skill}
              className="px-6 py-3 rounded-full
                         bg-white/5 border border-white/10
                         backdrop-blur-md
                         transition-all duration-300
                         hover:-translate-y-1
                         hover:scale-105
                         hover:bg-blue-600/20
                         hover:border-blue-500/50
                         hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.section>

      {/* ================= EXPERIENCE ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className={`max-w-6xl mx-auto ${sectionSpacing}`}
      >
        <h2 className="text-3xl font-bold mb-10 text-center md:text-left">
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
        <h2 className="text-3xl font-bold mb-10 text-center md:text-left">
          <span className="text-blue-500">/</span> Projects
        </h2>

        <Projects />
      </motion.section>
    </div>
  );
};

export default Home;
