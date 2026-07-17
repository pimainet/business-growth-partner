import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const FEATURED = {
  image: '/insight-strategy.png',
  category: 'Chiến lược',
  readTime: '8 phút đọc',
  title: 'Tại sao doanh nghiệp không thiếu công nghệ, mà thiếu một hệ thống',
  excerpt:
    'Đầu tư công cụ mà không có hệ thống kết nối chỉ tạo thêm phức tạp. Bài viết phân tích cách tư duy hệ thống thay đổi cách bạn ra quyết định tăng trưởng.',
}

const POSTS = [
  {
    image: '/insight-automation.png',
    category: 'Vận hành',
    readTime: '6 phút đọc',
    title: 'Tự động hóa vận hành: bắt đầu từ đâu để không rối hệ thống',
  },
  {
    image: '/insight-data.png',
    category: 'Dữ liệu',
    readTime: '5 phút đọc',
    title: 'Bốn chỉ số một CEO cần nhìn mỗi tuần để ra quyết định',
  },
]

export function BusinessInsights() {
  return (
    <section id="insights" className="border-b border-border py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Insights"
            title="Góc nhìn về tăng trưởng doanh nghiệp"
          />
          <Reveal delay={160}>
            <a
              href="#insights"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              Xem tất cả bài viết
              <ArrowUpRight className="size-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal className="group">
            <a href="#insights" className="flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border">
                <Image
                  src={FEATURED.image || '/placeholder.svg'}
                  alt={FEATURED.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">
                  {FEATURED.category}
                </span>
                <span className="size-1 rounded-full bg-border" />
                <span>{FEATURED.readTime}</span>
              </div>
              <h3 className="mt-3 text-pretty text-2xl font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent">
                {FEATURED.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {FEATURED.excerpt}
              </p>
            </a>
          </Reveal>

          <div className="flex flex-col gap-8">
            {POSTS.map((post, i) => (
              <Reveal key={post.title} delay={i * 100} className="group">
                <a
                  href="#insights"
                  className="flex flex-col gap-5 border-b border-border pb-8 last:border-0 last:pb-0 sm:flex-row sm:items-center"
                >
                  <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl border border-border sm:w-44">
                    <Image
                      src={post.image || '/placeholder.svg'}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 176px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">
                        {post.category}
                      </span>
                      <span className="size-1 rounded-full bg-border" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="mt-2 text-pretty text-lg font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent">
                      {post.title}
                    </h3>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
