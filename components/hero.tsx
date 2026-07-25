import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

/**
 * Không dùng ảnh, không dùng video, không dùng dashboard minh họa.
 * Chỉ khoảng trắng và một câu hỏi — đúng tinh thần "Website không phải để
 * giới thiệu BGS", mà để người xem tự hỏi lại chính mình trước.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative border-b border-border pt-16"
    >
      <div className="relative mx-auto flex min-h-[86vh] max-w-3xl flex-col items-center justify-center px-6 py-28 text-center lg:px-8">
        <Reveal>
          <h1 className="text-balance text-3xl font-semibold leading-[1.25] tracking-[-0.01em] text-foreground sm:text-4xl lg:text-[2.75rem]">
            Doanh nghiệp của bạn đang{' '}
            <span className="font-serif italic font-normal">
              thiếu giải pháp
            </span>
            ... hay đang{' '}
            <span className="font-serif italic font-normal">
              giải sai vấn đề?
            </span>
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mx-auto mt-8 max-w-xl text-pretty text-base leading-[1.8] text-muted-foreground">
            Nhiều doanh nghiệp đầu tư website, SEO, quảng cáo hay AI nhưng
            kết quả vẫn không như kỳ vọng. Không phải vì những giải pháp đó
            không tốt. Mà vì chưa ai giúp họ xác định đúng vấn đề cần giải
            quyết.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-[1.8] text-muted-foreground">
            BGS giúp doanh nghiệp nhìn rõ hiện trạng, xác định đúng nguyên
            nhân và ưu tiên đúng việc cần làm — trước khi đầu tư vào bất kỳ
            giải pháp nào.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-11">
            <a
              href="#assessment"
              className="btn-glow btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-accent"
            >
              Bắt đầu chẩn đoán doanh nghiệp
              <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
