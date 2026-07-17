import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { GROW5_STAGES } from '@/lib/grow5'

const FLOW_DESC: Record<string, string> = {
  'market-visibility': 'Đúng khách hàng tìm thấy bạn',
  'customer-conversion': 'Chuyển đổi thành khách hàng',
  'operational-excellence': 'Vận hành trơn tru, ít sai sót',
  'business-intelligence': 'Ra quyết định bằng dữ liệu',
  'continuous-improvement': 'Tối ưu liên tục không ngừng',
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border pt-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.5]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-background to-transparent" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <Reveal>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-accent" />
              BGS™ — Business Growth System
            </span>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-7 text-lg font-medium text-muted-foreground/70 sm:text-xl">
              Website chỉ là một phần của hệ thống tăng trưởng.
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.05rem]">
              Điều doanh nghiệp thực sự cần là một hệ thống giúp khách hàng{' '}
              <span className="font-serif italic font-normal text-accent">
                tìm thấy, tin tưởng và lựa chọn bạn.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Khi hệ thống vận hành đúng, doanh nghiệp không còn phụ thuộc
              vào từng chiến dịch hay từng cá nhân để tăng trưởng.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#assessment"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
              >
                Đánh giá hệ thống của doanh nghiệp bạn
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#final-cta"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Đặt lịch chiến lược
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-8 border-t border-border pt-8">
              {[
                { v: '10+', l: 'năm kinh nghiệm hệ thống' },
                { v: '120+', l: 'doanh nghiệp đồng hành' },
                { v: '3.4x', l: 'tăng trưởng trung bình' },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="text-2xl font-semibold tracking-tight text-foreground">
                    {s.v}
                  </dt>
                  <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="flex items-center">
          <div className="relative w-full rounded-2xl border border-border bg-card p-6 shadow-[0_1px_0_0_rgba(0,0,0,0.02),0_24px_48px_-24px_rgba(15,23,42,0.15)] lg:p-8">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                GROW-5<span className="align-super text-[0.6em]">™</span> Framework
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                v.01
              </span>
            </div>

            <ol className="relative">
              {GROW5_STAGES.map((step, i) => (
                <li key={step.slug} className="relative pb-5 last:pb-0">
                  {i < GROW5_STAGES.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[22px] top-12 h-[calc(100%-2.75rem)] w-px bg-border"
                    />
                  )}
                  <div className="flex items-center gap-4 rounded-xl border border-transparent bg-secondary/60 p-3 transition-colors hover:border-border hover:bg-secondary">
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-border bg-background text-accent">
                      <step.icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">
                        <span className="text-accent">{step.code}</span>
                        <span className="text-muted-foreground"> · {step.title}</span>
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        {FLOW_DESC[step.slug]}
                      </p>
                    </div>
                    <span className="ml-auto font-mono text-xs text-muted-foreground">
                      {step.n}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
