// Proyectos que se muestran en la sección "Proyectos".
// Para agregar uno nuevo, basta con añadir un objeto a la lista.
export type Project = {
  name: string
  type: string
  description: string
  tech: string[]
  kind: string
  label: string
  number: string
  code: string // repositorio en GitHub
  demo?: string // opcional: el botón "Demo" solo aparece si existe
}

export const projects: Project[] = [
  {
    name: "Registra",
    type: "Propio",
    description:
      "Trazabilidad de escrituras notariales con máquina de estados, auditoría y respaldos automáticos.",
    tech: ["JavaScript", "Google Apps Script", "Google Workspace"],
    kind: "registra",
    label: "ORDEN EN CADA PROCESO",
    number: "01",
    code: "https://github.com/JDev996/xyz-notaria-trazabilidad",
  },
  {
    name: "JAJ Motos",
    type: "Bootcamp · Líder",
    description: "E-commerce de motos; lideré el equipo y el frontend.",
    tech: ["Angular", "TypeScript", "Bootstrap", "Node.js", "MongoDB"],
    kind: "motos",
    label: "TU PRÓXIMA AVENTURA",
    number: "02",
    code: "https://github.com/JDev996/JAJMotos-Angular",
  },
  {
    name: "TaskRewardPro",
    type: "Académico · Idea propia",
    description: "Gamificación laboral con puntos canjeables por recompensas.",
    tech: ["React", "Vite", "Node.js", "MongoDB"],
    kind: "task",
    label: "CADA META CUENTA",
    number: "03",
    code: "https://github.com/FDev96/TaskRewardPro",
  },
  {
    name: "Sistema de Grabado Láser",
    type: "Académico",
    description: "Gestión de órdenes de trabajo con informes XML.",
    tech: ["Angular", "Express", "MongoDB", "Vercel", "Render"],
    kind: "laser",
    label: "PRECISIÓN, HECHA SISTEMA",
    number: "04",
    code: "https://github.com/FDev96/sistema-grabado-laser",
  },
]
