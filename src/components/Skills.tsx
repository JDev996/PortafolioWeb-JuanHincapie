// EJEMPLO RESUELTO — usa este archivo como modelo para extraer las demás secciones.
//
// El patrón tiene 3 partes:
//  1. Los DATOS viven en src/data/ (aquí: skills.ts). El componente no "sabe" las habilidades.
//  2. El componente IMPORTA lo que necesita: datos, otros componentes y tipos.
//  3. Recorre los datos con .map() y devuelve JSX. Cada elemento de la lista lleva `key`
//     (un valor único) para que React sepa qué fila cambió al volver a pintar.
import Icon from "./Icon"
import SectionTitle from "./SectionTitle"
import { skills } from "../data/skills"

export default function Skills() {
  return (
    <section id="habilidades" className="skills section container">
      <SectionTitle number="03" title="HABILIDADES" subtitle="Mi caja de herramientas." />
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-row" key={group.number}>
            <span className="skill-number">{group.number}</span>
            <h3>{group.title}</h3>
            <div className="chips">
              {group.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <Icon name="code" size={19} />
          </div>
        ))}
      </div>
    </section>
  )
}
