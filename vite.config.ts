// Configuración de Vite: la herramienta que levanta el servidor de desarrollo
// (pnpm dev) y empaqueta el proyecto para publicarlo (pnpm build).
// Docs: https://vite.dev/config/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Entiende JSX/TSX y recarga los componentes sin perder el estado
import tailwindcss from '@tailwindcss/vite' // Procesa las clases de Tailwind CSS v4
import path from 'node:path'

// Nombre del repositorio en GitHub. GitHub Pages publica los proyectos en
// https://jdev996.github.io/<repositorio>/, así que en producción todas las
// rutas (JS, CSS, imágenes) deben empezar por /<repositorio>/.
const REPO = 'PortafolioWeb-JuanHincapie'

// `command` vale 'build' con `pnpm build` y 'serve' con `pnpm dev` y `pnpm preview`;
// `isPreview` es true solo con `pnpm preview` (que sirve lo ya compilado en dist/).
export default defineConfig(({ command, isPreview }) => ({
  // Con `pnpm dev` la página vive en la raíz (http://localhost:5173/).
  // Al compilar y al previsualizar el build, bajo /PortafolioWeb-JuanHincapie/,
  // igual que en GitHub Pages.
  base: command === 'build' || isPreview ? `/${REPO}/` : '/',

  plugins: [react(), tailwindcss()],

  resolve: {
    // Permite importar con '@/...' en vez de rutas largas como '../../components'.
    alias: { '@': path.resolve(__dirname, './src') },
  },
}))
