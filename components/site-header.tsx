'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const NAV = [
  { label: 'Đánh giá doanh nghiệp', href: '#assessment' },
  { label: 'Phương pháp', href: '#framework' },
  { label: 'Giải pháp', href: '#solutions' },
  { label: 'Dự án', href: '#case-study' },
  { label: 'Kiến thức', href: '#insights' },
  { label: 'Liên hệ', href: '#final-cta' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#top" aria-label="BGS™ — trang chủ">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Chính">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#final-cta"
            className="btn-glow btn-shine inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-accent"
          >
            Đặt lịch chiến lược
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-9 place-items-center rounded-md text-foreground md:hidden"
          aria-label={open ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col px-6 py-4" aria-label="Di động">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm text-muted-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#final-cta"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Đặt lịch chiến lược
              <ArrowUpRight className="size-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
