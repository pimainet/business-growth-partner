import { useId } from 'react'
import { cn } from '@/lib/utils'

/**
 * Icon mark riêng của BGS™: huy hiệu ngũ giác gradient (accent → navy) với
 * một ngũ giác lồng bên trong — mô-típ "hệ thống bên trong hệ thống" của
 * GROW-5™. Không dùng icon Lucide — đây là dấu hiệu nhận diện phải nhận ra
 * được ngay cả khi che chữ "BGS".
 */
export function Logo({
  className,
  variant = 'light',
}: {
  className?: string
  variant?: 'light' | 'dark'
}) {
  const gradientId = useId()

  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="2"
            y1="1"
            x2="28"
            y2="27"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="var(--accent)" />
            <stop offset="1" stopColor={variant === 'dark' ? 'white' : 'var(--navy)'} stopOpacity={variant === 'dark' ? 0.9 : 1} />
          </linearGradient>
        </defs>
        <path
          d="M15 1.4 L28.1 9.6 L23.4 24.6 L6.6 24.6 L1.9 9.6 Z"
          fill={`url(#${gradientId})`}
        />
        <path
          d="M15 8.2 L21.3 12.1 L18.9 19.6 L11.1 19.6 L8.7 12.1 Z"
          fill="none"
          stroke="white"
          strokeOpacity="0.55"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={
          variant === 'dark'
            ? 'text-[17px] font-semibold tracking-tight text-navy-foreground'
            : 'text-[17px] font-semibold tracking-tight text-foreground'
        }
      >
        BGS<span className="align-super text-[0.55em] text-accent">™</span>
      </span>
    </span>
  )
}
