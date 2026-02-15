import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
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
  /* ================= Magnetic Button ================= */
  const buttonRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    x.set(offsetX * 0.2);
    y.set(offsetY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative min-h-screen w-full px-6 sm:px-10 lg:px-16 pt-28 sm:pt-32 pb-24 text-white overflow-hidden">

      {/* ================= Ambient Background Glow ================= */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-250px] right-[-200px] w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />

      {/* ================= HERO ================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-5xl mx-auto text-center md:text-left z-10"
      >
        <TypewriterText />

        {/* Parallax Title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          whileHover={{ y: -5 }}
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
          className="mt-6 text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed"
        >
          Full Stack Developer building scalable applications with{" "}
          <span className="text-blue-300 font-medium">Angular</span> and{" "}
          <span className="text-blue-400 font-medium">Spring Boot</span>.
        </motion.p>

        {/* SOCIAL ICONS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex items-center justify-center md:justify-start gap-5 mt-8"
        >
          {[{ component: <GitHubIcon />, href: "" },
            { component: <LinkedInIcon />, href: "" }].map((item, index) => (
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
              <div className="w-5 h-5 text-gray-300">{item.component}</div>
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
          className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5"
        >
          {/* View Projects */}
          <a
            href="/projects"
            className="w-full sm:w-auto text-center
                       bg-blue-600 hover:bg-blue-700
                       px-8 py-4 rounded-full
                       font-semibold text-base
                       shadow-[0_0_35px_rgba(59,130,246,0.4)]
                       transition-all duration-300"
          >
            View Projects
          </a>

          {/* Ultra Premium Resume Button */}
          <motion.a
            ref={buttonRef}
            href="/resume.pdf"
            download
            style={{ x: springX, y: springY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full sm:w-auto flex items-center justify-center gap-3
                       px-8 py-4 rounded-full font-semibold text-base
                       text-white overflow-hidden group"
          >
            {/* Animated Gradient Border */}
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 animate-[spin_6s_linear_infinite]" />
            <span className="absolute inset-[2px] rounded-full bg-black" />

            {/* Content */}
            <FiDownload className="relative z-10 text-lg" />
            <span className="relative z-10">Download Resume</span>
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Divider */}
      <div className="h-px bg-white/10 my-28 max-w-6xl mx-auto relative z-10" />

      {/* ================= SKILLS ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className={`relative z-10 max-w-6xl mx-auto ${sectionSpacing}`}
      >
        <h2 className="text-3xl font-bold mb-10 text-center md:text-left">
          <span className="text-blue-500">/</span> Skills
        </h2>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {[
            "Java","TypeScript","Angular","Bootstrap","HTML5","CSS3",
            "Spring Boot","Spring MVC","JPA","Hibernate","MySQL",
            "MongoDB","Git","Maven","Postman","Docker",
            "Spring Tool Suite","IntelliJ IDEA",
            "Visual Studio Code","Vercel","Railway","Render","React"
          ].map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ y: -6, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="px-6 py-3 rounded-full
                         bg-white/5 border border-white/10
                         backdrop-blur-md
                         hover:bg-blue-600/20
                         hover:border-blue-500/50
                         hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= EXPERIENCE ================= */}
      <section className={`relative z-10 max-w-6xl mx-auto ${sectionSpacing}`}>
        <h2 className="text-3xl font-bold mb-10 text-center md:text-left">
          <span className="text-blue-500">/</span> Experience
        </h2>
        <TimelinePage2 />
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center md:text-left">
          <span className="text-blue-500">/</span> Projects
        </h2>
        <Projects />
      </section>
    </div>
  );
};

export default Home;
