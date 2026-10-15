// Barra de navegación superior.
//
// Aquí hay dos tipos de datos, y vale la pena distinguirlos:
//  - `menu` es ESTADO PROPIO: si el menú del celular está abierto o cerrado.
//    Solo le importa a la barra, así que vive aquí con useState.
//  - `active` es una PROP: la sección que se está viendo. La calcula App
//    (que observa toda la página) y se la pasa a la barra.
import { useEffect, useState } from "react"
import Icon from "./Icon"
import { nav } from "../data/navigation"

type NavbarProps = {
  active: string // id de la sección visible: "inicio", "proyectos"…
}

export default function Navbar({ active }: NavbarProps) {
  const [menu, setMenu] = useState(false)

  // Cerrar el menú con la tecla Escape. useEffect conecta el "escuchador"
  // al montar el componente; la función que retorna lo desconecta al
  // desmontarlo, para no dejar escuchadores huérfanos.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
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
  )
}
