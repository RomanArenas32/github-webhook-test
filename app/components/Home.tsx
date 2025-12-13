export default function Home() {
  return (
    <div className="w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white/80 p-10 shadow-lg backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
          Webhook test
        </p>
        <h1 className="text-3xl font-semibold leading-tight">
          Probando el hook de GitHub
        </h1>
        <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-200">
          Si ves este mensaje, el despliegue se actualizó correctamente. Aquí
          vamos a confirmar que el webhook responde a los cambios en
          <code className="mx-1 rounded bg-zinc-100 px-1.5 py-0.5 text-sm font-mono text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100">
            app/page.tsx
          </code>
          .
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <span className="rounded-full bg-emerald-100 px-3 py-1 font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200">
            OTRO Cambio simple
          </span>
          <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-800 dark:bg-blue-900/40 dark:text-blue-200">
            Confirmar webhook
          </span>
          <span className="rounded-full bg-amber-100 px-3 py-1 font-medium text-amber-800 dark:bg-amber-900/40 dark:text-amber-100">
            Branch: feature/home
          </span>
        </div>
        <p className="text-base text-zinc-600 dark:text-zinc-300">
          Edita este contenido, haz commit y push. Si todo va bien, la acción
          configurada en GitHub debería ejecutarse y reflejar este cambio.
        </p>
        <div className="flex gap-3 pt-4">
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">
            Explorar
          </button>
          <button className="px-6 py-2 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium rounded-lg transition">
            Aprender más
          </button>
        </div>
      </div>
    </div>
  );
}
