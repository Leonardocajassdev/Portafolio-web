import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa"; 

interface CertCardProps {
  image: string;          
  title: string;          
  issuer: string;         
  tags: string[];         
  credentialLink?: string;

}

const CertCard: React.FC<CertCardProps> = ({
  image,
  title,
  issuer,
  tags,
  credentialLink,

}) => {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 flex flex-col hover:scale-103 transition-transform h-full">
      {/* Imagen con etiqueta e ícono de Enlace */}
      <div className="relative mb-4">
        {/* Usamos object-cover o contain según prefieras, mantuve el estilo original rounded-xl */}
        <div className="rounded-xl overflow-hidden bg-white/5">
             <img src={image} alt={title} className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition-opacity" />
        </div>

        {/* Etiqueta de Estado (Status) */}
        {status && (
          <span className="absolute top-0 left-0 bg-emerald-600 text-white text-sm font-semibold px-3 py-1 rounded-br-xl shadow-lg">
            {status}
          </span>
        )}

        {/* Ícono de Ver Credencial */}
        {credentialLink && (
          <a
            href={credentialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 bg-black/60 p-2.5 rounded-full hover:bg-blue-600 hover:scale-110 transition backdrop-blur-md border border-white/10"
            title="Ver credencial oficial"
          >
            <FaExternalLinkAlt className="text-white text-sm" />
          </a>
        )}
      </div>

      {/* Nombre de la Certificación */}
      <h3 className="text-base font-bold mb-1 text-blue-400 leading-tight">
        {title}
      </h3>

      {/* Emisor y Fecha (Reemplaza la descripción larga) */}
      <div className="text-gray-300 text-sm mb-5 flex flex-col gap-1">
        <span className="font-medium text-gray-200">{issuer}</span>
      </div>

      {/* Etiquetas / Skills */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="border border-white/30 rounded-full bg-white/5 backdrop-blur-sm 
                       hover:scale-105 hover:border-white hover:bg-white/10 transition-colors
                       px-2 py-0.5 text-[0.625rem] text-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CertCard;