interface AnimatedOrbProps {
  color: string
  size: number
  x: string
  y: string
  blur?: number
  opacity?: number
}

export function AnimatedOrb({ color, size, x, y, blur = 90, opacity = 0.18 }: AnimatedOrbProps) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute z-0 hidden rounded-full md:block motion-reduce:hidden"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: color,
        filter: `blur(${blur}px)`,
        opacity,
      }}
    />
  )
}
