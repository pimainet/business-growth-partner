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
<<<<<<< HEAD
              dark ? 'text-navy-foreground/60' : 'text-muted-foreground',
=======
              dark ? 'text-navy-foreground/60' : 'text-accent',
>>>>>>> 1492dc544b66016150f70b7a6a84c333e78dd098
            )}
          >
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2
          className={cn(
<<<<<<< HEAD
            'mt-4 text-balance text-3xl font-bold leading-[1.12] tracking-[-0.015em] sm:text-4xl lg:text-[2.85rem]',
=======
            'mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]',
>>>>>>> 1492dc544b66016150f70b7a6a84c333e78dd098
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
<<<<<<< HEAD
              'mt-5 max-w-2xl text-pretty text-lg leading-[1.7]',
=======
              'mt-5 text-pretty text-lg leading-relaxed',
>>>>>>> 1492dc544b66016150f70b7a6a84c333e78dd098
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
