import React from "react";
import { 
  IconMailFilled, 
  IconPhoneFilled, 
  IconMapPinFilled
} from "@tabler/icons-react";

const Contacto: React.FC = () => {
  return (
    <section
      id="contacto"
      className="relative min-h-screen bg-black pt-20 pb-20 px-8 md:px-20 lg:px-40"
    >
      {/* Fondo azul difuminado centrado */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-blue-500 opacity-20 blur-[120px] rounded-full z-0"></div>

      {/* Contenedor */}
      <div className="max-w-5xl mx-auto p-4 relative z-10 text-left">
        <h2
          className="font-extrabold text-xl mb-6 text-white"
          style={{ textShadow: "0 0 8px rgba(255, 255, 255, 0.6)" }}
        >
          Contacto
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="text-white space-y-6">
            <p className="text-sm mb-10">
              ¡Colaboremos! Siempre estoy abierto a conversar sobre proyectos
              interesantes y nuevas oportunidades.
            </p>

            <div className="space-y-3 text-xs">
              <p className="flex items-center gap-3">
                <span>
                  <IconMailFilled size={20} color="#3B82F6" />
                </span>
                Cajasleonardosilva@gmail.com
              </p>

              <p className="flex items-center gap-3">
                <span>
                  <IconPhoneFilled size={20} color="#22C55E" />
                </span>
                +57 3214641038
              </p>

              <p className="flex items-center gap-3">
                <span>
                  <IconMapPinFilled size={20} color="#EF4444" />
                </span>
                Pitalito-Huila
              </p>
            </div>
          </div>

          {/* Formulario más pequeño */}
          <form className="space-y-4 bg-black/50 p-4 rounded-lg border border-blue-500/40 shadow-md max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 text-xs bg-black border border-blue-500/40 rounded-md text-white focus:outline-none focus:border-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 text-xs bg-black border border-blue-500/40 rounded-md text-white focus:outline-none focus:border-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows={3}
              className="w-full p-2 text-xs bg-black border border-blue-500/40 rounded-md text-white focus:outline-none focus:border-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full p-2 text-xs font-semibold rounded-md border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black transition-all"
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
