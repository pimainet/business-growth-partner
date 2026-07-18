import { Reveal } from '@/components/reveal'

export function ManifestoStrip() {
  return (
    <section className="border-b border-border bg-navy py-18 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <p className="text-balance text-xl font-medium leading-snug tracking-tight text-navy-foreground sm:text-2xl lg:text-[1.7rem]">
            Chúng tôi không triển khai từng dịch vụ riêng lẻ.{' '}
            <span className="text-navy-foreground/55">
              Chúng tôi thiết kế một hệ thống để các hoạt động Marketing,
              Sales và Vận hành phối hợp với nhau.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
