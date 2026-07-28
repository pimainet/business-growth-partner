'use client'

import { useState } from 'react'
import {
  Megaphone,
  Handshake,
  Workflow,
  Wallet,
  Users,
  Cpu,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

interface Lens {
  key: string
  label: string
  icon: LucideIcon
  quanSat: string
  duLieu: string
  saiLam: string
}

const LENSES: Lens[] = [
  {
    key: 'marketing',
    label: 'Marketing',
    icon: Megaphone,
    quanSat: 'Khách hàng tiềm năng đến từ đâu, và có đều đặn theo thời gian không.',
    duLieu: 'Số lượt tiếp cận, số lead theo từng kênh, chi phí cho mỗi kênh.',
    saiLam: 'Đổ tiền vào quảng cáo trước khi biết kênh nào đang thực sự hiệu quả.',
  },
  {
    key: 'sales',
    label: 'Sales',
    icon: Handshake,
    quanSat: 'Từ lúc khách quan tâm đến lúc chốt đơn mất bao lâu, và rơi rụng ở bước nào.',
    duLieu: 'Tỷ lệ chuyển đổi theo từng bước, thời gian phản hồi báo giá.',
    saiLam: 'Nghĩ vấn đề là "không đủ khách" trong khi thực ra khách có nhưng chốt kém.',
  },
  {
    key: 'operations',
    label: 'Operations',
    icon: Workflow,
    quanSat: 'Công việc có được làm theo một quy trình chung, hay mỗi người một kiểu.',
    duLieu: 'Thời gian xử lý trung bình từng công đoạn, tỷ lệ lỗi phải làm lại.',
    saiLam: 'Chấp nhận sự chậm trễ như "chuyện bình thường của ngành" thay vì đo lường nó.',
  },
  {
    key: 'finance',
    label: 'Finance',
    icon: Wallet,
    quanSat: 'Dịch vụ hoặc sản phẩm nào đang thực sự có lãi, cái nào đang âm thầm lỗ.',
    duLieu: 'Lợi nhuận theo từng dòng dịch vụ, không chỉ doanh thu tổng.',
    saiLam: 'Đánh giá hiệu quả kinh doanh chỉ bằng doanh thu, bỏ qua chi phí ẩn.',
  },
  {
    key: 'people',
    label: 'People',
    icon: Users,
    quanSat: 'Ai đang là điểm nghẽn duy nhất khiến công việc ngừng trệ khi họ vắng mặt.',
    duLieu: 'Khối lượng công việc theo từng vị trí, mức độ phụ thuộc vào cá nhân.',
    saiLam: 'Tuyển thêm người trước khi chuẩn hóa quy trình cho người hiện có.',
  },
  {
    key: 'technology',
    label: 'Technology',
    icon: Cpu,
    quanSat: 'Các công cụ đang dùng có "nói chuyện" được với nhau, hay dữ liệu nằm rời rạc.',
    duLieu: 'Danh sách công cụ đang dùng và mức độ liên kết dữ liệu giữa chúng.',
    saiLam: 'Mua thêm phần mềm mới trước khi biết phần mềm cũ có đang được dùng hết công suất.',
  },
]

export function BusinessLensMap() {
  const [active, setActive] = useState<Lens>(LENSES[0])

  return (
    <section id="business-lens" className="border-b border-border py-32 lg:py-40">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Đây là trái tim của trang"
          title="BGS nhìn doanh nghiệp như thế nào?"
          align="center"
        />

        <Reveal delay={140}>
          <div className="mt-14 flex flex-col items-center gap-3">
            <div className="grid size-20 place-items-center rounded-full border border-accent/30 bg-accent/10 text-sm font-semibold text-accent">
              CEO
            </div>
            <p className="text-xs text-muted-foreground">
              Bấm vào từng góc để xem BGS quan sát điều gì
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mx-auto mt-6 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3">
            {LENSES.map((lens) => {
              const isActive = active.key === lens.key
              return (
                <button
                  key={lens.key}
                  type="button"
                  onClick={() => setActive(lens)}
                  className={cn(
                    'flex flex-col items-center gap-2 rounded-xl border px-4 py-5 text-center transition-colors',
                    isActive
                      ? 'border-accent bg-accent/10'
                      : 'border-border bg-card hover:border-accent/30',
                  )}
                >
                  <span
                    className={cn(
                      'grid size-10 place-items-center rounded-lg',
                      isActive
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-secondary text-foreground/70',
                    )}
                  >
                    <lens.icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <span
                    className={cn(
                      'text-sm font-medium',
                      isActive ? 'text-foreground' : 'text-muted-foreground',
                    )}
                  >
                    {lens.label}
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={260}>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-border bg-card p-7 lg:p-9">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-lg bg-accent/10 text-accent">
                <active.icon className="size-5" strokeWidth={1.5} />
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {active.label}
              </h3>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Quan sát điều gì?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  {active.quanSat}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Dữ liệu gì cần có?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  {active.duLieu}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Sai lầm thường gặp?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  {active.saiLam}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
