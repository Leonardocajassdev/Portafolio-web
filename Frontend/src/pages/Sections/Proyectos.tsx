import React, { useState } from "react";
import CardProject from "../../components/ProjectCard";

// Importar imágenes
import GestiAgroP from "../../assets/GestiAgroP.png";
import CanculatorPy from "../../assets/CanculatorPy.png";
import CRUDempleados from "../../assets/CRUDempleados.png";

const Proyectos: React.FC = () => {
  // Estado para controlar si se muestra la descripción completa
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

      {/* Contenedor principal */}
      <div className="max-w-5xl mx-auto p-4 relative z-10">
        <h2
          className="font-extrabold text-xl mb-6 text-white"
          style={{ textShadow: "0 0 8px rgba(255, 255, 255, 0.6)" }}
        >
          Mis proyectos
        </h2>

        <p className="text-white mb-10 text-sm">
          Mis proyectos más importantes en mi trayectoria como desarrollador.
          Cada proyecto ha sido un reto y el resultado de mi dedicación y pasión
          por la programación. Cada uno de ellos me ha ayudado a adquirir nuevas
          habilidades, transformando ideas en realidades digitales. ¡Explora e
          inspírate con mis proyectos!
        </p>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-3 xl:grid-cols-3 gap-8 mt-6">
          {/* Card GestiAgro (ocupa más ancho) */}
          <div className="lg:col-span-1 md:col-span-2">
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
                "Node.js",
                "npm",
                "React",
                "JavaScript",
                "TailwindCSS",
                "Python",
                "PostgreSQL",
                "Git",
                "GitHub",
                "...",
              ]}
              repoLink="https://github.com/Jefer526/GestiAgro"
            />
          </div>

          {/* Card CRUD Empleados */}
          <CardProject
            image={CRUDempleados}
            title="CRUD Empleados"
            description="Aplicación web que permite gestionar empleados mediante un CRUD (crear, leer, actualizar y eliminar). Incluye búsqueda por ID, inicio de sesión y conexión a base de datos en phpMyAdmin (MySQL). El diseño es responsivo con Bootstrap."
            tags={["PHP", "Bootstrap"]}
            repoLink="https://github.com/Leonardocajassdev/CRUD-empleados"
          />

          {/* Card Calculadora Python */}
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
