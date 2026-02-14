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
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 md:px-8">
          {/* Logo */}
          <NavLink to="/" className="text-xl font-bold text-white">
            Shadaab<span className="text-blue-500">.</span>
          </NavLink>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((item) => (
              <motion.li
                key={item.name}
                variants={navItem}
                initial="hidden"
                animate="visible"
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-gray-300 hover:text-white transition ${
                      isActive ? "text-white font-semibold" : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </motion.li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 h-full w-72 bg-black z-50 shadow-xl flex flex-col pt-20 px-6 gap-6"
            >
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg transition ${
                      isActive
                        ? "text-blue-500 font-semibold"
                        : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
