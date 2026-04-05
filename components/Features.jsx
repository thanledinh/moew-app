import Image from "next/image";
import {
  UtensilsCrossed,
  Sparkles,
  Users,
  ShieldCheck,
  HeartPulse,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: UtensilsCrossed,
    title: "Hệ thống cho ăn thông minh",
    description:
      "Kế hoạch cá nhân hóa, nhắc nhở đúng giờ và theo dõi dinh dưỡng hằng ngày được tối ưu hóa riêng cho độ tuổi và cân nặng của mèo nhà bạn.",
    image: "/images/feature-feeding.webp",
    alt: "Màn hình quản lý lịch cho ăn của mèo trong ứng dụng Moew",
    badge: "Dinh dưỡng thông minh",
  },
  {
    icon: Sparkles,
    title: "AI Phân Tích Thức Ăn",
    description:
      "Chỉ cần chụp ảnh bao bì thức ăn, AI của Moew sẽ lập tức phân tích thành phần, độ phù hợp và cảnh báo những chất không tốt cho thú cưng của bạn.",
    image: "/images/feature-ai.webp",
    alt: "Màn hình AI quét và phân tích thức ăn cho mèo",
    badge: "Công nghệ AI",
  },
  {
    icon: Users,
    title: "Mạng Xã Hội Thú Cưng",
    description:
      "Chia sẻ khoảnh khắc đáng yêu, theo dõi và kết nối với cộng đồng những người yêu mèo trên khắp Việt Nam.",
    image: "/images/feature-social-v2.webp",
    alt: "Feed mạng xã hội chia sẻ ảnh thú cưng trong ứng dụng Moew",
    badge: "Cộng đồng",
  },
  {
    icon: ShieldCheck,
    title: "SOS Khẩn Cấp",
    description:
      "Định vị phòng khám thú y gần nhất trên bản đồ. Gửi cảnh báo khẩn cấp đến toàn bộ cộng đồng xung quanh chỉ trong một lần chạm.",
    image: "/images/feature-sos.webp",
    alt: "Màn hình SOS và bản đồ tìm phòng khám thú y",
    badge: "An toàn & Khẩn cấp",
  },
  {
    icon: HeartPulse,
    title: "Hồ Sơ Y Tế Toàn Diện",
    description:
      "Lưu trữ bệnh sử số hóa, tự động nhắc nhở lịch tiêm ngừa, tẩy giun và theo dõi sự phát triển thể chất của bé theo từng giai đoạn.",
    image: null,
    alt: null,
    badge: "Sức khoẻ",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 bg-[#FDF6EE]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-accent text-4xl lg:text-5xl text-[#2D1A0E] mb-4">
            Chăm sóc thú cưng dễ dàng hơn
          </h2>
          <p className="font-body text-lg text-[#7D5335] max-w-2xl mx-auto">
            Moew mang đến những công cụ hữu ích nhất giúp bạn hiểu và chăm sóc
            người bạn 4 chân tốt nhất.
          </p>
        </div>

        {/* Feature rows */}
        <div className="flex flex-col gap-28">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isEven = i % 2 === 0;

            return (
              <div
                key={feature.title}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 lg:gap-20`}
              >
                {/* Text */}
                <div className="flex-1 text-center lg:text-left">
                  <span className="inline-block bg-[#FFF0DC] text-[#C96535] font-heading font-semibold text-xs px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                    {feature.badge}
                  </span>
                  <div className="w-14 h-14 bg-[#FFFAF3] border border-[#EDD9C0] rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0 text-[#E8834A]">
                    <Icon size={28} aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-bold text-3xl lg:text-4xl text-[#2D1A0E] mb-4">
                    {feature.title}
                  </h3>
                  <p className="font-body text-[#6B4423] text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                    {feature.description}
                  </p>
                  <a
                    href="#download"
                    className="inline-flex items-center gap-2 text-[#E8834A] font-heading font-semibold hover:gap-3 transition-all duration-200 group"
                  >
                    Khám phá thêm
                    <ArrowRight
                      size={18}
                      aria-hidden="true"
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>

                {/* Image */}
                <div className="flex-1 flex justify-center">
                  {feature.image ? (
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#F5C27A]/30 to-[#E8834A]/10 rounded-3xl transform rotate-3 scale-105" />
                      <Image
                        src={feature.image}
                        alt={feature.alt}
                        width={400}
                        height={800}
                        className="relative rounded-3xl shadow-2xl max-w-[320px] w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="w-full max-w-[320px] aspect-[9/16] bg-gradient-to-br from-[#FFFAF3] to-[#FFF0DC] rounded-3xl border border-[#EDD9C0] flex items-center justify-center shadow-xl">
                      <Icon size={120} className="text-[#E8834A]/30" aria-hidden="true" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
