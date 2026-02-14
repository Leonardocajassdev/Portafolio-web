import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

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

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // 🔥 Scroll suave con offset
  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -80; // altura del navbar
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    closeMenu();
  };

  const neonStyle = {
    textShadow: "0 0 3px #fff, 0 0 6px #fff, 0 0 8px #fff",
    color: "#fff",
  };

  const links = [
    { id: "inicio", text: "Inicio" },
    { id: "sobremi", text: "Sobre mí" },
    { id: "educacion", text: "Educación" },
    { id: "projects", text: "Mis proyectos" },
    { id: "skills", text: "Skills" },
    { id: "certificados", text: "Certificaciones" },
    { id: "contacto", text: "Contacto" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-sm bg-gray-900/60 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-3 flex items-center justify-between relative z-10">
        
        {/* Logo */}
        <div className="flex items-center">
          <h1
            className="font-extrabold text-2xl text-white cursor-pointer"
            style={{ textShadow: "0 0 3px rgba(255,255,255,0.6)" }}
            onClick={() => handleScrollTo("inicio")}
          >
            Codev
          </h1>
        </div>

        {/* Botón menú móvil */}
        <button
          className="text-white md:hidden z-20"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>

        {/* Links Desktop */}
        <ul className="hidden md:flex gap-6 font-medium">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleScrollTo(link.id)}
                className="text-sm transition-all duration-300 hover:scale-105"
                style={
                  activeSection === link.id
                    ? neonStyle
                    : { color: "#fff" }
                }
              >
                {link.text}
              </button>
            </li>
          ))}
        </ul>

        {/* Menú móvil */}
        <div
          className={`absolute top-0 left-0 w-full h-screen bg-gray-900/95 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className="text-lg font-medium transition-all duration-300 hover:scale-105"
              style={
                activeSection === link.id
                  ? neonStyle
                  : { color: "#fff" }
              }
            >
              {link.text}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;