export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-zinc-100 py-12 px-6 dark:bg-black border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Columna 1: Compañía */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">TechFlow</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Soluciones innovadoras para tu negocio digital. Transformamos ideas en realidad.
            </p>
          </div>

          {/* Columna 2: Producto */}
          <div>
            <h4 className="font-semibold text-white mb-4">Producto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition">
                  Características
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition">
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition">
                  Seguridad
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Recursos */}
          <div>
            <h4 className="font-semibold text-white mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition">
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition">
                  Comunidad
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition">
                  Soporte
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition">
                  Términos
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-400 text-sm">
              © {currentYear} TechFlow Inc. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-zinc-400 hover:text-white transition">
                <span className="text-sm">Twitter</span>
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition">
                <span className="text-sm">LinkedIn</span>
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition">
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
