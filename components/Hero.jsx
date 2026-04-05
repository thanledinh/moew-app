import Image from "next/image";
import { Smartphone, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-br from-[#FDF6EE] to-[#FFF0DC]">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-[#FFFAF3] border border-[#EDD9C0] px-4 py-2 rounded-full mb-6 text-sm font-heading font-semibold text-[#6B4423]">
              <Star size={14} className="text-[#F5C27A] fill-[#F5C27A]" />
              Freemium — Tải miễn phí, nâng cấp khi cần
            </div>

            <h1 className="font-accent text-5xl lg:text-6xl xl:text-7xl text-[#2D1A0E] mb-6 leading-[1.1]">
              Người bạn đồng hành{" "}
              <span className="text-[#C96535]">thông minh</span> cho thú cưng
              của bạn
            </h1>

            <p className="font-body text-lg lg:text-xl text-[#6B4423] mb-10 max-w-xl mx-auto lg:mx-0">
              Nếu bạn đang tìm kiếm một{" "}
              <span className="font-semibold text-[#C96535]">Meow app</span>{" "}
              thật sự thông minh, Moew chính là câu trả lời — quản lý sức khỏe,
              lịch ăn, kết nối cộng đồng trong một app dành riêng cho người Việt.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <a
                href="#download"
                id="hero-app-store-btn"
                className="flex items-center justify-center gap-3 bg-[#2D1A0E] hover:bg-[#1C1410] text-white font-heading font-semibold px-7 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              >
                <Smartphone size={20} aria-hidden="true" />
                <span>
                  <span className="block text-xs text-white/60 font-body font-normal leading-none mb-0.5">
                    Tải trên
                  </span>
                  App Store
                </span>
              </a>
              <a
                href="#download"
                id="hero-google-play-btn"
                className="flex items-center justify-center gap-3 bg-white border-2 border-[#EDD9C0] hover:border-[#E8834A] hover:bg-[#FFF6EE] text-[#2D1A0E] font-heading font-semibold px-7 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Smartphone size={20} aria-hidden="true" />
                <span>
                  <span className="block text-xs text-[#7D5335] font-body font-normal leading-none mb-0.5">
                    Tải trên
                  </span>
                  Google Play
                </span>
              </a>
            </div>

            {/* QR Code */}
            <div className="inline-flex items-center gap-4 bg-white border border-[#EDD9C0] rounded-2xl p-3 shadow-sm">
              <Image
                src="/images/app-qr.webp"
                alt="QR code quét tải ứng dụng Moew"
                width={64}
                height={64}
                className="rounded-lg"
                loading="eager"
              />
              <div>
                <p className="font-heading font-semibold text-sm text-[#2D1A0E]">
                  Quét để tải ngay
                </p>
                <p className="text-xs text-[#7D5335] font-body mt-0.5">
                  iOS & Android
                </p>
              </div>
            </div>
          </div>

          {/* Right: Mockup */}
          <div className="flex-1 relative flex justify-center items-center">
            {/* Floating badge */}
            <div className="absolute top-4 right-4 lg:right-0 z-10 animate-float-slow">
              <div className="bg-[#1C1410] text-[#F5C27A] px-5 py-3 rounded-full font-heading font-semibold text-sm flex items-center gap-2 shadow-2xl">
                <Star size={16} className="fill-[#F5C27A]" aria-hidden="true" />
                Tải miễn phí
              </div>
            </div>

            {/* Decorative background blob */}
            <div className="absolute w-80 h-80 bg-[#F5C27A]/20 rounded-full blur-3xl -z-10" />

            <div className="animate-float">
              <Image
                src="/images/hero-mockup-v2.webp"
                alt="Giao diện ứng dụng Moew hiển thị trên điện thoại"
                width={380}
                height={760}
                className="drop-shadow-2xl max-w-[320px] lg:max-w-[380px] w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
