import CertCard from "../../components/CertCard";
import { IconCertificate } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

// Importar archivo
import BadgeCiberseguridad from "../../assets/BadgeCiberseguridad.webp";

const Cert: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="certificados"
      className="relative min-h-screen bg-black pt-20 pb-20 px-8 md:px-20 lg:px-40"
    >
      {/* Fondo azul difuminado izquierda */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[200px] bg-blue-500 opacity-20 blur-[120px] rounded-r-full z-0"></div>

      {/* Contenedor principal */}
      <div className="max-w-5xl mx-auto p-4 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <h2
            className="font-extrabold text-2xl text-white"
            style={{ textShadow: "0 0 8px rgba(255, 255, 255, 0.6)" }}
          >
            {t("certificados.title")}
          </h2>

          <IconCertificate
            size={40}
            color="#db5c5c"
          />
        </div>
        
        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-3 xl:grid-cols-3 gap-8 mt-6">
          {/* Card GestiAgro (ocupa más ancho) */}
          <div className="lg:col-span-1 md:col-span-2">
            <CertCard
              image={BadgeCiberseguridad}
              title={t("certificados.cards.0.title")}
              issuer={t("certificados.cards.0.issuer")}

              tags={[
                t("certificados.cards.0.tags.0"),
                t("certificados.cards.0.tags.1"),
                t("certificados.cards.0.tags.2"),
                t("certificados.cards.0.tags.3"),
                t("certificados.cards.0.tags.4"),
                t("certificados.cards.0.tags.5"),
                t("certificados.cards.0.tags.6"),
                t("certificados.cards.0.tags.7"),
              ]}
              credentialLink={t("certificados.cards.0.credentialLink")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cert;

