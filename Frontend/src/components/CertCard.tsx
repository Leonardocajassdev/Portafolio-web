import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface CertCardProps {
  image: string;
  title: string;
  issuer: string;
  tags: string[];
  credentialLink?: string;
  status?: string; // 🔥 agregado
}

const CertCard: React.FC<CertCardProps> = ({
  image,
  title,
  issuer,
  tags,
  credentialLink,
  status,
}) => {
  return (
    <div
      className="bg-gray-900 rounded-3xl p-6 flex flex-col h-full
                 border border-white/5
                 hover:shadow-2xl hover:shadow-blue-900/20
                 hover:-translate-y-2 hover:scale-[1.02]
                 transition-all duration-300 ease-out"
    >
      {/* Imagen */}
      <div className="relative mb-4">
        <div className="rounded-xl overflow-hidden bg-white/5">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover opacity-90 
                       hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Status */}
        {status && (
          <span className="absolute top-0 left-0 bg-emerald-600 text-white text-sm font-semibold px-3 py-1 rounded-br-xl shadow-lg">
            {status}
          </span>
        )}

        {/* Link */}
        {credentialLink && (
          <a
            href={credentialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 bg-black/60 p-2.5 rounded-full
                       hover:bg-blue-600 hover:scale-110
                       transition-all duration-300
                       backdrop-blur-md border border-white/10"
            title="Ver credencial oficial"
          >
            <FaExternalLinkAlt className="text-white text-sm" />
          </a>
        )}
      </div>

      {/* Título */}
      <h3 className="text-lg font-bold mb-1 text-blue-400 leading-tight">
        {title}
      </h3>

      {/* Issuer */}
      <div className="text-gray-300 text-base mb-5 flex flex-col gap-1">
        <span className="font-medium text-gray-200">{issuer}</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="border border-white/30 rounded-full bg-white/5 backdrop-blur-sm
                       hover:scale-105 hover:border-white hover:bg-white/10
                       transition-all duration-300
                       px-2 py-0.5 text-xs text-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CertCard;