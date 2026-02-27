import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { IconLanguageHiragana } from "@tabler/icons-react";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();

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

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -80;
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
    { id: "inicio", text: t("navbar.home") },
    { id: "projects", text: t("navbar.projects") },
    { id: "skills", text: t("navbar.skills") },
    { id: "educacion", text: t("navbar.education") },
    { id: "certificados", text: t("navbar.certs") },
    { id: "sobremi", text: t("navbar.about") },
    { id: "contacto", text: t("navbar.contact") },
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
        <h1
          className="font-extrabold text-2xl text-white cursor-pointer"
          style={{ textShadow: "0 0 3px rgba(255,255,255,0.6)" }}
          onClick={() => handleScrollTo("inicio")}
        >
          Codev
        </h1>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          {links.map((link) => (
            <button
              key={link.id}
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
          ))}

          <button
            onClick={() =>
              i18n.changeLanguage(i18n.language === "es" ? "en" : "es")
            }
            className="ml-4 px-3 py-1.5 rounded-full border border-white/20
                      text-xs tracking-wide text-white
                      bg-white/5 backdrop-blur-sm
                      flex items-center gap-2
                      transition-all duration-300
                      hover:bg-blue-500/20 hover:border-blue-400
                      animate-bounce-slow hover:animate-none"
          >
            <IconLanguageHiragana size={18} />
            {i18n.language === "es" ? "EN" : "ES"}
          </button>
        </div>

        {/* Botón móvil */}
        <button
          className="text-white md:hidden z-20"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>

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

          {/* Botón idioma móvil */}
          <button
            onClick={() =>
              i18n.changeLanguage(i18n.language === "es" ? "en" : "es")
            }
            className="mt-6 px-4 py-2 rounded-full border border-white/20
                       text-sm text-white
                       bg-white/5 backdrop-blur-sm
                       hover:bg-blue-500/20 hover:border-blue-400
                       transition-all duration-300"
          >
            {i18n.language === "es" ? "Switch to English" : "Cambiar a Español"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;