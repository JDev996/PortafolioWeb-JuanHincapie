import SpaceBackground from "./SpaceBackground"
import Icon from "./Icon"
import { LINKS, external } from "../data/links"

// Los archivos de /public se sirven tal cual. BASE_URL vale "/" con `pnpm dev`
// y "/PortafolioWeb-JuanHincapie/" en GitHub Pages, así la ruta sirve en ambos.
const portrait = `${import.meta.env.BASE_URL}img/juan-felipe.webp`

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <SpaceBackground />
      <div className="hero-main container">
        <div className="hero-copy">
          <div className="availability">
            <span /> DISPONIBLE PARA NUEVOS RETOS
          </div>
          <p className="intro">
            Hola, soy <span>Juan Felipe</span>{" "}
            <span className="hello-mark" aria-hidden="true">
              <Icon name="spark" size={20} />
            </span>
          </p>
          <h1>
            Desarrollador
            <br />
            Frontend que
            <br />
            <span>automatiza</span>
            <br className="mobile-break" /> procesos reales
            <span className="heading-dot">.</span>
          </h1>
          <p className="hero-description">
            Transformo ideas en experiencias web y procesos
            <br className="desktop-break" /> inteligentes con Angular,
            automatización e IA.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#proyectos">
              Ver proyectos <Icon name="arrow" />
            </a>
            <a className="button outline" href="#contacto">
              Contactar <Icon name="mail" size={16} />
            </a>
          </div>
          <div className="hero-socials">
            <a href={LINKS.github} aria-label="GitHub" {...external}>
              <Icon name="github" size={20} />
            </a>
            <a href={LINKS.linkedin} aria-label="LinkedIn" {...external}>
              <Icon name="linkedin" size={20} />
            </a>
            <span className="social-divider" />
            <span>
              <Icon name="pin" size={14} /> Medellín, Colombia
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <span className="orbit-label label-top">
            <span /> FRONTEND DEVELOPER
          </span>
          <div className="portrait-wrap">
            <img src={portrait} alt="Juan Felipe Hincapié Machado" />
            <div className="portrait-shade" />
          </div>
          <div className="floating-tag angular-tag">
            <span className="angular-icon">A</span> Angular
          </div>
          <div className="floating-tag ai-tag">
            <Icon name="spark" size={16} /> Automatización + IA
          </div>
          <div className="code-window">
            <div className="code-top">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>
              <span>mi-stack.ts</span>
              <Icon name="code" size={13} />
            </div>
            <code>
              <span className="line-number">1</span>
              <span className="code-purple">const</span> stack = [<br />
              <span className="line-number">2</span>&nbsp;{" "}
              <span className="code-cyan">'Angular'</span>,{" "}
              <span className="code-cyan">'TypeScript'</span>,<br />
              <span className="line-number">3</span>&nbsp;{" "}
              <span className="code-cyan">'Node.js'</span>
              <br />
              <span className="line-number">4</span>];
              <span className="cursor" />
            </code>
          </div>
          <span className="visual-coordinate">
            6°14′40.0″N &nbsp; 75°34′30.0″W
          </span>
        </div>
      </div>
      <div className="hero-bottom container">
        <a href="#proyectos">
          <span className="mouse-icon" /> SCROLL PARA EXPLORAR{" "}
          <span>↓</span>
        </a>
        <span>CÓDIGO CON PROPÓSITO. SOLUCIONES REALES.</span>
      </div>
    </section>
  )
}
