import { IconMoodUnamused } from "@tabler/icons-react";

export default function SobreMi() {
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
            Sobre mí
          </h2>

          <IconMoodUnamused
            size={40}
          />
        </div>

        <p className="text-white mb-3 text-base">
          Desarrollador Full Stack con experiencia en el desarrollo de aplicaciones web modernas, combinando tecnologías frontend y backend para crear soluciones escalables, seguras y de alto rendimiento. Domino React.js, Node.js y Django REST Framework, además de contar con sólidos conocimientos en Python, JavaScript/TypeScript, HTML5, CSS3 y bases de datos relacionales y no relacionales como PostgreSQL y MongoDB.
        </p>

        <p className="text-white mb-3 text-base">
          He participado en equipos ágiles bajo la metodología Scrum, contribuyendo al diseño, desarrollo e implementación de proyectos de diversa complejidad. Aplico buenas prácticas de arquitectura, control de versiones (Git/GitHub) y optimización del rendimiento tanto en el cliente como en el servidor.
        </p>

        <p className="text-white mb-3 text-base">
          Me apasiona la ciberseguridad y deseo continuar formándome en esta área, orientando mi carrera hacia el desarrollo de software seguro y la protección de sistemas y datos.
        </p>

        <div className="flex flex-col justify-center sm:flex-row gap-10 text-white mt-10">
          <div className="text-center">
            <h3
              className="text-2xl font-bold text-blue-200"
              style={{
                textShadow:
                  "0 0 8px rgba(0, 191, 255, 0.8), 0 0 16px rgba(0, 191, 255, 0.6)",
              }}
            >
              3+
            </h3>
            <p className="text-sm">Proyectos finalizados</p>
            <p className="text-xs opacity-70">
              Trabajando con pasión y dedicación
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}