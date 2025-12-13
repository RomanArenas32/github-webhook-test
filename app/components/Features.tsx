export default function Features() {
  const features = [
    {
      icon: "⚡",
      title: "Rápido y Eficiente",
      description: "Optimizado para máximo rendimiento y velocidad de carga.",
    },
    {
      icon: "🔒",
      title: "Seguro por Defecto",
      description: "Protección integrada con las mejores prácticas de seguridad.",
    },
    {
      icon: "🎨",
      title: "Diseño Moderno",
      description: "Interfaz limpia y atractiva que encanta a los usuarios.",
    },
    {
      icon: "📱",
      title: "Totalmente Responsive",
      description: "Funciona perfectamente en cualquier dispositivo y pantalla.",
    },
    {
      icon: "🚀",
      title: "Fácil Despliegue",
      description: "Integración continua con webhooks automáticos de GitHub.",
    },
    {
      icon: "💡",
      title: "Innovador",
      description: "Tecnología de vanguardia para soluciones del futuro.",
    },
  ];

  return (
    <section className="w-full py-20 px-6 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-white">
            Características Destacadas
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Descubre todo lo que hace que nuestra plataforma sea la mejor opción
            para tu proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/50 hover:shadow-lg hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition shadow-md hover:shadow-xl">
            Ver todas las características
          </button>
        </div>
      </div>
    </section>
  );
}
