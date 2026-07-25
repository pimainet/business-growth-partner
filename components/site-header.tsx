'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'
import { SITE_NAV, JOURNEY_STEPS } from '@/lib/site-nav'

// Menu chính: ngắn, không lấy nguyên tiêu đề trang làm nhãn nav.
const NAV = SITE_NAV.filter((item) => item.href !== '/' && item.href !== '/lien-he')

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const currentStep = JOURNEY_STEPS.find((item) => item.href === pathname)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/90 backdrop-blur-md'
          : 'border-b border-transparent bg-background/60 backdrop-blur-sm',
      )}
    >
      {/* Hàng 1 — nhận diện, có khoảng nghỉ riêng, không chen với menu */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="/" aria-label="BGS™ — trang chủ">
          <Logo showTagline />
        </a>

        {currentStep && (
          <p className="hidden text-xs text-muted-foreground/70 md:block">
            Bước {currentStep.step}/{JOURNEY_STEPS.length} ·{' '}
            <span className="text-foreground/70">{currentStep.navLabel}</span>
          </p>
        )}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-9 place-items-center rounded-md text-foreground lg:hidden"
          aria-label={open ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Hàng 2 — menu ngắn + CTA tự tin, không hét */}
      <div className="hidden border-t border-border/60 lg:block">
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-6 lg:px-8">
          <nav className="flex items-center gap-7" aria-label="Chính">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link whitespace-nowrap text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.navLabel}
              </a>
            ))}
          </nav>

          <a
            href="/lien-he"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 text-[13px] font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            Đặt lịch chẩn đoán
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col px-6 py-4" aria-label="Di động">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm text-muted-foreground"
              >
                {item.navLabel}
              </a>
            ))}
            <a
              href="/lien-he"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-foreground"
            >
              Đặt lịch chẩn đoán
              <ArrowRight className="size-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
