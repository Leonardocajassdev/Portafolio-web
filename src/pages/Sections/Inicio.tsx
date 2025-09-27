import { IconBrandLinkedin, IconBrandGithub, IconDownload } from "@tabler/icons-react";

export default function Inicio() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-black flex items-center justify-center px-8 md:px-20 lg:px-40"
    >
      {/* Fondo azul difuminado */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-blue-500 opacity-45 blur-[90px] rounded-b-full z-0"></div>

      {/* Contenedor centrado */}
      <div className="max-w-5xl mx-auto p-4 relative z-10 flex flex-col md:flex-row items-center justify-center gap-10">
        
        {/* Imagen */}
        <div className="flex-shrink-0">
          <img
            src="/assets/profile.jpg"
            alt="Leonardo"
            className="w-50 h-50 rounded-full border-4 border-blue-500"
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
            Gracias a mi experiencia como{" "}
            <span className="text-gray-100 font-semibold">full-stack</span>, he
            desarrollado muchas habilidades que me han permitido crear soluciones a
            casos reales, basadas en las necesidades de los usuarios mediante diversas
            tecnologías.
          </p>

          {/* Botones estilo pro */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/tu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-0 border border-white/30 rounded-full bg-white/5 backdrop-blur-sm hover:scale-105 hover:border-white transition-all duration-300"
            >
              <IconBrandLinkedin size={20} />
            </a>

            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 border border-white/30 rounded-full bg-white/5 backdrop-blur-sm hover:scale-105 hover:border-white transition-all duration-300"
            >
              <IconBrandGithub size={20} />
            </a>

            <a
              href="/assets/CV-Leonardo.pdf"
              download
              className="flex items-center gap-2 px-3 py-0  text-xs border border-white/30 rounded-full bg-white/5 backdrop-blur-sm hover:scale-105 hover:border-white transition-all duration-300"
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
