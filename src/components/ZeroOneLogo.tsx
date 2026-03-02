interface ZeroOneLogoProps {
  size?: number
  className?: string
}

export function ZeroOneLogo({ size = 32, className = '' }: ZeroOneLogoProps) {
  const r = size * 0.14 // dot radius scales with size
  const gap = size * 0.3 // gap between dots

  const dots = [
    // Row 1
    { cx: gap, cy: gap, fill: '#C8B6FF' },         // D = Lavender
    { cx: size / 2, cy: gap, fill: 'rgba(255,255,255,0.08)' },
    { cx: size - gap, cy: gap, fill: 'rgba(255,255,255,0.08)' },
    // Row 2
    { cx: gap, cy: size / 2, fill: 'rgba(255,255,255,0.08)' },
    { cx: size / 2, cy: size / 2, fill: '#B8E0D2' }, // O = Mint
    { cx: size - gap, cy: size / 2, fill: 'rgba(255,255,255,0.08)' },
    // Row 3
    { cx: gap, cy: size - gap, fill: 'rgba(255,255,255,0.08)' },
    { cx: size / 2, cy: size - gap, fill: 'rgba(255,255,255,0.08)' },
    { cx: size - gap, cy: size - gap, fill: '#FFCDB2' }, // T = Peach
  ]

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className={className}
      aria-label="ZeroOne D.O.T.S. AI"
    >
      {dots.map((dot, i) => (
        <circle key={i} cx={dot.cx} cy={dot.cy} r={r} fill={dot.fill} />
      ))}
    </svg>
  )
}
