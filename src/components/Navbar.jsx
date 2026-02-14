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
            name{" "}
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

        {/* Hamburger Icon (Mobile Only) */}
        <div
          className="md:hidden text-2xl text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center gap-6 py-6
                       bg-black/90 backdrop-blur-md"
          >
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 text-lg hover:text-white transition"
              >
                {item.name}
              </NavLink>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
