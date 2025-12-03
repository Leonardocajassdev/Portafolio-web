import React from "react";
import { FaGithub } from "react-icons/fa";

interface CardProjectProps {
  image: string;
  title: string;
  description: React.ReactNode;
  tags: string[];
  label?: string;
  repoLink?: string;
}

const ProjectCard: React.FC<CardProjectProps> = ({
  image,
  title,
  description,
  tags,
  label,
  repoLink,
}) => {
  return (
    <article className="bg-gray-900 rounded-3xl border border-white/5 overflow-hidden 
                        flex flex-col md:flex-row gap-0 
                        hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300">

      {/* IMAGEN — FONDO DIFUMINADO + IMAGEN PRINCIPAL SIN BORDES */}
      <div className="relative w-full md:w-4/12 lg:w-1/3 shrink-0 overflow-hidden flex items-center justify-center">

        {/* Fondo difuminado */}
        <img
          src={image}
          alt="blurred-background"
          className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-110"
        />

        {/* Imagen principal sin recortes ni bordes */}
        <img
          src={image}
          alt={title}
          className="relative z-10 max-w-full max-h-full object-contain"
        />

        {/* Overlay suave */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Label */}
        {label && (
          <span className="absolute top-3 left-3 bg-blue-600/90 text-white text-xs font-bold 
                           px-3 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-sm shadow-md z-20">
            {label}
          </span>
        )}

        {/* Botón GitHub */}
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 bg-gray-900/80 p-2.5 rounded-full 
                       hover:bg-blue-500 transition-colors backdrop-blur-sm text-white shadow-md z-20"
          >
            <FaGithub className="text-lg" />
          </a>
        )}
      </div>

      {/* CONTENIDO */}
      <div className="flex flex-col justify-between p-6 md:p-8 flex-1">

        <div>
          <h3 className="text-xl font-bold text-white mb-3">
            {title}
          </h3>

          <div className="text-gray-300 text-sm leading-relaxed mb-6">
            {description}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium px-3 py-1 rounded-full 
                         bg-blue-900/40 text-blue-200 border border-blue-800/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

