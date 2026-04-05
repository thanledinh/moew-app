import { UserPlus, CalendarCheck, HeartHandshake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Tạo hồ sơ thú cưng",
    description:
      "Nhập thông tin cơ bản, cân nặng và thói quen để Moew hiểu về bé mèo của bạn và cá nhân hóa trải nghiệm.",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Thiết lập lịch trình",
    description:
      "Cài đặt lịch cho ăn tự động, lên lịch khám bệnh và ghi chú tất cả thông tin quan trọng cần nhớ.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Kết nối cộng đồng",
    description:
      "Bắt đầu chia sẻ, kết bạn và học hỏi từ các chuyên gia cùng hàng nghìn người yêu thú cưng khác.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-28 bg-[#FFFAF3] border-y border-[#EDD9C0]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-accent text-4xl lg:text-5xl text-[#2D1A0E] mb-4">
            Bắt đầu chỉ trong 3 bước
          </h2>
          <p className="font-body text-lg text-[#7D5335] max-w-xl mx-auto">
            Chỉ mất vài phút thiết lập, Moew sẽ trở thành trợ lý chăm sóc thú
            cưng đắc lực nhất của bạn.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line — only on desktop */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-px bg-[#EDD9C0] z-0" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="flex flex-col items-center text-center relative z-10"
              >
                {/* Step circle */}
                <div className="w-20 h-20 bg-white border-2 border-[#E8834A] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-orange-100">
                  <span className="font-accent text-2xl text-[#C96535]">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-[#FFF0DC] rounded-xl flex items-center justify-center mb-4 text-[#E8834A]">
                  <Icon size={24} aria-hidden="true" />
                </div>

                <h3 className="font-heading font-bold text-xl text-[#2D1A0E] mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-[#6B4423] leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
