import React, { useState } from "react";
import CardProject from "../../components/ProjectCard";
import { IconFolderCode, IconPinFilled } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

// Importar imágenes
import GestiAgroP from "../../assets/GestiAgroP.webp";
import CanculatorPy from "../../assets/CanculatorPy.webp";
import CRUDempleados from "../../assets/CRUDempleados.webp";


const Proyectos: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const { t } = useTranslation();

  const shortDescription = t("projects.list.0.shortDescription");
  const fullDescription = t("projects.list.0.fullDescription");

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black pt-20 pb-20 px-8 md:px-20 lg:px-40"
    >
      {/* Fondo azul difuminado izquierda */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[200px] bg-blue-500 opacity-20 blur-[120px] rounded-r-full z-0"></div>

      {/* Contenedor principal (Mismo max-w-5xl original) */}
      <div className="max-w-5xl mx-auto p-4 relative z-10">
        {/* Título con ícono */}
        <div className="flex items-center gap-3 mb-6">
          <h2
            className="font-extrabold text-2xl text-white"
            style={{ textShadow: "0 0 8px rgba(255, 255, 255, 0.6)" }}
          >
            {t("projects.title")}
          </h2>

          <IconFolderCode
            size={40}
            color="#239b51"
          />
        </div>

        <p className="text-white mb-10 text-base">
          {t("projects.description")}
        </p>

        {/* LISTA VERTICAL (flex-col)  */}
        <div className="flex flex-col gap-6 mt-6">
          <CardProject
            image={GestiAgroP}
            title={t("projects.list.0.title")}
            description={
              <>
                {showMore ? fullDescription : shortDescription}
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-blue-400 ml-2 hover:underline"
                >
                  {showMore ? t("projects.list.0.showLess") : t("projects.list.0.showMore")}
                </button>
              </>
            }
            tags={[
              "Node.js", "npm", "React", "JavaScript", "TailwindCSS",
              "Python", "PostgreSQL", "Git", "GitHub", "...",
            ]}
            repoLink="https://github.com/Jefer526/GestiAgro"
            label={<IconPinFilled size={30} />}
          />

          <CardProject
            image={CRUDempleados}
            title={t("projects.list.1.title")}
            description={t("projects.list.1.description")}
            tags={["PHP", "Bootstrap"]}
            repoLink="https://github.com/Leonardocajassdev/CRUD-empleados"
          />

          <CardProject
            image={CanculatorPy}
            title={t("projects.list.2.title")}
            description={t("projects.list.2.description")}
            tags={["Python"]}
            repoLink="https://github.com/Leonardocajassdev/Calculadora-python"
          />
        </div>
      </div>
    </section>
  );
};

export default Proyectos;