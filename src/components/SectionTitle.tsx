// Encabezado reutilizable de cada sección: "01 —— PROYECTOS" + subtítulo opcional.
export default function SectionTitle({
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
