import { useLocation } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 z-0 transition-all duration-700"
        style={{
          background: isHome
            ? `
              radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
              radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
              radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
            `
            : "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />
        <AppRoutes />
      </div>

    </div>
  );
}

export default App;
