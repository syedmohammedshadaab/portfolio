import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItem = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md
                 bg-black/40 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-4">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-white"
        >
          <NavLink to="/" className="group">
            Name{" "}
            <span className="text-blue-500 group-hover:text-blue-400 transition">
              .
            </span>
          </NavLink>
        </motion.h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((item) => (
            <motion.li
              key={item.name}
              variants={navItem}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4 }}
            >
              <NavLink
                to={item.path}
                className="relative text-gray-300 hover:text-white transition"
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`transition ${
                        isActive ? "text-white font-semibold" : ""
                      }`}
                    >
                      {item.name}
                    </span>
                    <motion.span
                      layout
                      className={`absolute left-0 -bottom-1 h-[2px] w-full rounded-full
                        ${isActive ? "bg-blue-500" : "bg-transparent"}`}
                    />
                  </>
                )}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-2xl text-white cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Modern Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm
                         bg-gradient-to-b from-black via-zinc-900 to-black
                         border-l border-white/10
                         shadow-2xl
                         flex flex-col justify-center items-center gap-10"
            >
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `text-2xl font-medium transition-all duration-300 ${
                        isActive
                          ? "text-blue-500 scale-110"
                          : "text-gray-300 hover:text-white hover:scale-105"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
