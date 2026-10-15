// Sección "Contacto": enlaces, botones y formulario.
//
// `onDownloadCv` es un CALLBACK: una función que App le pasa como prop.
// Contact no sabe qué pasa al descargar el CV (hoy abre un aviso; mañana
// podría descargar el PDF); solo la llama cuando se hace clic en el botón.
// Así el "qué hacer" lo decide el padre y el "cuándo" lo decide el hijo.
import { useState, type FormEvent } from "react"
import Icon, { type IconName } from "./Icon"
import SectionTitle from "./SectionTitle"
import { LINKS, external } from "../data/links"
import { WEB3FORMS_KEY, WEB3FORMS_URL } from "../data/contact"

type ContactProps = {
  onDownloadCv: () => void // función sin parámetros que no devuelve nada
}

export default function Contact({ onDownloadCv }: ContactProps) {
  // Estado del envío. Un "union type" limita los valores posibles a estos 4,
  // así TypeScript avisa si escribimos mal alguno (por ejemplo "enviado").
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">("idle")
  const [aviso, setAviso] = useState("")

  // `async` permite usar `await`: esperar la respuesta del servidor sin
  // congelar la página mientras tanto.
  async function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault() // evita que el navegador recargue la página (envío "clásico")
    const form = e.currentTarget // se guarda antes del await: después React ya no lo garantiza

    if (!WEB3FORMS_KEY) {
      setEstado("error")
      setAviso("El formulario aún no está configurado. Escríbeme por correo o LinkedIn.")
      return
    }

    setEstado("enviando")
    setAviso("")
    // FormData lee todos los campos con `name`; fromEntries lo vuelve un objeto
    // { name: "...", email: "...", message: "..." }.
    const datos = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...datos,
          access_key: WEB3FORMS_KEY,
          subject: "Nuevo mensaje desde tu portafolio",
          from_name: "Portafolio web",
        }),
      })
      const json = await res.json()
      if (!res.ok || !json.success) throw new Error(json.message)
      form.reset() // limpia los campos
      setEstado("ok")
      setAviso("¡Gracias! Tu mensaje llegó. Te respondo pronto.")
    } catch {
      // Sin internet, servicio caído o llave inválida: se ofrece otra vía de contacto.
      setEstado("error")
      setAviso("No se pudo enviar el mensaje. Intenta de nuevo o escríbeme por correo.")
    }
  }

  return (
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
            onClick={onDownloadCv}
          >
            Descargar CV <Icon name="download" size={16} />
          </button>
        </div>
      </div>
      <form className="contact-form" onSubmit={enviar}>
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
        {/* Trampa para bots: un humano no ve esta casilla, pero un bot que
            llena todo la marca, y Web3Forms descarta ese envío. */}
        <input
          type="checkbox"
          name="botcheck"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />
        {/* disabled evita que se envíe dos veces mientras espera respuesta */}
        <button className="button primary" type="submit" disabled={estado === "enviando"}>
          {estado === "enviando" ? "Enviando…" : "Enviar"} <Icon name="arrow" size={18} />
        </button>
        {aviso && (
          <p className={`form-message ${estado === "error" ? "error" : ""}`} role="status">
            {aviso}
          </p>
        )}
        <p className="form-note">
          Buenas conversaciones. Nuevas posibilidades.
        </p>
      </form>
    </section>
  )
}
