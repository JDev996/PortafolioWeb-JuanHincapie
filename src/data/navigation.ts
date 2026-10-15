// Enlaces del menú: `id` es el id de la <section> a la que lleva (#inicio, #proyectos…).
export type NavItem = { label: string; id: string }

export const nav: NavItem[] = [
  { label: "Inicio", id: "inicio" },
  { label: "Proyectos", id: "proyectos" },
  { label: "Sobre mí", id: "sobre-mi" },
  { label: "Experiencia", id: "experiencia" },
  { label: "Contacto", id: "contacto" },
]
