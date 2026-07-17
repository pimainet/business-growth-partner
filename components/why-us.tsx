import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const PRINCIPLES = [
  {
    n: '01',
    title: 'System Thinking',
    desc: 'Chúng tôi nhìn doanh nghiệp như một hệ thống, không phải tập hợp các chiến dịch rời rạc.',
  },
  {
    n: '02',
    title: 'Data Driven',
    desc: 'Mọi quyết định dựa trên dữ liệu và bằng chứng, không dựa vào cảm tính.',
  },
  {
    n: '03',
    title: 'Automation First',
    desc: 'Ưu tiên tự động hóa để doanh nghiệp mở rộng mà không tăng độ phức tạp.',
  },
  {
    n: '04',
    title: 'Long-term Partnership',
    desc: 'Chúng tôi đồng hành dài hạn như một đối tác tăng trưởng, không phải nhà cung cấp.',
  },
  {
    n: '05',
    title: 'Business Before Technology',
    desc: 'Bài toán kinh doanh luôn đứng trước công nghệ — công nghệ chỉ là công cụ.',
  },
]

export function WhyUs() {
  return (
    <section className="border-b border-border bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nguyên tắc"
          title="Cách chúng tôi tư duy khác biệt"
          description="Không phải một agency. Đây là những nguyên tắc định hình mọi việc chúng tôi làm cùng doanh nghiệp."
        />

        <div className="mt-16 grid grid-cols-1 divide-y divide-border border-y border-border md:grid-cols-2 md:divide-y-0">
          {PRINCIPLES.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 2) * 90}
              className="group flex gap-6 border-border py-8 md:px-8 md:odd:border-r md:[&:nth-child(-n+3)]:border-b md:first:pl-0 md:even:pr-0"
            >
              <span className="font-mono text-sm text-accent">{p.n}</span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 max-w-md leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="hidden py-8 md:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
