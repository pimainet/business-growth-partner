import { X, Check, ArrowDown } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const WRONG_PATH = ['Doanh thu giảm', 'Làm Website', 'Chạy Quảng cáo', 'Làm SEO', 'Dùng AI']
const RIGHT_PATH = [
  'Doanh thu giảm',
  'Chẩn đoán',
  'Xác định nguyên nhân',
  'Ưu tiên việc cần làm',
  'Triển khai giải pháp',
]

function PathColumn({
  items,
  variant,
}: {
  items: string[]
  variant: 'wrong' | 'right'
}) {
  const isWrong = variant === 'wrong'
  return (
    <div className="flex flex-col items-center">
      {items.map((item, i) => (
        <div key={item} className="flex flex-col items-center">
          <div
            className={
              i === 0
                ? 'rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-foreground'
                : isWrong
                  ? 'rounded-xl border border-destructive/25 bg-destructive/5 px-5 py-3 text-sm text-foreground/80'
                  : 'rounded-xl border border-accent/25 bg-accent/5 px-5 py-3 text-sm text-foreground/80'
            }
          >
            {item}
          </div>
          {i < items.length - 1 && (
            <ArrowDown className="my-2 size-4 text-muted-foreground/40" strokeWidth={1.5} />
          )}
        </div>
      ))}
      <div className="mt-3">
        {isWrong ? (
          <span className="grid size-8 place-items-center rounded-full bg-destructive/10 text-destructive">
            <X className="size-4" strokeWidth={2.5} />
          </span>
        ) : (
          <span className="grid size-8 place-items-center rounded-full bg-accent/10 text-accent">
            <Check className="size-4" strokeWidth={2.5} />
          </span>
        )}
      </div>
    </div>
  )
}

export function DiagnosisFirst() {
  return (
    <section className="border-b border-border py-32 lg:py-40">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Đừng vội tìm giải pháp"
          title="Phần lớn doanh nghiệp không thiếu giải pháp. Họ thiếu một bản chẩn đoán."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-8">
          <Reveal>
            <PathColumn items={WRONG_PATH} variant="wrong" />
          </Reveal>
          <Reveal delay={100}>
            <PathColumn items={RIGHT_PATH} variant="right" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
