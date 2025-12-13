"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TF</span>
            </div>
            <span className="font-semibold text-lg hidden sm:inline">TechFlow!!!!</span>
          </div>

          {/* Links Desktop */}
          <div className="hidden md:flex gap-8">
            <a
              href="#"
              className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-sm font-medium"
            >
              Inicio
            </a>
            <a
              href="#"
              className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-sm font-medium"
            >
              Características
            </a>
            <a
              href="#"
              className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-sm font-medium"
            >
              Precios
            </a>
            <a
              href="#"
              className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-sm font-medium"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-sm font-medium"
            >
              Contacto
            </a>
          </div>

          {/* Botones */}
          <div className="hidden md:flex gap-3">
            <button className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition">
              Iniciar sesión
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition">
              Registrarse
            </button>
          </div>

          {/* Botón Menú Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menú Mobile */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <a
              href="#"
              className="block px-4 py-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition text-sm font-medium"
            >
              Inicio
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition text-sm font-medium"
            >
              Características
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition text-sm font-medium"
            >
              Precios
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition text-sm font-medium"
            >
              Blog
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition text-sm font-medium"
            >
              Contacto
            </a>
            <div className="flex gap-2 pt-2">
              <button className="flex-1 px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition">
                Iniciar sesión
              </button>
              <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition">
                Registrarse
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
