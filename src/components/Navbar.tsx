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
    handleScroll(); // ejecuta una vez al cargar
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Estilos neon
  const neonStyle = {
    textShadow: "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff",
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
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1
            className="font-extrabold text-4xl text-white"
            style={{ textShadow: "0 0 8px rgba(255, 255, 255, 0.6)" }}
          >
            Codev
          </h1>
        </div>

        {/* Links */}
        <ul className="flex gap-8 font-medium">
          <li>
            <a
              href="#inicio"
              className="text-lg transition"
              style={activeSection === "inicio" ? neonStyle : { color: "#fff" }}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#sobremi"
              className="text-lg transition"
              style={activeSection === "sobremi" ? neonStyle : { color: "#fff" }}
            >
              Sobre mi
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-lg transition"
              style={activeSection === "projects" ? neonStyle : { color: "#fff" }}
            >
              Mis proyectos
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-lg transition"
              style={activeSection === "skills" ? neonStyle : { color: "#fff" }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="text-lg transition"
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
