import { ArrowLeft } from 'lucide-react'
import { Reveal } from '@/components/reveal'

/**
 * Khung sườn dùng chung cho các trang chưa viết nội dung.
 * Theo Design Constitution: mỗi trang mở đầu bằng đúng một câu hỏi lớn,
 * không kết luận khi chưa có dữ liệu — nên thay vì dựng nội dung giả,
 * trang ghi rõ đây là khung sườn đang chờ nội dung thật.
 */
export function PageSkeleton({
  eyebrow,
  question,
}: {
  eyebrow: string
  question: string
}) {
  return (
    <section className="border-b border-border pt-16">
      <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 py-28 text-center lg:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-5 text-balance text-3xl font-semibold leading-[1.25] tracking-[-0.01em] text-foreground sm:text-4xl">
            {question}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-8 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            Dữ liệu hiện tại chưa đủ để dựng nội dung trang này — đây là
            khung sườn theo đúng cấu trúc điều hướng, nội dung thật sẽ được
            viết theo Design Constitution ở bước tiếp theo.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <a
            href="/"
            className="mt-9 inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <ArrowLeft className="size-4" />
            Về trang chủ
          </a>
        </Reveal>
      </div>
    </section>
  )
}
