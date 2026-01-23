import React from "react";
import EduList from "../../components/EduList"; // ajusta la ruta si es necesario

// Logos
import LogoUniversidad from "../../assets/Logo_unad.webp";
import logoParroG from "../../assets/logoParroG.webp";

const Education: React.FC = () => {
  return (
    <section
      id="educacion"
      className="relative min-h-screen bg-black pt-20 pb-20 px-8 md:px-20 lg:px-40"
    >
      {/* Fondo azul difuminado izquierda */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[200px] bg-blue-500 opacity-20 blur-[120px] rounded-r-full z-0" />

      {/* Contenedor principal */}
      <div className="max-w-5xl mx-auto p-4 relative z-10">
        <h2
          className="font-extrabold text-xl mb-6 text-white"
          style={{ textShadow: "0 0 8px rgba(255, 255, 255, 0.6)" }}
        >
          Educación
        </h2>

        {/* Lista de educación */}
        <div className="mt-6">
          <EduList
            education={[
              {

                title: "Tecnólogo en Desarrollo de Software",
                institution: "Universidad Nacional Abierta y a Distancia (UNAD)",
                date: "2022 - 2025",
                logo: LogoUniversidad,
                website: "https://www.unad.edu.co",
                description:
                  "Formación tecnológica orientada al desarrollo de software, abarcando programación, ingeniería de software, metodologías de desarrollo y resolución de problemas aplicados a proyectos reales."
              },
              {
                
                title: "Ingeniería de Sistemas",
                institution: "Universidad Nacional Abierta y a Distancia (UNAD)",
                date: "2022 - 2028 (En curso)",
                logo: LogoUniversidad,
                website: "https://www.unad.edu.co",
                description:
                  "Formación en ingeniería de sistemas orientada al diseño, desarrollo y gestión de sistemas de información y software, aplicando principios de ingeniería de software, manejo de datos y seguridad de la información."
              },
              {
        
                title: "Inglés B2 (Avanzado)",
                institution: "ParroGlot Academy",
                date: "2025",
                logo: logoParroG,
                website: "https://www.parroglotlanguageacademy.com/",
                description:
                  "Formación en inglés avanzado, enfocada en comunicación técnica y profesional, con énfasis en comprensión auditiva, expresión oral y redacción técnica."
              }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Education;

