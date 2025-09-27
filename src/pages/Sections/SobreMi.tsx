export default function SobreMi() {
    return (
      <section
        id="sobremi"
        className="relative min-h-screen bg-black pt-20 pb-20 px-8 md:px-20 lg:px-40"
      >
        {/* Fondo azul difuminado centrado */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500 opacity-20 blur-[120px] rounded-full z-0"></div>
  
        {/* Contenedor centrado igual que otras secciones */}
        <div className="max-w-5xl mx-auto p-2 relative z-10 text-left">
          <h2
            className="font-extrabold text-xl mb-6 text-white"
            style={{ textShadow: "0 0 8px rgba(255, 255, 255, 0.6)" }}
          >
            Sobre mí
          </h2>
  
          <p className="text-white mb-10 text-sm">
            Soy un Desarrollador Web Junior con gran entusiasmo por crear
            aplicaciones útiles y dinámicas. Manejo tecnologías como HTML, CSS,
            JavaScript y algunos frameworks modernos, lo que me permite construir
            soluciones prácticas y de calidad. Considero que la tecnología debe
            facilitar la vida de las personas y generar un impacto positivo. Cada
            proyecto que desarrollo es una ocasión para mejorar mis habilidades,
            asumir nuevos retos y aportar valor al mundo digital.
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
                +4
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
  