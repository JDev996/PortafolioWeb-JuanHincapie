// Sección "Contacto": enlaces, botones y formulario.
//
// `onDownloadCv` es un CALLBACK: una función que App le pasa como prop.
// Contact no sabe qué pasa al descargar el CV (hoy abre un aviso; mañana
// podría descargar el PDF); solo la llama cuando se hace clic en el botón.
// Así el "qué hacer" lo decide el padre y el "cuándo" lo decide el hijo.
import { useState } from "react"
import Icon, { type IconName } from "./Icon"
import SectionTitle from "./SectionTitle"
import { LINKS, external } from "../data/links"

type ContactProps = {
  onDownloadCv: () => void // función sin parámetros que no devuelve nada
}

export default function Contact({ onDownloadCv }: ContactProps) {
  // El mensaje del formulario solo le importa a esta sección: estado propio.
  const [formMessage, setFormMessage] = useState("")

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
  )
}
