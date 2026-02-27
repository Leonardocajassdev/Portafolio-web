import { useState, useRef, useEffect } from "react";
import { IconBrandLinkedin, IconBrandGithub, IconMail } from "@tabler/icons-react";
import Leonardo from "../../assets/Leonardo.webp";
import { useTranslation } from "react-i18next";

export default function Inicio() {
  const [githubMenuOpen, setGithubMenuOpen] = useState(false);
  const githubRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (githubRef.current && !githubRef.current.contains(target)) {
        setGithubMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-black flex items-center justify-center px-8 md:px-20 lg:px-40 overflow-hidden pt-24 md:pt-0"
    >
      {/* Fondo azul difuminado */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-blue-500 opacity-45 blur-[90px] rounded-b-full z-0"></div>

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Texto */}
        <div className="text-center md:text-left max-w-3xl flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t("inicio.titulo")}
          </h1>

          <p className="typewriter text-2xl font-bold text-blue-100 mb-5">
            {t("inicio.rol")} <span className="text-gray-200">&lt;/&gt;</span>
          </p>

          <p className="text-lg text-gray-200 mb-6 leading-relaxed">
            {t("inicio.descripcion")}
          </p>

          {/* Botones */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/leonardo-cajas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-white/30 rounded-full bg-white/5 backdrop-blur-sm hover:scale-105 hover:border-blue-400 transition-all duration-300"
            >
              <IconBrandLinkedin size={20} />
            </a>

            {/* GitHub con menú */}
            <div className="relative" ref={githubRef}>
              <button
                onClick={() => setGithubMenuOpen(!githubMenuOpen)}
                className="flex items-center gap-2 px-4 py-2 border border-white/30 rounded-full bg-white/5 backdrop-blur-sm hover:scale-105 hover:border-white transition-all duration-300"
              >
                <IconBrandGithub size={20} />
                <span>+2</span>
              </button>

              {githubMenuOpen && (
                <div className="absolute mt-2 w-44 bg-white/10 backdrop-blur-sm rounded-md shadow-lg border border-white/30 z-20">
                  <a
                    href="https://github.com/Jefer526/GestiAgro/graphs/contributors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm hover:bg-white/20 rounded-t-md"
                  >
                    lfcajass
                  </a>

                  <a
                    href="https://github.com/Leonardocajassdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm hover:bg-white/20 rounded-b-md"
                  >
                    Leonardocajassdev
                  </a>
                </div>
              )}
            </div>

            {/* Gmail */}
            <a
              href="mailto:cajasleonardosilva@gmail.com"
              className="flex items-center gap-2 px-4 py-2 border border-white/30 rounded-full bg-white/5 backdrop-blur-sm hover:scale-105 hover:border-red-400 hover:shadow-[0_0_12px_rgba(239,68,68,0.6)] transition-all duration-300"
              aria-label={t("inicio.correoAria")}
            >
              <IconMail size={20} />
            </a>
          </div>
        </div>

        {/* Imagen (derecha en desktop) */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <img
            src={Leonardo}
            alt="Leonardo"
            className="w-64 sm:w-72 md:w-96 h-auto rounded-full border-2 border-gray-900 shadow-xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}