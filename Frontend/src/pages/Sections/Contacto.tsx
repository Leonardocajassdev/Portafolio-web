import React from "react";
import { IconMailFilled, IconMessageDots } from "@tabler/icons-react";

const Contacto: React.FC = () => {
  return (
    <section
      id="contacto"
      className="relative min-h-screen bg-black pt-20 pb-20 px-8 md:px-20 lg:px-40"
    >
      {/* Fondo azul difuminado */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-blue-500 opacity-20 blur-[120px] rounded-full z-0"></div>

      <div className="max-w-5xl mx-auto p-4 relative z-10 text-left">
        <div className="flex items-center gap-3 mb-6">
          <h2
            className="font-extrabold text-2xl text-white"
            style={{ textShadow: "0 0 8px rgba(255, 255, 255, 0.6)" }}
          >
            Contacto
          </h2>

          <IconMessageDots
            size={40}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="text-white space-y-6">
            <p className="text-base mb-10">
              ¡Colaboremos! Siempre estoy abierto a conversar sobre proyectos
              interesantes y nuevas oportunidades.
            </p>

            <div className="space-y-3 text-base">
              <p className="flex items-center gap-3">
                <a
                  href="mailto:cajasleonardosilva@gmail.com"
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <IconMailFilled size={30} color="#3B82F6" />
                </a>
                cajasleonardosilva@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;