import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const INDUSTRIES = [
  {
    name: 'Nội thất',
    image: '/industry-furniture.png',
    intro: 'Chu kỳ mua dài, giá trị đơn hàng cao.',
    pains: [
      'Khách tham khảo nhiều nơi trước khi quyết định',
      'Khó nuôi dưỡng khách hàng tiềm năng dài hạn',
      'Showroom và online chưa kết nối dữ liệu',
    ],
  },
  {
    name: 'Spa & Thẩm mỹ',
    image: '/industry-spa.png',
    intro: 'Cạnh tranh cao, phụ thuộc khách quay lại.',
    pains: [
      'Chi phí quảng cáo tăng, khó giữ chân khách',
      'Đặt lịch và chăm sóc còn thủ công',
      'Chưa đo được giá trị khách hàng trọn đời',
    ],
  },
  {
    name: 'Kinh doanh Online',
    image: '/industry-online.png',
    intro: 'Nhiều kênh, dữ liệu phân mảnh.',
    pains: [
      'Đơn hàng đến từ nhiều nền tảng khác nhau',
      'Vận hành và tồn kho khó kiểm soát',
      'Không rõ kênh nào thực sự sinh lời',
    ],
  },
]

export function Industries() {
  return (
    <section
      id="industries"
      className="border-b border-border bg-secondary/40 py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Theo ngành"
          title="Giải pháp theo ngành"
          description="Chúng tôi hiểu đặc thù từng ngành và điều chỉnh hệ thống tăng trưởng cho phù hợp với mô hình kinh doanh của bạn."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal
              key={ind.name}
              delay={i * 90}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={ind.image || '/placeholder.svg'}
                  alt={`Ngành ${ind.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                <h3 className="absolute bottom-4 left-5 text-xl font-semibold tracking-tight text-primary-foreground">
                  {ind.name}
                </h3>
              </div>

              <div className="relative p-6">
                <p className="text-sm text-muted-foreground">{ind.intro}</p>

                <div className="mt-4 grid grid-rows-[0fr] transition-all duration-500 group-hover:mt-5 group-hover:grid-rows-[1fr]">
                  <ul className="overflow-hidden">
                    <li className="mb-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                      Điểm nghẽn thường gặp
                    </li>
                    {ind.pains.map((pain) => (
                      <li
                        key={pain}
                        className="flex items-start gap-2 py-1 text-sm leading-relaxed text-foreground"
                      >
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                        {pain}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
