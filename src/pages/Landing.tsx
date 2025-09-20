import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardProject from "../components/ProjectCard";
import Skills from "./Skills"; // 👈 aquí lo importas
import GestiAgroP from "../assets/GestiAgroP.png";
import CanculatorPy from "../assets/CanculatorPy.png";

import { 
  IconBrandLinkedin, 
  IconBrandGithub, 
  IconMail,
  IconDownload
} from "@tabler/icons-react";

const Landing: React.FC = () => {
  return (
    <div className="scroll-smooth bg-black text-white">
      <Navbar />

      {/* Inicio */}
      <section
        id="about"
        className="relative min-h-screen bg-black flex items-center justify-center px-8 md:px-20 lg:px-40"
      >
        {/* Fondo azul difuminado */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1500px] h-[600px] bg-blue-500 opacity-45 blur-[90px] rounded-b-full z-0"></div>

        {/* Contenedor centrado */}
        <div className="max-w-7xl mx-auto p-4 relative z-10 flex flex-col md:flex-row items-center justify-center gap-16">
          
          {/* Imagen */}
          <div className="flex-shrink-0">
            <img
              src="/assets/profile.jpg"
              alt="Leonardo"
              className="w-60 h-60 rounded-full border-4 border-blue-400"
            />
          </div>

          {/* Texto y botones */}
          <div className="text-center md:text-left max-w-3xl flex flex-col items-center md:items-start">
            <h1 className="text-5xl font-bold mb-4 text-white">
              Hola, soy Leonardo Cajas
            </h1>
            <p className="typewriter text-3xl font-bold text-blue-100 mb-6">
              Software Developer <span className="text-gray-200">&lt;/&gt;</span>
            </p>

            <p className="text-gray-200 mb-8 text-2xl">
              Gracias a mi experiencia como <span className="text-gray-100 font-semibold">full-stack</span>, 
              he desarrollado muchas habilidades que me han permitido crear soluciones a casos reales, 
              basadas en las necesidades de los usuarios mediante diversas tecnologías.
            </p>


            {/* Botones estilo pro */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
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
                href="mailto:cristian.duquew@gmail.com"
                className="flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full bg-white/5 backdrop-blur-sm hover:scale-105 hover:border-white transition-all duration-300"
              >
                <IconMail size={25} />
              </a>

              <a
                href="/assets/CV-Leonardo.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 border border-white/30 rounded-full bg-white/5 backdrop-blur-sm hover:scale-105 hover:border-white transition-all duration-300"
              >
                <IconDownload size={25} />
                Descargar CV
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section
        id="projects"
        className="relative min-h-screen bg-black pt-20 pb-20 px-8 md:px-20 lg:px-40"
      >
        {/* Fondo azul difuminado izquierda */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[500px] bg-blue-500 opacity-20 blur-[120px] rounded-r-full z-0"></div>

        {/* Contenedor centrado igual que otras secciones */}
        <div className="max-w-7xl mx-auto p-4 relative z-10">
          <h2 
          className="font-extrabold text-3xl mb-12 text-white"
          style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.6)' }}
          >
            Mis proyectos
          </h2>
          <p className="text-white mb-10 text-xl">
            Mis proyectos más importantes en mi trayectoria como desarrollador.
            Cada proyecto ha sido un reto y el resultado de mi dedicación y pasión por la programación.
            Cada uno de ellos me ha ayudado a adquirir nuevas habilidades,
            transformando ideas en realidades digitales. ¡Explora e inspírate con mis proyectos!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
            <CardProject
              image={GestiAgroP}
              title="GestiAgro"
              description="Este es un proyecto de prueba para mostrar cómo quedaría la card."
              tags={["React", "TypeScript", "Tailwind"]}
            />
            <CardProject
              image={CanculatorPy}
              title="Canculadora Python"
              description="Segundo proyecto de ejemplo con las mismas características."
              tags={["Node.js", "Express", "MongoDB"]}
            />
            <CardProject
              image={CanculatorPy}
              title="Canculadora Python"
              description="Segundo proyecto de ejemplo con las mismas características."
              tags={["Node.js", "Express", "MongoDB"]}
            />
          </div>
        </div>
      </section>

      
      {/* Skills */}
      <Skills />

      <Footer />
    </div>
  );
};

export default Landing;
