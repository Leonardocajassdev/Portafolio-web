export default function SobreMi() {
    return (
      <section
        id="sobremi"
        className="relative min-h-screen bg-black pt-20 pb-20 px-8 md:px-20 lg:px-40"
      >
        {/* Fondo azul difuminado centrado */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-blue-500 opacity-20 blur-[120px] rounded-full z-0"></div>
  
        {/* Contenedor centrado igual que otras secciones */}
        <div className="max-w-5xl mx-auto p-4 relative z-10">
          <h2
            className="font-extrabold text-xl mb-6 text-white"
            style={{ textShadow: "0 0 8px rgba(255, 255, 255, 0.6)" }}
          >
            Sobre mí
          </h2>
  
          <p className="text-white mb-10 text-sm">
          Desarrollador Full Stack enfocado en el desarrollo web moderno, con experiencia en la creación de interfaces dinámicas e intuitivas utilizando React.js y Node.js. Cuento con conocimientos en Python, bases de datos relacionales y análisis de datos.
          He trabajado en equipos de desarrollo ágiles (Scrum), participando en proyectos de gran escala y aplicando buenas prácticas de diseño, control de versiones y optimización de rendimiento. Destaco por mi atención al detalle, compromiso con la calidad del código y capacidad para transformar ideas en soluciones funcionales y atractivas.
          </p>
  
          {/* Métricas estilo "About Me" */}
          <div className="flex flex-col justify-center sm:flex-row gap-10 text-white mt-10">
            {/* Proyectos finalizados */}
            <div className="text-center">
              <h3
                className="text-2xl font-bold text-blue-200"
                style={{
                  textShadow:
                    "0 0 8px rgba(0, 191, 255, 0.8), 0 0 16px rgba(0, 191, 255, 0.6)",
                }}
              >
                +3
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
  