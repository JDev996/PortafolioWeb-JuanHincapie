// Línea de tiempo de "Experiencia y formación", de lo más reciente a lo más antiguo.
export type TimelineItem = {
  date: string
  title: string
  description: string
  type: "experience" | "education" // controla la etiqueta EXPERIENCIA / FORMACIÓN
}

export const experience: TimelineItem[] = [
  {
    date: "2025 – presente",
    title: "Analista TI y Desarrollador Freelance",
    description: "Soporte TI, Microsoft 365 y desarrollo de herramientas internas",
    type: "experience",
  },
  {
    date: "2026 – presente",
    title: "Bootcamp Full-Stack Web",
    description: "BIT, en alianza con la Institución Universitaria Iberoamericana (remoto)",
    type: "education",
  },
  {
    date: "En curso",
    title: "Ingeniería Informática",
    description: "Politécnico Colombiano Jaime Isaza Cadavid",
    type: "education",
  },
  {
    date: "2021 – 2022",
    title: "Encargado de Registro de Escrituras en Línea",
    description: "Notaría Quince de Medellín",
    type: "experience",
  },
]
