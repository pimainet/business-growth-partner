import Image from 'next/image'
import { cn } from '@/lib/utils'

/**
 * Logo thật của BGS™ (huy hiệu cờ đỏ sao vàng cách điệu) ghép với wordmark
 * chữ — thay cho icon hình học tạm trước đây. Ảnh gốc chỉ có bản JPG nền ô
 * caro (đã được xử lý bỏ nền); ở kích thước nhỏ trong header, các viền mờ
 * còn sót lại không đáng kể.
 */
export function Logo({
  className,
  variant = 'light',
  showTagline = false,
}: {
  className?: string
  variant?: 'light' | 'dark'
  showTagline?: boolean
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <Image
        src="/logo-bgs-icon.png"
        alt="BGS™"
        width={44}
        height={52}
        className="h-9 w-auto shrink-0 sm:h-10"
        priority
      />
      <span className="flex flex-col leading-none">
        <span
          className={
            variant === 'dark'
              ? 'text-[17px] font-semibold tracking-tight text-navy-foreground'
              : 'text-[17px] font-semibold tracking-tight text-foreground'
          }
        >
          BGS<span className="align-super text-[0.55em] text-accent">™</span>
        </span>
        {showTagline && (
          <span
            className={
              variant === 'dark'
                ? 'mt-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-navy-foreground/50'
                : 'mt-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground'
            }
          >
            Business Growth System
          </span>
        )}
      </span>
    </span>
  )
}
