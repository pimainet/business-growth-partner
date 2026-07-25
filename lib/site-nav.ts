export interface SiteNavItem {
  label: string
  href: string
  /** Câu hỏi lớn mà trang này trả lời — theo Design Constitution, mỗi trang chỉ trả lời một câu hỏi */
  question: string
  /** true = nằm trong hành trình chính (Nhận ra vấn đề → ... → Triển khai); false = nội dung phụ trợ, truy cập bất cứ lúc nào */
  journey: boolean
}

// Thứ tự mảng = thứ tự hành trình khách hàng, không phải thứ tự menu ngang hàng.
// Xem docs/page-strategy.md mục 1 (Customer Journey) và mục 2 (Product Architecture).
export const SITE_NAV: SiteNavItem[] = [
  {
    label: 'Home',
    href: '/',
    question: 'Doanh nghiệp của bạn đang thiếu giải pháp... hay đang giải sai vấn đề?',
    journey: true,
  },
  {
    label: 'Hiểu doanh nghiệp',
    href: '/hieu-doanh-nghiep',
    question: 'Bạn có chắc mình đang giải đúng vấn đề?',
    journey: true,
  },
  {
    // Nhãn cũ "Cách chúng tôi tư duy" xuất phát từ góc nhìn BGS.
    // Đổi sang góc nhìn CEO theo phản biện trong page-strategy.md.
    label: 'Vì sao doanh nghiệp thường giải sai vấn đề?',
    href: '/cach-tu-duy',
    question: 'Vì sao doanh nghiệp thường giải sai vấn đề?',
    journey: true,
  },
  {
    label: 'Báo cáo chẩn đoán',
    href: '/bao-cao-chan-doan',
    question: 'Sau khi chẩn đoán, bạn nhận được gì trong tay?',
    journey: true,
  },
  {
    label: 'Câu chuyện doanh nghiệp',
    href: '/cau-chuyen-doanh-nghiep',
    question: 'Những doanh nghiệp khác đã thay đổi thế nào?',
    journey: true,
  },
  {
    label: 'Giải pháp',
    href: '/giai-phap',
    question: 'Sau khi hiểu vấn đề, phương án nào phù hợp — và khi nào chưa nên dùng?',
    journey: true,
  },
  {
    label: 'Liên hệ',
    href: '/lien-he',
    question: 'Bạn đã sẵn sàng đặt lịch Business Diagnosis chưa?',
    journey: true,
  },
  {
    label: 'Góc nhìn tăng trưởng',
    href: '/goc-nhin-tang-truong',
    question: 'Điều gì đang thật sự ảnh hưởng đến tăng trưởng của bạn?',
    journey: false,
  },
  {
    label: 'Về BGS',
    href: '/ve-bgs',
    question: 'Vì sao BGS tồn tại?',
    journey: false,
  },
]
