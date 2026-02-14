import React, { useState } from "react";
import CardProject from "../../components/ProjectCard";
import { IconFolderCode, IconPinFilled } from "@tabler/icons-react";

// Importar imágenes
import GestiAgroP from "../../assets/GestiAgroP.webp";
import CanculatorPy from "../../assets/CanculatorPy.webp";
import CRUDempleados from "../../assets/CRUDempleados.webp";

const Proyectos: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const shortDescription =
    "GestiAgro es una aplicación web para la gestión agrícola que integra tres roles principales (administrador, ingeniero agrónomo y mayordomo).";
  const fullDescription =
    "GestiAgro es una aplicación web para la gestión agrícola que integra tres roles principales (administrador, ingeniero agrónomo y mayordomo). Fue desarrollada por tres colaboradores de la misma universidad bajo metodologías ágiles y control de versiones, incorporando principios de seguridad como control de acceso y gestión de cuentas. El sistema se comunica mediante una API, sigue el patrón MVC y utiliza una base de datos en la nube. Este ha sido el proyecto más grande en el que he participado hasta la fecha, representando un gran reto que nos dejó valioso aprendizaje.";

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
            Proyectos
          </h2>

          <IconFolderCode
            size={40}
          />
        </div>

        <p className="text-white mb-10 text-base">
          Mis proyectos más importantes en mi trayectoria como desarrollador.
          Cada proyecto ha sido un reto y el resultado de mi dedicación y pasión
          por la programación. Cada uno de ellos me ha ayudado a adquirir nuevas
          habilidades, transformando ideas en realidades digitales. ¡Explora e
          inspírate con mis proyectos!
        </p>

        {/* LISTA VERTICAL (flex-col)  */}
        <div className="flex flex-col gap-6 mt-6">
          <CardProject
            image={GestiAgroP}
            title="GestiAgro"
            description={
              <>
                {showMore ? fullDescription : shortDescription}
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-blue-400 ml-2 hover:underline"
                >
                  {showMore ? "Ver menos" : "Ver más"}
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
            title="CRUD Empleados"
            description="Aplicación web que permite gestionar empleados mediante un CRUD (crear, leer, actualizar y eliminar). Incluye búsqueda por ID, inicio de sesión y conexión a base de datos en phpMyAdmin (MySQL). El diseño es responsivo con Bootstrap."
            tags={["PHP", "Bootstrap"]}
            repoLink="https://github.com/Leonardocajassdev/CRUD-empleados"
          />

          <CardProject
            image={CanculatorPy}
            title="Calculadora Python"
            description="Calculadora desarrollada en Python con Tkinter, que permite realizar operaciones básicas (+, −, ×, ÷), uso de paréntesis y cálculo de raíces cuadradas. Incluye botones de borrado, limpieza total y una interfaz gráfica adaptable con estilos personalizados."
            tags={["Python"]}
            repoLink="https://github.com/Leonardocajassdev/Calculadora-python"
          />
        </div>
      </div>
    </section>
  );
};

export default Proyectos;