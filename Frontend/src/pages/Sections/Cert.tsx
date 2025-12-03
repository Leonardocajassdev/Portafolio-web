import CertCard from "../../components/CertCard";

// Importar archivo
import BadgeCiberseguridad from "../../assets/BadgeCiberseguridad.png";

const Cert: React.FC = () => {

  return (
    <section
      id="certificados"
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
          Certificaciones
        </h2>
        
        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-3 xl:grid-cols-3 gap-8 mt-6">
          {/* Card GestiAgro (ocupa más ancho) */}
          <div className="lg:col-span-1 md:col-span-2">
            <CertCard
              image={BadgeCiberseguridad}
              title="Ciberseguridad de Google"
              issuer="Coursera"

              tags={[
                "Ciberseguridad",
                "Gestión de Riesgos",
                "Seguridad de Redes",
                "Análisis de Amenazas",
                "Detección y Respuesta",
                "Linux/SQL",
                "Python",
                "Automatización",
              ]}
              credentialLink="https://www.coursera.org/account/accomplishments/specialization/ASFNLU19M7XO"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Cert;

