import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const AREAS = ['Marketing', 'Sales', 'Operations', 'Finance', 'People', 'Technology']

export function SymptomLayers() {
  return (
    <section className="border-b border-border bg-secondary/30 py-28 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Một doanh nghiệp không chỉ có một vấn đề"
          title="Điều bạn nhìn thấy thường chỉ là phần nổi."
          align="center"
        />

        <Reveal delay={140}>
          <div className="mt-14 flex flex-col items-center">
            <div className="rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground">
              Doanh thu giảm
            </div>
            <div className="my-3 h-8 w-px bg-border" />
            <div className="grid w-full grid-cols-2 gap-2.5 border-t border-dashed border-border pt-6 sm:grid-cols-3">
              {AREAS.map((a) => (
                <div
                  key={a}
                  className="rounded-lg border border-border/70 bg-background px-4 py-3 text-center text-sm text-muted-foreground"
                >
                  {a}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div className="mx-auto mt-14 max-w-md rounded-2xl border border-border bg-card p-6 text-center">
            <p className="text-sm font-medium text-foreground">
              Website ít khách.
            </p>
            <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
              Có thể là
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Marketing · hoặc Quy trình bán hàng · hoặc Báo giá · hoặc Chăm
              sóc khách hàng.
            </p>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <p className="mx-auto mt-10 max-w-md text-center text-sm leading-relaxed text-muted-foreground">
            Phía dưới một triệu chứng luôn có nhiều nguyên nhân có thể xảy
            ra — không chỉ một.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
