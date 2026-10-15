import { useEffect, useState } from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Navbar from "./components/Navbar"
import Icon from "./components/Icon"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


// App solo arma la página y guarda el estado que comparten varias secciones:
//  - `active`: qué sección se ve en pantalla (se lo pasa a <Navbar /> como prop).
//  - `dialog`: el aviso emergente (lo abre <Contact /> mediante su callback).
export default function App() {
  const [active, setActive] = useState("inicio")
  const [dialog, setDialog] = useState("")

  // IntersectionObserver avisa cuando una sección entra en la zona visible;
  // con eso se resalta el enlace correcto del menú.
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
      if (e.key === "Escape") setDialog("") // el menú se cierra en Navbar
    }
    window.addEventListener("keydown", escape)
    return () => window.removeEventListener("keydown", escape)
  }, [])
  return (
    <>
      <Navbar active={active} />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Contact onDownloadCv={() => setDialog("Descargar CV")} />
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
