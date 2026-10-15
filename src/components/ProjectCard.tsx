// Tarjeta de UN proyecto. No importa la lista de proyectos: recibe el proyecto
// que debe mostrar como "prop", que es un dato que le pasa el componente padre
// (Projects.tsx), igual que un atributo en HTML: <ProjectCard project={p} />.
// Así la misma tarjeta sirve para cualquier proyecto.
import Icon from "./Icon"
import ProjectMockup from "./ProjectMockup"
import { external } from "../data/links"
import type { Project } from "../data/projects" // `import type`: solo el tipo, no genera código

// Este tipo describe qué props acepta el componente. Si alguien usa
// <ProjectCard /> sin `project`, TypeScript marca el error antes de compilar.
type ProjectCardProps = {
  project: Project
}

// `{ project }` desestructura las props: es lo mismo que recibir `props`
// y luego usar `props.project` en todos lados.
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      {/* Si el proyecto tiene imagen se muestra la foto; si no, la ilustración.
          BASE_URL antepone "/PortafolioWeb-JuanHincapie/" en GitHub Pages. */}
      {project.image ? (
        <div className="project-image">
          <img
            src={`${import.meta.env.BASE_URL}${project.image}`}
            alt={`Vista de ${project.name}`}
            loading="lazy"
          />
        </div>
      ) : (
        <ProjectMockup kind={project.kind} />
      )}
      <div className="project-body">
        <div className="project-meta">
          <span className="project-type">
            <i />
            {project.type}
          </span>
          <span className="project-number">/{project.number}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="chips">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.code} {...external}>
            <Icon name="github" size={16} />
            Código
          </a>
          {/* Renderizado condicional: si `project.demo` no existe, no se pinta nada */}
          {project.demo && (
            <a href={project.demo} {...external}>
              Demo <Icon name="external" size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
