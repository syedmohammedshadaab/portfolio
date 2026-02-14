import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItem = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  /* ===========================
     1️⃣ Prevent background scroll
  ============================ */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  /* ===========================
     2️⃣ Close when clicking outside
  ============================ */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  /* ===========================
     3️⃣ Smooth scroll to top on route change
  ============================ */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-2xl text-white cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black"
            />

            {/* Slide Menu */}
            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm
                         bg-black/95 backdrop-blur-md
                         flex flex-col items-center
                         pt-24 gap-8 shadow-lg"
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
