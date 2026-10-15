// Sección "Experiencia y formación": un texto a la izquierda y una línea de
// tiempo a la derecha. Los datos viven en src/data/experience.ts; para agregar
// o cambiar una etapa, se edita ese archivo, no este.
import SectionTitle from "./SectionTitle"
import { experience } from "../data/experience" // "../" sube de components/ a src/

export default function Experience() {
  return (
    <section id="experiencia" className="experience section">
      <div className="container experience-layout">
        <div>
          <SectionTitle
            number="04"
            title="EXPERIENCIA Y FORMACIÓN"
            subtitle="Aprender. Crear. Evolucionar."
          />
          <p className="experience-intro">
            Cada experiencia es una oportunidad para
            <br /> construir algo mejor.
          </p>
          <span className="code-comment">
            {/* El texto va entre comillas porque "//" en JSX se mostraría como texto de todas formas,
                pero así queda claro que es intencional y no un comentario olvidado. */}
            {"// el aprendizaje nunca se detiene"}
          </span>
        </div>

        <div className="timeline">
          {/* Desestructuración: sacamos los campos del objeto directamente en los parámetros.
              `i` es la posición en la lista: la primera etapa (i === 0) se marca como la actual. */}
          {experience.map(({ date, title, description, type }, i) => (
            <div className={`timeline-item ${i === 0 ? "current" : ""}`} key={title}>
              <span className="timeline-dot" />
              <div className="timeline-meta">
                <span>{date}</span>
                <span className="timeline-type">
                  {type === "experience" ? "EXPERIENCIA" : "FORMACIÓN"}
                </span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
