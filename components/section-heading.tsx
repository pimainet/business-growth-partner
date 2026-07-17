import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <p
            className={cn(
              'text-xs font-medium uppercase tracking-[0.2em]',
              dark ? 'text-navy-foreground/60' : 'text-accent',
            )}
          >
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2
          className={cn(
            'mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]',
            dark ? 'text-navy-foreground' : 'text-foreground',
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p
            className={cn(
              'mt-5 text-pretty text-lg leading-relaxed',
              dark ? 'text-navy-foreground/70' : 'text-muted-foreground',
              align === 'center' && 'mx-auto',
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
