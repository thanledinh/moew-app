import Image from "next/image";
import { Smartphone, QrCode } from "lucide-react";

export default function DownloadCTA() {
  return (
    <section
      id="download"
      className="py-28 bg-gradient-to-br from-[#E8834A] to-[#C96535] relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h2 className="font-accent text-4xl lg:text-6xl text-white mb-6">
          Bắt đầu chăm sóc tốt hơn
        </h2>
        <p className="font-body text-lg lg:text-xl text-white/85 mb-14 max-w-xl mx-auto">
          Tải Moew miễn phí và trải nghiệm các tính năng cơ bản. Nâng cấp lên Premium để mở khoá toàn bộ sức mạnh của AI.
        </p>

        {/* CTA group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-slide-up">
          {/* QR */}
          <div className="bg-white p-4 rounded-2xl shadow-2xl">
            <Image
              src="/images/app-qr.webp"
              alt="QR code tải ứng dụng Moew"
              width={120}
              height={120}
              className="rounded-lg"
            />
            <p className="font-heading text-xs text-[#7D5335] mt-2 text-center font-semibold">
              Quét tải app
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <a
              href="#"
              id="cta-appstore-btn"
              className="flex items-center justify-center gap-3 bg-[#2D1A0E] hover:bg-[#1C1410] text-white font-heading font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
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
              href="#"
              id="cta-googleplay-btn"
              className="flex items-center justify-center gap-3 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white font-heading font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <Smartphone size={20} aria-hidden="true" />
              <span>
                <span className="block text-xs text-white/60 font-body font-normal leading-none mb-0.5">
                  Tải trên
                </span>
                Google Play
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
