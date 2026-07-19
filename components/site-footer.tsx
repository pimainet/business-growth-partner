import { Logo } from '@/components/logo'
import { Grow5Glyph } from '@/components/grow5-glyph'

const COLUMNS = [
  {
    title: 'Hệ thống',
    links: ['Đánh giá doanh nghiệp', 'Phương pháp', 'Giải pháp', 'Dự án'],
  },
  {
    title: 'Công ty',
    links: ['Về chúng tôi', 'Kiến thức', 'Tuyển dụng', 'Liên hệ'],
  },
]

const SOCIAL = ['LinkedIn', 'Facebook', 'YouTube']

/**
 * Footer tối — bước cuối của nhịp nền toàn trang
 * (trắng → xám → trắng → gradient → dark footer).
 */
export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy">
      <div className="pointer-events-none absolute inset-0 bg-grid-navy opacity-40" />
      <Grow5Glyph className="pointer-events-none absolute -right-16 -top-24 size-80 text-navy-foreground/[0.04]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="dark" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-foreground/55">
              Đối tác xây dựng hệ thống tăng trưởng cho doanh nghiệp Việt Nam.
              Business before technology.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-navy-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-navy-foreground/55 transition-colors hover:text-navy-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-navy-foreground">
              Liên hệ
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-navy-foreground/55">
              <li>
                <a
                  href="mailto:hello@systema.vn"
                  className="transition-colors hover:text-navy-foreground"
                >
                  hello@systema.vn
                </a>
              </li>
              <li>Hà Nội · TP. Hồ Chí Minh</li>
            </ul>
            <div className="mt-4 flex gap-4">
              {SOCIAL.map((s) => (
                <a
                  key={s}
                  href="#top"
                  className="text-sm text-navy-foreground/55 transition-colors hover:text-navy-foreground"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-navy-foreground/55 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} BGS™. Bảo lưu mọi quyền.</p>
          <div className="flex gap-6">
            <a href="#top" className="transition-colors hover:text-navy-foreground">
              Điều khoản
            </a>
            <a href="#top" className="transition-colors hover:text-navy-foreground">
              Bảo mật
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
