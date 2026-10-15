export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <a href="#inicio" className="logo">
          JF<span>.</span>
        </a>
        <p>Diseñado y desarrollado por Juan Felipe Hincapié · {new Date().getFullYear()}</p>
        <a href="#inicio" className="back-top" aria-label="Volver al inicio">
          VOLVER ARRIBA <span>↑</span>
        </a>
      </div>
    </footer>
  )
}
