"use client"

import type { CSSProperties, ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
  hoverLift?: boolean
}

export function GlassCard({ children, className = "", style, hoverLift = true }: GlassCardProps) {
  return (
    <div
      style={style}
      className={[
        "rounded-3xl border border-white/[0.12] bg-white/[0.045] backdrop-blur-[18px]",
        "shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]",
        "transition-[transform,box-shadow] duration-[350ms] ease-[cubic-bezier(.22,.68,0,1.2)]",
        hoverLift
          ? "hover:-translate-y-1.5 hover:scale-[1.012] hover:shadow-[0_32px_64px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)]"
          : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  )
}
