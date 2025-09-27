import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detectar sección activa
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const neonStyle = {
    textShadow: "0 0 3px #fff, 0 0 6px #fff, 0 0 8px #fff",
    color: "#fff",
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-500 ${
        isScrolled
          ? "backdrop-blur-sm bg-gray-900/50 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-16 py-3 flex items-center justify-between relative z-10">
        {/* Logo */}
        <div className="flex items-center">
          <h1
            className="font-extrabold text-2xl text-white"
            style={{ textShadow: "0 0 3px rgba(255, 255, 255, 0.6)" }}
          >
            Codev
          </h1>
        </div>

        {/* Links */}
        <ul className="flex gap-5 font-medium">
          <li>
            <a
              href="#inicio"
              className="text-xs transition"
              style={activeSection === "inicio" ? neonStyle : { color: "#fff" }}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#sobremi"
              className="text-xs transition"
              style={activeSection === "sobremi" ? neonStyle : { color: "#fff" }}
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-xs transition"
              style={activeSection === "projects" ? neonStyle : { color: "#fff" }}
            >
              Mis proyectos
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-xs transition"
              style={activeSection === "skills" ? neonStyle : { color: "#fff" }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="text-xs transition"
              style={activeSection === "contacto" ? neonStyle : { color: "#fff" }}
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
