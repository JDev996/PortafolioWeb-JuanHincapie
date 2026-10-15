// Sección "Proyectos": el encabezado y la cuadrícula de tarjetas.
// Este es el componente PADRE: tiene la lista de proyectos y le pasa cada uno
// a una <ProjectCard />, que es el componente HIJO.
import SectionTitle from "./SectionTitle"
import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section id="proyectos" className="projects section container">
      <div className="projects-heading">
        <SectionTitle
          number="01"
          title="PROYECTOS"
          subtitle="Ideas que se convierten en soluciones."
        />
        <span className="section-aside">
          UNA SELECCIÓN DE MI TRABAJO <span>↙</span>
        </span>
      </div>
      <div className="projects-grid">
        {/* `key` va aquí, en el .map(), y no dentro de ProjectCard: React la
            necesita en el elemento que se repite. `project={p}` es la prop. */}
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  )
}
