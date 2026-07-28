import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const LAYERS = ['Doanh nghiệp', 'Marketing', 'Sales', 'Operations', 'Finance', 'Technology']

export function PageHero() {
  return (
    <section className="border-b border-border pt-16 lg:pt-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-8 lg:py-28">
        <div>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Hiểu doanh nghiệp
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-balance text-3xl font-semibold leading-[1.25] tracking-[-0.01em] text-foreground sm:text-4xl lg:text-[2.6rem]">
              Bạn đang nhìn thấy{' '}
              <span className="font-serif italic font-normal">vấn đề</span>...
              hay chỉ đang nhìn thấy{' '}
              <span className="font-serif italic font-normal">triệu chứng?</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-lg text-pretty text-base leading-[1.8] text-muted-foreground">
              Nhiều doanh nghiệp đầu tư Website, SEO, AI hoặc tuyển thêm nhân
              sự nhưng kết quả vẫn không cải thiện.
            </p>
            <p className="mt-4 max-w-lg text-pretty text-base leading-[1.8] text-muted-foreground">
              Không phải vì giải pháp đó không tốt. Mà vì doanh nghiệp chưa
              xác định đúng vấn đề cần giải quyết.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <a
              href="#business-lens"
              className="btn-glow btn-shine mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-accent"
            >
              Khám phá cách BGS chẩn đoán doanh nghiệp
              <ArrowRight className="size-4" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={140} className="flex justify-center">
          <div className="flex w-full max-w-xs flex-col gap-2.5">
            {LAYERS.map((l, i) => (
              <div
                key={l}
                className={
                  i === 0
                    ? 'rounded-xl border border-border bg-card px-5 py-3.5 text-center text-sm font-semibold text-foreground'
                    : 'rounded-xl border border-border/70 bg-secondary/40 px-5 py-3 text-center text-sm text-muted-foreground'
                }
                style={{ marginLeft: i === 0 ? 0 : `${Math.min(i, 3) * 6}px` }}
              >
                {l}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
