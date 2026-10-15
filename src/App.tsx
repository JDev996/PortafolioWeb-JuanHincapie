import { useEffect, useState } from "react"
import SpaceBackground from "./components/SpaceBackground"
import Icon, { type IconName } from "./components/Icon"
import SectionTitle from "./components/SectionTitle"
import ProjectMockup from "./components/ProjectMockup"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import { LINKS, external } from "./data/links"
import { projects } from "./data/projects"
import { nav } from "./data/navigation"
import { experience } from "./data/experience"

// Los archivos de /public se sirven tal cual. BASE_URL vale "/" con `pnpm dev`
// y "/PortafolioWeb-JuanHincapie/" en GitHub Pages, así la ruta sirve en ambos.
const portrait = `${import.meta.env.BASE_URL}img/juan-felipe.webp`

export default function App() {
  const [menu, setMenu] = useState(false)
  const [active, setActive] = useState("inicio")
  const [dialog, setDialog] = useState("")
  const [formMessage, setFormMessage] = useState("")
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        }),
      { rootMargin: "-15% 0px -60% 0px" },
    )
    document
      .querySelectorAll("main section[id]")
      .forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDialog("")
        setMenu(false)
      }
    }
    window.addEventListener("keydown", escape)
    return () => window.removeEventListener("keydown", escape)
  }, [])
  const unavailable = (label: string) => setDialog(label)
  return (
    <>
      <header className="navbar">
        <div className="nav-inner">
          <a href="#inicio" className="logo" aria-label="JF — Inicio">
            JF<span>.</span>
            <span className="logo-slash">/</span>
          </a>
          <nav
            className={menu ? "nav-links open" : "nav-links"}
            aria-label="Navegación principal"
          >
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={active === item.id ? "active" : ""}
                onClick={() => setMenu(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            className="menu-toggle"
            aria-label={menu ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            <Icon name={menu ? "close" : "menu"} />
          </button>
        </div>
      </header>
      <main>
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
            {projects.map((p) => (
              <article className="project-card" key={p.name}>
                <ProjectMockup kind={p.kind} />
                <div className="project-body">
                  <div className="project-meta">
                    <span className="project-type">
                      <i />
                      {p.type}
                    </span>
                    <span className="project-number">/{p.number}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <div className="chips">
                    {p.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={p.code} {...external}>
                      <Icon name="github" size={16} />
                      Código
                    </a>
                    {/* Renderizado condicional: si `p.demo` no existe, no se pinta nada */}
                    {p.demo && (
                      <a href={p.demo} {...external}>
                        Demo <Icon name="external" size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
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
        <Skills />
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
                // el aprendizaje nunca se detiene
              </span>
            </div>
            <div className="timeline">
              {experience.map(({ date, title, description: desc, type }, i) => (
                <div
                  className={`timeline-item ${i === 0 ? "current" : ""}`}
                  key={title}
                >
                  <span className="timeline-dot" />
                  <div className="timeline-meta">
                    <span>{date}</span>
                    <span className="timeline-type">
                      {type === "experience" ? "EXPERIENCIA" : "FORMACIÓN"}
                    </span>
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contacto" className="contact section container">
          <div className="contact-copy">
            <SectionTitle number="05" title="CONTACTO" />
            <h2>
              Las buenas ideas
              <br />
              empiezan con una
              <br />
              <span>conversación.</span>
            </h2>
            <p>
              ¿Tienes un proyecto en mente o una oportunidad?
              <br />
              Hablemos y construyamos algo juntos.
            </p>
            <div className="contact-links">
              {([
                ["mail", "Email", LINKS.email],
                ["linkedin", "LinkedIn", LINKS.linkedin],
                ["github", "GitHub", LINKS.github],
              ] as [IconName, string, string][]).map(([icon, label, href]) => (
                // mailto: abre el programa de correo, así que solo los enlaces web van a otra pestaña
                <a key={label} href={href} {...(href.startsWith("http") ? external : {})}>
                  <Icon name={icon} />
                  {label}
                  <Icon name="external" size={13} />
                </a>
              ))}
            </div>
            <div className="contact-availability">
              <span /> Abierto a proyectos y oportunidades
            </div>
            <div className="contact-actions">
              <a className="button primary" href={LINKS.whatsapp} {...external}>
                <Icon name="chat" size={17} /> Hablemos por WhatsApp{" "}
                <Icon name="external" size={14} />
              </a>
              <button
                className="button outline"
                onClick={() => unavailable("Descargar CV")}
              >
                Descargar CV <Icon name="download" size={16} />
              </button>
            </div>
          </div>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault()
              setFormMessage(
                "Gracias por tu interés. El envío estará disponible cuando se configure el email de contacto.",
              )
            }}
          >
            <div className="form-title">
              <Icon name="code" size={17} />
              <span>HAGAMOS QUE SUCEDA</span>
              <span className="form-dot" />
            </div>
            <label htmlFor="name">
              Nombre<span>*</span>
            </label>
            <input
              id="name"
              name="name"
              placeholder="¿Cómo te llamas?"
              autoComplete="name"
              required
            />
            <label htmlFor="email">
              Email<span>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              autoComplete="email"
              required
            />
            <label htmlFor="message">
              Mensaje<span>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Cuéntame sobre tu idea..."
              rows={4}
              required
            />
            <button className="button primary" type="submit">
              Enviar <Icon name="arrow" size={18} />
            </button>
            {formMessage && (
              <p className="form-message" role="status">
                {formMessage}
              </p>
            )}
            <p className="form-note">
              Buenas conversaciones. Nuevas posibilidades.
            </p>
          </form>
        </section>
      </main>
      <Footer />
      {dialog && (
        <div className="dialog-backdrop" onClick={() => setDialog("")}>
          <div
            className="dialog-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="dialog-close"
              aria-label="Cerrar"
              autoFocus
              onClick={() => setDialog("")}
            >
              <Icon name="close" />
            </button>
            <Icon name="code" size={28} />
            <h2 id="dialog-title">{dialog}</h2>
            <p>
              {/* Por ahora solo "Descargar CV" usa este aviso (pendiente de la versión pública del CV) */}
              El CV estará disponible aquí muy pronto. Mientras tanto, puedes
              escribirme por correo o LinkedIn.
            </p>
            <button className="button primary" onClick={() => setDialog("")}>
              Entendido <Icon name="check" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
