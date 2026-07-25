'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'
import { SITE_NAV } from '@/lib/site-nav'

// Điều hướng chính lấy từ SITE_NAV — không tính Home (đã có logo) và
// Liên hệ (đã có nút CTA riêng), theo đúng cấu trúc 9 trang trong Blueprint V2.
const NAV = SITE_NAV.filter((item) => item.href !== '/' && item.href !== '/lien-he')

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
        <a href="/" aria-label="BGS™ — trang chủ">
          <Logo />
        </a>

        <nav
          className="hidden items-center gap-5 overflow-x-auto lg:flex lg:gap-6"
          aria-label="Chính"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/lien-he"
            className="btn-glow btn-shine inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-accent"
          >
            Đặt lịch Business Diagnosis
            <ArrowUpRight className="size-4" />
          </a>
        </div>

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
                {item.label}
              </a>
            ))}
            <a
              href="/lien-he"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Đặt lịch Business Diagnosis
              <ArrowUpRight className="size-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
