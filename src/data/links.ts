// Enlaces personales en un solo lugar: si cambia uno, se cambia aquí y se
// actualiza en toda la página.
export const LINKS = {
  github: "https://github.com/JDev996",
  linkedin: "https://www.linkedin.com/in/juan-felipe-hincapi%C3%A9-4364bb232/",
  email: "mailto:juanhincapiemachado@gmail.com",
  // wa.me abre WhatsApp (app o web) con el número en formato internacional,
  // sin "+" ni espacios; `text` deja un mensaje inicial ya escrito.
  whatsapp:
    "https://wa.me/573196949019?text=" +
    encodeURIComponent("Hola Juan Felipe, vi tu portafolio y me gustaría hablar contigo."),
}

// Atributos para enlaces que abren otro sitio: pestaña nueva y `noopener`,
// que impide que la página abierta pueda controlar esta (window.opener).
export const external = { target: "_blank", rel: "noopener noreferrer" }
