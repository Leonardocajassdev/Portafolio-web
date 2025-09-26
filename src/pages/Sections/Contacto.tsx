import React from "react";
import { 
  IconMailFilled, 
  IconPhoneFilled, 
  IconMapPinFilled, 
  IconBrandLinkedin, 
  IconBrandGithub, 
  IconBrandWhatsapp 
} from "@tabler/icons-react";

const Contacto: React.FC = () => {
  return (
    <section
      id="contacto"
      className="relative min-h-screen bg-black pt-20 pb-20 px-8 md:px-20 lg:px-40"
    >
      {/* Fondo azul difuminado centrado */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-blue-500 opacity-20 blur-[120px] rounded-full z-0"></div>

      {/* Contenedor */}
      <div className="max-w-7xl mx-auto p-4 relative z-10 text-left">
        <h2
          className="font-extrabold text-3xl mb-10 text-white"
          style={{ textShadow: "0 0 8px rgba(255, 255, 255, 0.6)" }}
        >
          Contacto
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="text-white space-y-6">
            <p className="text-xl mb-10">
              ¡Colaboremos! Siempre estoy abierto a conversar sobre proyectos
              interesantes y nuevas oportunidades.
            </p>

            <div className="space-y-3">
              <p className="flex items-center gap-3">
                <span>
                  <IconMailFilled size={20} color="#3B82F6" />
                </span>
                leonardo@example.com
              </p>

              <p className="flex items-center gap-3">
                <span>
                  <IconPhoneFilled size={20} color="#22C55E" />
                </span>
                +57 300-000-0000
              </p>

              <p className="flex items-center gap-3">
                <span>
                  <IconMapPinFilled size={20} color="#EF4444" />
                </span>
                Colombia
              </p>
            </div>

            {/* Íconos sociales */}
            <div className="flex gap-6 mt-6">
              <a
                href="https://www.linkedin.com/in/tu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full bg-white/5 backdrop-blur-sm hover:scale-105 hover:border-white transition-all duration-300"
              >
                <IconBrandLinkedin size={25} />
              </a>

              <a
                href="https://github.com/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full bg-white/5 backdrop-blur-sm hover:scale-105 hover:border-white transition-all duration-300"
              >
                <IconBrandGithub size={25} />
              </a>

              <a
                href="https://wa.me/573000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full bg-white/5 backdrop-blur-sm hover:scale-105 hover:border-white transition-all duration-300"
              >
                <IconBrandWhatsapp size={25} />
              </a>
            </div>
          </div>

          {/* Formulario */}
          <form className="space-y-6 bg-black/50 p-6 rounded-xl border border-blue-500/40 shadow-lg">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-black border border-blue-500/40 rounded-lg text-white focus:outline-none focus:border-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-black border border-blue-500/40 rounded-lg text-white focus:outline-none focus:border-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 bg-black border border-blue-500/40 rounded-lg text-white focus:outline-none focus:border-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 font-bold rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black transition-all"
            >
              ENVIAR MENSAJE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
