// Íconos SVG propios (sin librerías). Uso: <Icon name="github" size={20} />
import type { ReactNode } from "react"

export type IconName = "arrow" | "download" | "github" | "linkedin" | "mail" | "code" | "external" | "pin" | "check" | "menu" | "close" | "spark" | "target" | "chat"
export default function Icon({ name, size = 18 }: {
  name: IconName
  size?: number
}) {
  const paths: Record<IconName, ReactNode> = {
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
