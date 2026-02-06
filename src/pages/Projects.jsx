// src/pages/Projects.jsx
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Palace Perfume E-Commerce",
    description: "Full-stack e-commerce platform for perfumes",
    imageUrl: "/images/ecom.png",
    link: "https://your-live-project.com",
    github: {
      frontend: "https://github.com/username/palace-perfume-frontend",
      backend: "https://github.com/username/palace-perfume-backend",
    },
    tech: ["Spring Boot", "Angular", "MySQL", "Stripe"],
  },
  {
    title: "AI Chatbot",
    description: "Spring AI powered conversational assistant",
    imageUrl: "/images/chatbot.png",
    github: {
      repo: "https://github.com/USERNAME/ai-chatbot",
    },
    tech: ["Spring AI", "Java", "REST API", "OpenAI"],
  },
];

/* 🔹 Container animation (runs once) */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* 🔹 Card animation (small movement = smooth) */
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section className="relative w-full px-6 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Projects
        </h1>
        <p className="mt-4 text-gray-400 text-lg">
          A selection of projects showcasing my full-stack & AI expertise
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // ✅ KEY FIX (prevents stutter)
        className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            className="
              rounded-3xl
              bg-gradient-to-br from-[#111827] via-[#0b1220] to-[#020617]
              border border-white/10
              shadow-[0_20px_45px_rgba(0,0,0,0.45)]
              transition-all duration-500
              hover:-translate-y-2
              hover:shadow-[0_30px_70px_rgba(59,130,246,0.25)]
              hover:border-blue-400/30
            "
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
