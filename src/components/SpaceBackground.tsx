import { useEffect, useRef } from "react"

export default function SpaceBackground() {
  const root = useRef<HTMLDivElement>(null)
  const canvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const element = root.current
    const surface = canvas.current
    const hero = element?.closest("section")
    const context = surface?.getContext("2d")
    if (!element || !surface || !hero || !context) return

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const stars = Array.from({ length: 135 }, (_, i) => ({
      x: ((i * 73.37 + 19) % 100) / 100,
      y: ((i * 41.19 + 7) % 100) / 100,
      depth: 0.3 + (i % 7) / 10,
      radius: 0.4 + (i % 4) * 0.3,
    }))
    let width = 0
    let height = 0
    let frame = 0
    let visible = true
    let pointer = { x: 0, y: 0 }
    const position = { x: 0, y: 0 }

    const draw = (time = 0) => {
      position.x += (pointer.x - position.x) * 0.045
      position.y += (pointer.y - position.y) * 0.045
      context.clearRect(0, 0, width, height)
      stars.forEach((star, i) => {
        const x = star.x * width + position.x * star.depth * 22
        const y = star.y * height * 0.8 + position.y * star.depth * 16
        const twinkle = motion.matches
          ? 0.65
          : 0.55 + Math.sin(time * 0.0006 + i) * 0.2
        context.beginPath()
        context.fillStyle = `rgba(185, 224, 255, ${twinkle * star.depth})`
        context.arc(x, y, star.radius, 0, Math.PI * 2)
        context.fill()
      })
      element.style.setProperty("--space-x", `${position.x * 12}px`)
      element.style.setProperty("--space-y", `${position.y * 7}px`)
      if (!motion.matches && visible) frame = requestAnimationFrame(draw)
    }
    const resize = () => {
      const bounds = hero.getBoundingClientRect()
      width = bounds.width
      height = bounds.height
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      surface.width = width * ratio
      surface.height = height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      if (motion.matches || !visible) draw()
    }
    const move = (event: PointerEvent) => {
      if (motion.matches) return
      const bounds = hero.getBoundingClientRect()
      pointer = {
        x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
        y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 2,
      }
    }
    const reset = () => {
      pointer = { x: 0, y: 0 }
    }
    const restart = () => {
      cancelAnimationFrame(frame)
      draw()
    }
    const observer = new ResizeObserver(resize)
    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      cancelAnimationFrame(frame)
      if (visible) draw()
    })
    resize()
    observer.observe(hero)
    visibility.observe(hero)
    hero.addEventListener("pointermove", move)
    hero.addEventListener("pointerleave", reset)
    motion.addEventListener("change", restart)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      visibility.disconnect()
      hero.removeEventListener("pointermove", move)
      hero.removeEventListener("pointerleave", reset)
      motion.removeEventListener("change", restart)
    }
  }, [])

  return (
    <div className="space-background" ref={root} aria-hidden="true">
      <canvas ref={canvas} className="space-stars" />
      <div className="space-nebula" />
      <div className="earth-horizon">
        <div className="earth-surface" />
      </div>
      <div className="space-fade" />
    </div>
  )
}
