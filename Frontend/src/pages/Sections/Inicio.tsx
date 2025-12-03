import { useState, useRef, useEffect } from "react";
import { IconBrandLinkedin, IconBrandGithub, IconDownload } from "@tabler/icons-react";
import Leonardo from "../../assets/Leonardo.jpeg";

export default function Inicio() {
  const [githubMenuOpen, setGithubMenuOpen] = useState(false);
  const githubRef = useRef<HTMLDivElement | null>(null);

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
      className="relative min-h-screen bg-black flex items-center justify-center px-8 md:px-20 lg:px-40"
    >
      {/* Fondo azul difuminado */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-blue-500 opacity-45 blur-[90px] rounded-b-full z-0"></div>

        <div className="max-w-5xl mx-auto p-4 relative z-10 flex flex-col md:flex-row items-center justify-center gap-10">
        
          {/* Imagen */}
          <div className="flex-shrink-0">
            <img
              src={Leonardo}
              alt="Leonardo"
              className="w-50 h-50 rounded-full border-2 border-gray-900"
            />
          </div>

        {/* Texto y botones */}
        <div className="text-center md:text-left max-w-3xl flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Hola, soy Leonardo Cajas
          </h1>
          <p className="typewriter text-xl font-bold text-blue-100 mb-5">
            Software Developer <span className="text-gray-200">&lt;/&gt;</span>
          </p>
          

          <p className="text-gray-200 mb-5">
          Apasionado por crear soluciones digitales innovadoras.
          Con experiencia en desarrollo, diseño web y backend, construyendo aplicaciones funcionales, atractivas y centradas en el usuario.
          </p>



          {/* Botones */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/leonardo-cajas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-0 border border-white/30 rounded-full bg-white/5 backdrop-blur-sm hover:scale-105 hover:border-white transition-all duration-300"
            >
              <IconBrandLinkedin size={20} />
            </a>

            {/* GitHub con menú desplegable */}
            <div className="relative" ref={githubRef}>
              <button
                onClick={() => setGithubMenuOpen(!githubMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 border border-white/30 rounded-full bg-white/5 backdrop-blur-sm hover:scale-105 hover:border-white transition-all duration-300"
              >
                <IconBrandGithub size={20} />
                <span>+2</span>
              </button>

              {githubMenuOpen && (
                <div className="absolute mt-2 w-40 bg-white/10 backdrop-blur-sm rounded-md shadow-lg border border-white/30 z-10">
                  <a
                    href="https://github.com/Jefer526/GestiAgro/graphs/contributors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm hover:bg-white/20 rounded-b-md"
                  >
                    lfcajass
                  </a>
                  <a
                    href="https://github.com/Leonardocajassdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm hover:bg-white/20 rounded-t-md"
                  >
                    Leonardocajassdev
                  </a>
                  
                </div>
              )}
            </div>

            {/* Descargar CV */}
            <a
              href="/CV-Leonardo-Cajas.pdf"
              download
              className="flex items-center gap-2 px-3 py-0 text-xs border border-white/30 rounded-full bg-white/5 backdrop-blur-sm hover:scale-105 hover:border-white transition-all duration-300"
            >
              <IconDownload size={20} />
              Descargar CV
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
