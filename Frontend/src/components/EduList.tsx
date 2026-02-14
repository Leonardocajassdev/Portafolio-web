import React from "react";


interface EducationItem {
  title: string;          // Carrera / Curso
  institution: string;    // Universidad / Plataforma
  date: string;           // Fecha
  description?: string;   // Detalle opcional
  logo?: string;          // Logo de la institución
  website?: string;       // Web oficial (ligada al logo)
}

interface EduListProps {
  education: EducationItem[];
}

const EduList: React.FC<EduListProps> = ({ education }) => {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 hover:scale-103 transition-transform h-full">

      {/* Education list */}
      <div className="flex flex-col divide-y divide-white/10">
        {education.map((item, index) => (
          <div
            key={index}
            className="py-4 first:pt-0 last:pb-0 flex gap-4"
          >
            {/* Timeline indicator */}
            <div className="flex flex-col items-center">
              <span className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
              {index !== education.length - 1 && (
                <span className="w-px flex-1 bg-white/20 mt-2" />
              )}
            </div>

            {item.logo && (
              item.website ? (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visitar sitio oficial de ${item.institution}`}
                  className="shrink-0 w-16 h-16 rounded-xl bg-white/5 border border-white/10
                            flex items-center justify-center overflow-hidden
                            hover:scale-105 hover:border-blue-500 transition
                            cursor-pointer"
                >
                  <img
                    src={item.logo}
                    alt={item.institution}
                    className="w-14 h-14 object-contain opacity-80 hover:opacity-100 transition"
                  />
                </a>
              ) : (
                <div
                  className="shrink-0 w-16 h-16 rounded-xl bg-white/5 border border-white/10
                            flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={item.logo}
                    alt={item.institution}
                    className="w-10 h-10 object-contain opacity-80"
                  />
                </div>
              )
            )}

            {/* Content */}
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-semibold text-gray-100">
                {item.title}
              </h4>

              <span className="text-sm text-gray-300">
                {item.institution}
              </span>

              <span className="text-xs text-gray-400">
                {item.date}
              </span>

              {item.description && (
                <p className="text-base text-gray-300 mt-2 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EduList;
