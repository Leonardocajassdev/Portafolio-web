import React from "react";
import EduList from "../../components/EduList"; // ajusta la ruta si es necesario
import { IconSchool } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

// Logos
import LogoUniversidad from "../../assets/Logo_unad.webp";
import logoParroG from "../../assets/logoParroG.webp";

const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="educacion"
      className="relative min-h-screen bg-black pt-20 pb-20 px-8 md:px-20 lg:px-40"
    >
      {/* Fondo azul difuminado izquierda */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[200px] bg-blue-500 opacity-20 blur-[120px] rounded-r-full z-0" />

      {/* Contenedor principal */}
      <div className="max-w-5xl mx-auto p-4 relative z-10">
        {/* Título con ícono */}
        <div className="flex items-center gap-3 mb-6">
          <h2
            className="font-extrabold text-2xl text-white"
            style={{ textShadow: "0 0 8px rgba(255, 255, 255, 0.6)" }}
          >
            {t("educacion.titulo")}
          </h2>

          <IconSchool
            size={40}
            color="#bebe31"
          />
        </div>
        {/* Lista de educación */}
        <div className="mt-6">
          <EduList
            education={[
              {

                title: t("educacion.items.software.title"),
                institution: t("educacion.items.software.institution"),
                date: t("educacion.items.software.date"),
                logo: LogoUniversidad,
                website: "https://www.unad.edu.co",
                description: t("educacion.items.software.description"),},
              {
                
                title: t("educacion.items.ingenieria.title"),
                institution: t("educacion.items.ingenieria.institution"),
                date: t("educacion.items.ingenieria.date"),
                logo: LogoUniversidad,
                website: "https://www.unad.edu.co",
                description: t("educacion.items.ingenieria.description"),
              },
              {
        
                title: t("educacion.items.ingles.title"),
                institution: t("educacion.items.ingles.institution"),
                date: t("educacion.items.ingles.date"),
                logo: logoParroG,
                website: "https://www.parroglotlanguageacademy.com/",
                description: t("educacion.items.ingles.description"),
              }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Education;

