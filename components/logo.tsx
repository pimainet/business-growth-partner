import { cn } from '@/lib/utils'

/**
 * Icon mark dựa trên GROW-5™ glyph (ngũ giác 5 node) — brand DNA,
 * thay cho dấu "+" chung chung trước đây.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span
        aria-hidden="true"
        className="grid size-7 place-items-center rounded-[7px] bg-primary text-primary-foreground"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M10 2 L17.5 7.4 L14.7 16.2 L5.3 16.2 L2.5 7.4 Z"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
          <circle cx="10" cy="2" r="1.3" fill="currentColor" stroke="none" />
          <circle cx="17.5" cy="7.4" r="1.3" fill="currentColor" stroke="none" />
          <circle cx="14.7" cy="16.2" r="1.3" fill="currentColor" stroke="none" />
          <circle cx="5.3" cy="16.2" r="1.3" fill="currentColor" stroke="none" />
          <circle cx="2.5" cy="7.4" r="1.3" fill="currentColor" stroke="none" />
        </svg>
      </span>
      <span className="text-[17px] font-semibold tracking-tight text-foreground">
        BGS<span className="align-super text-[0.55em] text-accent">™</span>
      </span>
    </span>
  )
}
