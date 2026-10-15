import { useEffect, useState } from "react"
import SpaceBackground from "./components/SpaceBackground"

type IconName = "arrow" | "download" | "github" | "linkedin" | "mail" | "code" | "external" | "pin" | "check" | "menu" | "close" | "spark" | "target" | "chat"
function Icon({ name, size = 18 }: {
  name: IconName
  size?: number
}) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M4 12h16M14 6l6 6-6 6" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" />
      </>
    ),
    github: (
      <>
        <path d="M9 19c-5 1-5-3-7-3m14 6v-4a3.5 3.5 0 0 0-1-3c3-.4 6-1.5 6-6a5 5 0 0 0-1.4-3.5 4.5 4.5 0 0 0-.1-3.5S18 1.5 15 3a13 13 0 0 0-6 0C6 1.5 4.5 2 4.5 2a4.5 4.5 0 0 0-.1 3.5A5 5 0 0 0 3 9c0 4.5 3 5.6 6 6a3.5 3.5 0 0 0-1 3v4" />
      </>
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 10v7m0-10v.1M11 17v-7m0 3c0-4 6-4 6 0v4" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),
    code: (
      <>
        <path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18" />
      </>
    ),
    external: (
      <>
        <path d="M14 3h7v7m0-7L10 14M10 3H4v17h17v-6" />
      </>
    ),
    pin: (
      <>
        <path d="M19 10c0 6-7 11-7 11S5 16 5 10a7 7 0 0 1 14 0Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    spark: (
      <>
        <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    chat: (
      <>
        <path d="M21 11a8 8 0 0 1-8 8H7l-5 3 2-6a8 8 0 1 1 17-5Z" />
        <path d="M8 10h8M8 14h5" />
      </>
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

const projects = [
  {
    name: "Registra",
    type: "Propio",
    description:
      "Trazabilidad de escrituras notariales con máquina de estados, auditoría y respaldos automáticos.",
    tech: ["JavaScript", "Google Apps Script", "Google Workspace"],
    kind: "registra",
    label: "ORDEN EN CADA PROCESO",
    number: "01",
  },
  {
    name: "JAJ Motos",
    type: "Bootcamp · Líder",
    description: "E-commerce de motos; lideré el equipo y el frontend.",
    tech: ["Angular", "TypeScript", "Bootstrap", "Node.js", "MongoDB"],
    kind: "motos",
    label: "TU PRÓXIMA AVENTURA",
    number: "02",
  },
  {
    name: "TaskRewardPro",
    type: "Académico · Idea propia",
    description: "Gamificación laboral con puntos canjeables por recompensas.",
    tech: ["React", "Vite", "Node.js", "MongoDB"],
    kind: "task",
    label: "CADA META CUENTA",
    number: "03",
  },
  {
    name: "Sistema de Grabado Láser",
    type: "Académico",
    description: "Gestión de órdenes de trabajo con informes XML.",
    tech: ["Angular", "Express", "MongoDB", "Vercel", "Render"],
    kind: "laser",
    label: "PRECISIÓN, HECHA SISTEMA",
    number: "04",
  },
]
const nav = [
  ["Inicio", "inicio"],
  ["Proyectos", "proyectos"],
  ["Sobre mí", "sobre-mi"],
  ["Experiencia", "experiencia"],
  ["Contacto", "contacto"],
]
const portrait =
  "https://images.unsplash.com/photo-1785631829446-ae3a380dc144?auto=format&fit=crop&w=800&q=85"

function SectionTitle({
  number,
  title,
  subtitle,
}: {
  number: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">
          <span>{number}</span>
          <span className="title-line" />
          {title}
        </div>
        {subtitle && <h2>{subtitle}</h2>}
      </div>
    </div>
  )
}
function ProjectMockup({ kind }: { kind: string }) {
  return (
    <div className={`mockup ${kind}`}>
      <div className="mockup-grid" />
      {kind === "motos" ? (
        <div className="moto-screen">
          <div className="mini-nav">
            <b>
              JAJ<span> MOTOS</span>
            </b>
            <span>INICIO &nbsp; MOTOCICLETAS &nbsp; CONTACTO</span>
          </div>
          <div className="moto-copy">
            <small>NO ES SOLO UN DESTINO.</small>
            <strong>
              ES EL
              <br />
              CAMINO.
            </strong>
            <span>ENCUENTRA TU PRÓXIMA MOTO ↗</span>
          </div>
          <svg className="motorcycle" viewBox="0 0 360 210" fill="none">
            <circle cx="85" cy="155" r="43" stroke="#222a32" strokeWidth="18" />
            <circle
              cx="280"
              cy="155"
              r="43"
              stroke="#222a32"
              strokeWidth="18"
            />
            <circle cx="85" cy="155" r="28" stroke="#7d858e" strokeWidth="3" />
            <circle cx="280" cy="155" r="28" stroke="#7d858e" strokeWidth="3" />
            <path
              d="m85 155 62-65 66 65H85l35-92h51l42 92 45-87 22 87"
              stroke="#aab1ba"
              strokeWidth="9"
            />
            <path d="m140 92 45-29 52 13-17 38-61 3Z" fill="#a8c828" />
            <path
              d="m207 71 23-30 27 5 16 24-20 8m-140-6 44-4 10 13-58 3"
              fill="#252d32"
            />
            <path d="m258 67 12-23h-24" stroke="#bec4cc" strokeWidth="6" />
          </svg>
        </div>
      ) : (
        <div className="app-window">
          <div className="window-top">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <span>
              {kind === "registra"
                ? "registra.app / dashboard"
                : kind === "task"
                  ? "taskrewardpro / mi espacio"
                  : "laserflow / órdenes"}
            </span>
            <Icon name="external" size={9} />
          </div>
          <div className="mini-app">
            <aside>
              <b>
                {kind === "registra" ? "r." : kind === "task" ? "tr." : "L/"}
              </b>
              {["Dashboard", "Mis proyectos", "Actividad", "Configuración"].map(
                (s, i) => (
                  <span key={s} className={i === 0 ? "selected" : ""}>
                    <i />
                    {s}
                  </span>
                ),
              )}
              <div className="mini-avatar">
                JF <span>Mi cuenta</span>
              </div>
            </aside>
            <div className="mini-content">
              <div className="mini-content-title">
                <b>
                  {kind === "registra"
                    ? "Resumen general"
                    : kind === "task"
                      ? "¡Vamos por la siguiente meta!"
                      : "Órdenes de trabajo"}
                </b>
                <span>
                  + {kind === "laser" ? "Nueva orden" : "Nuevo registro"}
                </span>
              </div>
              <div className="mini-stats">
                {(kind === "task"
                  ? ["2.450", "12", "08"]
                  : kind === "laser"
                    ? ["48", "12", "36"]
                    : ["128", "24", "96"]
                ).map((n, i) => (
                  <div key={i}>
                    <small>
                      {["Total de registros", "En proceso", "Completados"][i]}
                    </small>
                    <strong>{n}</strong>
                    <em>↗ {i + 8}.5%</em>
                  </div>
                ))}
              </div>
              <div className="mini-table">
                <div>
                  <b>
                    {kind === "task"
                      ? "Tus próximos desafíos"
                      : "Actividad reciente"}
                  </b>
                  <span>Ver todos →</span>
                </div>
                {["001", "002", "003", "004"].map((n, i) => (
                  <div key={n}>
                    <span className="table-id">#{n}</span>
                    <span>
                      {kind === "task"
                        ? [
                            "Completar el sprint",
                            "Trabajo en equipo",
                            "Una nueva idea",
                            "Comparte conocimiento",
                          ][i]
                        : kind === "laser"
                          ? [
                              "Grabado en madera",
                              "Placa personalizada",
                              "Corte de acrílico",
                              "Grabado industrial",
                            ][i]
                          : [
                              "Escritura pública",
                              "Registro notarial",
                              "Acta de apertura",
                              "Escritura pública",
                            ][i]}
                    </span>
                    <span className="mini-status">
                      {i % 2 ? "En proceso" : "Completado"}
                    </span>
                    <span>•••</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <span className="mockup-corner">
        {kind === "registra"
          ? "WORKFLOW / AUTOMATION"
          : kind === "motos"
            ? "E-COMMERCE / FULL-STACK"
            : kind === "task"
              ? "PRODUCTIVITY / GAMIFICATION"
              : "MANAGEMENT / FULL-STACK"}
      </span>
    </div>
  )
}

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
            {nav.map(([name, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? "active" : ""}
                onClick={() => setMenu(false)}
              >
                {name}
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
                <button
                  aria-label="GitHub"
                  onClick={() => unavailable("GitHub")}
                >
                  <Icon name="github" size={20} />
                </button>
                <button
                  aria-label="LinkedIn"
                  onClick={() => unavailable("LinkedIn")}
                >
                  <Icon name="linkedin" size={20} />
                </button>
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
                <img
                  src={portrait}
                  alt="Retrato ilustrativo de referencia; reemplazar por foto de Juan Felipe"
                />
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
                    <button onClick={() => unavailable(`Código · ${p.name}`)}>
                      <Icon name="github" size={16} />
                      Código
                    </button>
                    <button onClick={() => unavailable(`Demo · ${p.name}`)}>
                      Demo <Icon name="external" size={15} />
                    </button>
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
        <section id="habilidades" className="skills section container">
          <SectionTitle
            number="03"
            title="HABILIDADES"
            subtitle="Mi caja de herramientas."
          />
          <div className="skills-grid">
            {[
              [
                "01",
                "Frontend",
                [
                  "Angular",
                  "TypeScript",
                  "JavaScript",
                  "React",
                  "HTML5",
                  "CSS3",
                  "Bootstrap",
                  "Tailwind CSS",
                ],
              ],
              ["02", "Backend", ["Node.js", "Express", "Google Apps Script"]],
              ["03", "Bases de datos", ["MongoDB", "SQL"]],
              [
                "04",
                "Herramientas y Cloud",
                ["Git", "GitHub", "Vercel", "Render", "Google Workspace"],
              ],
              [
                "05",
                "Automatización e IA",
                [
                  "Automatización de procesos",
                  "Inteligencia artificial",
                  "APIs",
                  "Google Apps Script",
                ],
              ],
            ].map(([n, title, tags]) => (
              <div className="skill-row" key={n as string}>
                <span className="skill-number">{n}</span>
                <h3>{title}</h3>
                <div className="chips">
                  {(tags as string[]).map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <Icon name="code" size={19} />
              </div>
            ))}
          </div>
        </section>
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
              {[
                [
                  "2025 – presente",
                  "BIM Core Solutions",
                  "Soporte TI y Desarrollo",
                  "experience",
                ],
                [
                  "2026",
                  "Bootcamp Full-Stack Web",
                  "Formación intensiva Institución Universitaria Iberoamericana",
                  "education",
                ],
                [
                  "En curso",
                  "Ingeniería Informática",
                  "Politécnico Colombiano JIC",
                  "education",
                ],
              ].map(([date, title, desc, type], i) => (
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
                ["mail", "Email"],
                ["linkedin", "LinkedIn"],
                ["github", "GitHub"],
              ] as [IconName, string][]).map(([icon, label]) => (
                <button key={label} onClick={() => unavailable(label)}>
                  <Icon name={icon} />
                  {label}
                  <Icon name="external" size={13} />
                </button>
              ))}
            </div>
            <div className="contact-availability">
              <span /> Abierto a proyectos y oportunidades
            </div>
            <div className="contact-actions">
              <button
                className="button primary"
                onClick={() => unavailable("WhatsApp")}
              >
                <Icon name="chat" size={17} /> Hablemos por WhatsApp{" "}
                <Icon name="external" size={14} />
              </button>
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
      <footer>
        <div className="container footer-inner">
          <a href="#inicio" className="logo">
            JF<span>.</span>
          </a>
          <p>Diseñado y desarrollado por Juan Felipe Hincapié · 2026</p>
          <a href="#inicio" className="back-top" aria-label="Volver al inicio">
            VOLVER ARRIBA <span>↑</span>
          </a>
        </div>
      </footer>
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
              {dialog === "Descargar CV"
                ? "El CV estará disponible aquí cuando se añada el documento de Juan Felipe."
                : dialog === "WhatsApp"
                  ? "El enlace directo a WhatsApp estará disponible cuando se añada el número de contacto de Juan Felipe."
                  : "Este enlace estará disponible cuando se configure la dirección de Juan Felipe."}
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
