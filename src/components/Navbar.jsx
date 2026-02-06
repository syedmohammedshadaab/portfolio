import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navItem = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md
                 bg-black/40 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-white"
        >
          <NavLink to="/" className="group">
            Shadaab{" "}
            <span className="text-blue-500 group-hover:text-blue-400 transition">
              .
            </span>
          </NavLink>
        </motion.h1>

        {/* Links */}
        <ul className="flex gap-8 font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "Experience", path: "/about" },
            { name: "Projects", path: "/projects" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <motion.li
              key={item.name}
              variants={navItem}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4, ease: "easeOut" }}
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

                    {/* Animated underline */}
                    <motion.span
                      layout
                      className={`absolute left-0 -bottom-1 h-[2px] w-full rounded-full
                        ${
                          isActive
                            ? "bg-blue-500"
                            : "bg-transparent group-hover:bg-blue-400/60"
                        }`}
                    />
                  </>
                )}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
