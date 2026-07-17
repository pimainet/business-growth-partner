import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Newsreader } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['italic', 'normal'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Systema — Đối tác xây dựng hệ thống tăng trưởng doanh nghiệp',
  description:
    'Systema giúp doanh nghiệp thu hút khách hàng, tối ưu bán hàng, tự động hóa vận hành và ra quyết định bằng dữ liệu. Không phải agency — chúng tôi xây dựng hệ thống tăng trưởng.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
