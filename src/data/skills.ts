// Grupos de habilidades de la sección "Habilidades". Deben coincidir con el CV.
export type SkillGroup = {
  number: string // "01", "02"… (solo decorativo)
  title: string
  tags: string[]
}

export const skills: SkillGroup[] = [
  { number: "01", title: "Frontend", tags: ["Angular", "TypeScript", "React", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "Vite"] },
  { number: "02", title: "Backend", tags: ["Node.js", "Express", "API REST", "JWT"] },
  { number: "03", title: "Bases de datos", tags: ["MongoDB", "Mongoose", "PostgreSQL"] },
  { number: "04", title: "Herramientas y Cloud", tags: ["Git", "GitHub", "Vercel", "Render"] },
  { number: "05", title: "Automatización e IA", tags: ["Google Apps Script", "Google Workspace", "Desarrollo asistido por IA"] },
  { number: "06", title: "Soporte TI", tags: ["Microsoft 365", "Microsoft Teams", "Windows", "AnyDesk", "Gestión de respaldos"] },
]
