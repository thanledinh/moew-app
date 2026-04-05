import { PawPrint, MessageCircleHeart, UsersRound } from "lucide-react";

const perks = [
  {
    icon: PawPrint,
    title: "Trải nghiệm sớm nhất",
    desc: "Bạn sẽ là những người đầu tiên dùng Moew khi app chính thức lên store.",
  },
  {
    icon: MessageCircleHeart,
    title: "Phản hồi được lắng nghe",
    desc: "Ý kiến của beta tester trực tiếp định hình tính năng của app trong tương lai.",
  },
  {
    icon: UsersRound,
    title: "Cộng đồng sáng lập",
    desc: "Gia nhập nhóm những người yêu mèo đầu tiên xây dựng cộng đồng Moew từ những ngày đầu.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-[#FDF6EE]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="inline-block bg-[#FFF0DC] text-[#C96535] font-heading font-semibold text-xs px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase">
            Sắp ra mắt
          </span>
          <h2 className="font-accent text-4xl lg:text-5xl text-[#2D1A0E] mb-4">
            Bạn có muốn là người đầu tiên?
          </h2>
          <p className="font-body text-lg text-[#7D5335] max-w-xl mx-auto">
            Moew đang trong giai đoạn beta. Chúng tôi đang tìm kiếm những người yêu mèo muốn
            thử nghiệm app và đóng góp ý kiến thật sự.
          </p>
        </div>

        {/* Perk cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-16">
          {perks.map((perk) => {
            const Icon = perk.icon;
            return (
              <div
                key={perk.title}
                className="bg-[#FFFAF3] border border-[#EDD9C0] rounded-3xl p-8 flex flex-col gap-4 text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-[#FFF0DC] rounded-2xl flex items-center justify-center mx-auto text-[#E8834A]">
                  <Icon size={28} aria-hidden="true" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#2D1A0E]">
                  {perk.title}
                </h3>
                <p className="font-body text-[#6B4423] text-sm leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Honest note */}
        <div className="text-center bg-[#FFFAF3] border border-[#EDD9C0] rounded-3xl p-10 max-w-2xl mx-auto">
          <p className="font-body text-[#6B4423] text-base leading-relaxed mb-6">
            App chưa chính thức ra mắt nên chúng tôi chưa có đánh giá thật từ người dùng.
            Hãy tải app khi có mặt trên store và là người đầu tiên để lại nhận xét nhé!
          </p>
          <a
            href="#download"
            className="inline-flex items-center gap-2 bg-[#E8834A] hover:bg-[#C96535] text-white font-heading font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-200"
          >
            Đăng ký nhận thông báo
          </a>
        </div>
      </div>
    </section>
  );
}

