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

const CardProject: React.FC<CardProjectProps> = ({
  image,
  title,
  description,
  tags,
  label,
  repoLink,
}) => {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 flex flex-col hover:scale-103 transition-transform">
      {/* Imagen con etiqueta e ícono GitHub */}
      <div className="relative mb-4">
        <img src={image} alt={title} className="rounded-xl w-full" />

        {/* Etiqueta */}
        {label && (
          <span className="absolute top-0 left-0 bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-br-xl">
            {label}
          </span>
        )}

        {/* Ícono de GitHub */}
        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 bg-black/60 p-2 rounded-full hover:bg-black hover:scale-110 transition"
            title="Ver repositorio en GitHub"
          >
            <FaGithub className="text-white text-lg" />
          </a>
        )}
      </div>

      {/* Nombre */}
      <h3 className="text-base font-bold mb-3 text-blue-400">{title}</h3>

      {/* Descripción */}
      <p className="text-gray-300 text-sm mb-5">{description}</p>

      {/* Etiquetas */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="border border-white/30 rounded-full bg-white/5 backdrop-blur-sm 
                       hover:scale-105 hover:border-white 
                       px-2 py-0.5 text-[0.625rem]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CardProject;
