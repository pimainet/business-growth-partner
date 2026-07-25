export interface SiteNavItem {
  label: string
  href: string
  /** Câu hỏi lớn mà trang này trả lời — theo Design Constitution, mỗi trang chỉ trả lời một câu hỏi */
  question: string
}

export const SITE_NAV: SiteNavItem[] = [
  {
    label: 'Home',
    href: '/',
    question: 'Doanh nghiệp của bạn đang thiếu giải pháp... hay đang giải sai vấn đề?',
  },
  {
    label: 'Hiểu doanh nghiệp',
    href: '/hieu-doanh-nghiep',
    question: 'Bạn có chắc mình đang giải đúng vấn đề?',
  },
  {
    label: 'Cách chúng tôi tư duy',
    href: '/cach-tu-duy',
    question: 'Vì sao BGS không đưa ra giải pháp khi chưa hiểu doanh nghiệp?',
  },
  {
    label: 'Báo cáo chẩn đoán',
    href: '/bao-cao-chan-doan',
    question: 'Sau khi chẩn đoán, bạn nhận được gì trong tay?',
  },
  {
    label: 'Câu chuyện doanh nghiệp',
    href: '/cau-chuyen-doanh-nghiep',
    question: 'Những doanh nghiệp khác đã thay đổi thế nào?',
  },
  {
    label: 'Góc nhìn tăng trưởng',
    href: '/goc-nhin-tang-truong',
    question: 'Điều gì đang thật sự ảnh hưởng đến tăng trưởng của bạn?',
  },
  {
    label: 'Giải pháp',
    href: '/giai-phap',
    question: 'Sau khi hiểu vấn đề, phương án nào phù hợp — và khi nào chưa nên dùng?',
  },
  {
    label: 'Về BGS',
    href: '/ve-bgs',
    question: 'Vì sao BGS tồn tại?',
  },
  {
    label: 'Liên hệ',
    href: '/lien-he',
    question: 'Bạn đã sẵn sàng đặt lịch Business Diagnosis chưa?',
  },
]
