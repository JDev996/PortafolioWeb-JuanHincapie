import Icon, { type IconName } from "./Icon"
import SectionTitle from "./SectionTitle"

export default function About() {
  return (
    <section id="sobre-mi" className="about section">
      <div className="container">
        <SectionTitle
          number="02"
          title="SOBRE MÍ"
          subtitle="Más que escribir código."
        />
        <div className="about-layout">
          <div className="about-copy">
            <h3>
              Curioso por naturaleza.
              <br />
              <span>Desarrollador por convicción.</span>
            </h3>
            <p>
              Soy Juan Felipe Hincapié Machado, Desarrollador Frontend
              (Angular) de Medellín, Colombia. Me apasiona construir
              experiencias web que resuelven problemas reales y conectar el
              desarrollo con la automatización y la inteligencia artificial.
            </p>
            <p>
              Mi enfoque es simple: entender el problema, encontrar una
              solución clara y hacer que las cosas funcionen. Siempre
              aprendiendo, siempre construyendo.
            </p>
            <div className="values">
              {([
                ["target", "Autogestión"],
                ["code", "Resolución de problemas"],
                ["chat", "Comunicación asertiva"],
              ] as [IconName, string][]).map(([icon, label]) => (
                <div className="value-card" key={label}>
                  <Icon name={icon} size={23} />
                  <h4>{label}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
