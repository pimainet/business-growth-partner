/**
 * GROW-5™ signature glyph — 5 node liên kết thành vòng lặp.
 * Đây là "Brand Asset / DNA" lặp lại khắp site (theo điểm 5 trong review):
 * Hero, Manifesto, Footer, ...
 */
const NODES: [number, number][] = [
  [100, 14],
  [176, 68],
  [148, 158],
  [52, 158],
  [24, 68],
]

export function Grow5Glyph({
  className,
  showRing = true,
}: {
  className?: string
  showRing?: boolean
}) {
  const path = NODES.map((p) => p.join(',')).join(' L ')

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {showRing && (
        <circle
          cx="100"
          cy="100"
          r="94"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="1 7"
          opacity="0.4"
        />
      )}
      <path
        d={`M ${path} Z`}
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
        opacity="0.55"
      />
      {NODES.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4.5" fill="currentColor" opacity="0.9" />
      ))}
      <circle cx="100" cy="100" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  )
}
