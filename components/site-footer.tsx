import { Logo } from '@/components/logo'

const COLUMNS = [
  {
    title: 'Hệ thống',
    links: ['Framework', 'Giải pháp', 'Theo ngành', 'Case study'],
  },
  {
    title: 'Công ty',
    links: ['Về chúng tôi', 'Insights', 'Tuyển dụng', 'Liên hệ'],
  },
]

const SOCIAL = ['LinkedIn', 'Facebook', 'YouTube']

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Đối tác xây dựng hệ thống tăng trưởng cho doanh nghiệp Việt Nam.
              Business before technology.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-foreground">Liên hệ</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:hello@systema.vn"
                  className="transition-colors hover:text-foreground"
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
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} BGS™. Bảo lưu mọi quyền.</p>
          <div className="flex gap-6">
            <a href="#top" className="transition-colors hover:text-foreground">
              Điều khoản
            </a>
            <a href="#top" className="transition-colors hover:text-foreground">
              Bảo mật
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
