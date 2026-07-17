import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span
        aria-hidden="true"
        className="grid size-7 place-items-center rounded-[7px] bg-primary text-primary-foreground"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 1.5v13M1.5 8h13" />
          <circle cx="8" cy="8" r="3" fill="currentColor" stroke="none" />
        </svg>
      </span>
      <span className="text-[17px] font-semibold tracking-tight text-foreground">
        Systema
      </span>
    </span>
  )
}
