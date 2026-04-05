import { Sparkles, ShieldCheck, HeartPulse } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    title: "AI đầu tiên tại Việt Nam",
    desc: "Phân tích thức ăn thú cưng bằng AI — tính năng chưa có app nào trong nước làm được.",
  },
  {
    icon: ShieldCheck,
    title: "Freemium — Linh hoạt theo nhu cầu",
    desc: "Tải và dùng miễn phí các tính năng cơ bản. Nâng cấp Premium để mở khoá AI và nhiều tính năng nâng cao hơn.",
  },
  {
    icon: HeartPulse,
    title: "Sắp ra mắt chính thức",
    desc: "Hiện đang trong giai đoạn beta. Đăng ký sớm để nhận thông báo đầu tiên khi app lên store.",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#1C1410] py-20" aria-label="Điểm nổi bật của Moew App">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
          {pillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex flex-col items-center gap-4 ${
                  i < pillars.length - 1 ? "md:border-r md:border-white/10" : ""
                } px-4`}
              >
                <div className="w-14 h-14 bg-[#F5C27A]/10 border border-[#F5C27A]/20 rounded-2xl flex items-center justify-center">
                  <Icon size={28} className="text-[#F5C27A]" aria-hidden="true" />
                </div>
                <h2 className="font-heading font-bold text-xl text-white">
                  {item.title}
                </h2>
                <p className="font-body text-sm text-white/55 leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

