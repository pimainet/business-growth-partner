export interface SiteNavItem {
  label: string
  href: string
  /** Câu hỏi lớn mà trang này trả lời — theo Design Constitution, mỗi trang chỉ trả lời một câu hỏi */
  question: string
  /** true = nằm trong hành trình chính (Nhận ra vấn đề → ... → Triển khai); false = nội dung phụ trợ */
  journey: boolean
  /**
   * Nhãn ngắn cho header — theo phản biện "menu quá dài, giống tiêu đề bài
   * viết chứ không phải menu". Header dùng navLabel, footer/page title dùng
   * label đầy đủ.
   */
  navLabel: string
  /** Số thứ tự trong hành trình chính, dùng cho step-indicator ở header */
  step?: number
}

// Thứ tự mảng = thứ tự hành trình khách hàng, không phải thứ tự menu ngang hàng.
// Xem docs/page-strategy.md mục 1 (Customer Journey) và mục 2 (Product Architecture).
export const SITE_NAV: SiteNavItem[] = [
  {
    label: 'Home',
    href: '/',
    question: 'Doanh nghiệp của bạn đang thiếu giải pháp... hay đang giải sai vấn đề?',
    journey: true,
    navLabel: 'Home',
  },
  {
    label: 'Hiểu doanh nghiệp',
    href: '/hieu-doanh-nghiep',
    question: 'Bạn có chắc mình đang giải đúng vấn đề?',
    journey: true,
    navLabel: 'Hiểu doanh nghiệp',
    step: 1,
  },
  {
    // Nhãn dài "Vì sao doanh nghiệp thường giải sai vấn đề?" vẫn là tiêu đề
    // (question) của trang — chỉ nav dùng bản ngắn "Phương pháp".
    label: 'Vì sao doanh nghiệp thường giải sai vấn đề?',
    href: '/cach-tu-duy',
    question: 'Vì sao doanh nghiệp thường giải sai vấn đề?',
    journey: true,
    navLabel: 'Framework',
    step: 2,
  },
  {
    label: 'Báo cáo chẩn đoán',
    href: '/bao-cao-chan-doan',
    question: 'Sau khi chẩn đoán, bạn nhận được gì trong tay?',
    journey: true,
    navLabel: 'Business Diagnosis™',
    step: 3,
  },
  {
    label: 'Câu chuyện doanh nghiệp',
    href: '/cau-chuyen-doanh-nghiep',
    question: 'Những doanh nghiệp khác đã thay đổi thế nào?',
    journey: true,
    navLabel: 'Case Study',
    step: 4,
  },
  {
    label: 'Giải pháp',
    href: '/giai-phap',
    question: 'Sau khi hiểu vấn đề, phương án nào phù hợp — và khi nào chưa nên dùng?',
    journey: true,
    navLabel: 'Giải pháp',
    step: 5,
  },
  {
    label: 'Liên hệ',
    href: '/lien-he',
    question: 'Bạn đã sẵn sàng đặt lịch Business Diagnosis chưa?',
    journey: true,
    navLabel: 'Liên hệ',
    step: 6,
  },
  {
    label: 'Góc nhìn tăng trưởng',
    href: '/goc-nhin-tang-truong',
    question: 'Điều gì đang thật sự ảnh hưởng đến tăng trưởng của bạn?',
    journey: false,
    navLabel: 'Tri thức',
  },
  {
    label: 'Về BGS',
    href: '/ve-bgs',
    question: 'Vì sao BGS tồn tại?',
    journey: false,
    navLabel: 'BGS',
  },
]

export const JOURNEY_STEPS = SITE_NAV.filter((i) => i.journey && i.step)
