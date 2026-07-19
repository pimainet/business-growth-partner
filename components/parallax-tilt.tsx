'use client'

import { useRef, type ReactNode, type CSSProperties } from 'react'

/**
 * Nghiêng nhẹ theo con trỏ chuột — chỉ áp dụng cho "vật thể chính" của Hero
 * để tạo visual anchor có chuyển động, không lạm dụng nơi khác.
 */
export function ParallaxTilt({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = node.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    node.style.transform = `perspective(1200px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 7).toFixed(2)}deg)`
  }

  function handleLeave() {
    const node = ref.current
    if (!node) return
    node.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)'
  }

  const style: CSSProperties = {
    transition: 'transform 350ms cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform',
    transformStyle: 'preserve-3d',
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={style}
    >
      {children}
    </div>
  )
}
