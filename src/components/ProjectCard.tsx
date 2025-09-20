import React from "react";

interface CardProjectProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  label?: string; // 👈 Texto de la etiqueta (ejemplo: Frontend, Backend, Fullstack)
}

const CardProject: React.FC<CardProjectProps> = ({ image, title, description, tags, label }) => {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col hover:scale-105 transition-transform">
      {/* Imagen con etiqueta */}
      <div className="relative mb-4">
      <img
        src={image}
        alt={title}
        className="rounded-xl w-full"
      />


        {label && (
          <span className="absolute top-0 left-0 bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-br-xl">
            {label}
          </span>
        )}
      </div>

      {/* Nombre */}
      <h3 className="text-2xl font-bold mb-3 text-blue-400">{title}</h3>

      {/* Descripción */}
      <p className="text-gray-300 text-base mb-5">{description}</p>

      {/* Etiquetas */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="border border-white/30 rounded-full bg-white/5 backdrop-blur-sm 
                       hover:scale-105 hover:border-white 
                       px-2 py-0.5 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CardProject;


