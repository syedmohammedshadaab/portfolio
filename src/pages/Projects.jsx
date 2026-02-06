import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Palace Perfume E-Commerce",
    description: "Full-stack e-commerce platform for perfumes",
    imageUrl: "/images/ecom.png",
    link: "https://your-live-project.com",
    github: {
      frontend: "",
      backend: "",
    },
    tech: ["Spring Boot", "Angular", "MySQL"],
  },
  {
    title: "AI Chatbot",
    description: "Spring AI powered conversational assistant",
    imageUrl: "/images/chatbot.png",
    github: {
      repo: "",
    },
    tech: ["Spring AI", "Java", "REST API", "OpenAI"],
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section className="relative w-full px-4 sm:px-6 py-20 sm:py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-14 sm:mb-20"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          Projects
        </h1>
        <p className="mt-3 text-gray-400 text-base sm:text-lg">
          A selection of projects showcasing my full-stack & AI expertise
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          max-w-7xl mx-auto
          grid gap-6 sm:gap-8 lg:gap-10
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            className="
              rounded-2xl sm:rounded-3xl
              bg-gradient-to-br from-[#111827] via-[#0b1220] to-[#020617]
              border border-white/10
              shadow-[0_15px_35px_rgba(0,0,0,0.4)]
              transition-all duration-300
              sm:hover:-translate-y-2
              sm:hover:shadow-[0_25px_60px_rgba(59,130,246,0.25)]
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