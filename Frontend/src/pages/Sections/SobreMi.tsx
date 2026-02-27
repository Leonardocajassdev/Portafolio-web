import { IconMoodUnamused } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

export default function SobreMi() {
  const { t } = useTranslation();

  return (
    <section
      id="sobremi"
      className="relative min-h-screen bg-black pt-20 pb-20 px-8 md:px-20 lg:px-40"
    >
      {/* Fondo azul difuminado centrado */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-blue-500 opacity-20 blur-[120px] rounded-full z-0"></div>

      <div className="max-w-5xl mx-auto p-4 relative z-10">
        
        {/* Título con ícono */}
        <div className="flex items-center gap-3 mb-6">
          <h2
            className="font-extrabold text-2xl text-white"
            style={{ textShadow: "0 0 8px rgba(255, 255, 255, 0.6)" }}
          >
            {t("sobremi.titulo")}
          </h2>

          <IconMoodUnamused size={40} />
        </div>

        <p className="text-white mb-3 text-base">
          {t("sobremi.parrafo1")}
        </p>

        <p className="text-white mb-3 text-base">
          {t("sobremi.parrafo2")}
        </p>

        <p className="text-white mb-3 text-base">
          {t("sobremi.parrafo3")}
        </p>

        {/* Stats */}
        <div className="flex flex-col justify-center sm:flex-row gap-10 text-white mt-10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-200 animate-neon">
              3+
            </h3>

            <p className="text-sm">
              {t("sobremi.stats.proyectos")}
            </p>

            <p className="text-xs opacity-70">
              {t("sobremi.stats.extra")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}