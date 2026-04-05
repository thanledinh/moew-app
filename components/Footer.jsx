import Link from "next/link";
import { PawPrint } from "lucide-react";

const footerLinks = {
  "Sản phẩm": [
    { label: "Tính năng", href: "#features" },
    { label: "Hướng dẫn", href: "#how-it-works" },
    { label: "Tải ứng dụng", href: "#download" },
  ],
  "Hỗ trợ": [
    { label: "Trung tâm trợ giúp", href: "#" },
    { label: "Phòng khám đối tác", href: "#" },
    { label: "support@moewcare.app", href: "mailto:support@moewcare.app" },
  ],
  "Cộng đồng": [
    { label: "Facebook Group", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "Blog", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#FDF6EE] border-t border-[#EDD9C0] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <PawPrint className="text-[#E8834A]" size={24} />
              <span className="font-accent text-2xl text-[#C96535]">Moew</span>
            </Link>
            <p className="font-body text-[#A07858] text-sm leading-relaxed max-w-xs">
              Biến việc chăm thú cưng của bạn trở nên đơn giản, vui vẻ và
              thông minh hơn mỗi ngày.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-semibold text-[#2D1A0E] mb-5">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-body text-sm text-[#6B4423] hover:text-[#E8834A] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#EDD9C0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-[#A07858]">
            &copy; 2026 Moew App. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-sm text-[#A07858] hover:text-[#E8834A] transition-colors">
              Chính sách bảo mật
            </a>
            <a href="#" className="font-body text-sm text-[#A07858] hover:text-[#E8834A] transition-colors">
              Điều khoản sử dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
