// Ilustración de cada tarjeta de proyecto (una "app" en miniatura dibujada con HTML/CSS).
// `kind` decide qué variante se dibuja: "registra" | "motos" | "task" | "laser".
import Icon from "./Icon"

export default function ProjectMockup({ kind }: { kind: string }) {
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
