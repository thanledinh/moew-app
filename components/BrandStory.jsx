import { ArrowRight, Quote } from "lucide-react";

export default function BrandStory() {
  return (
    <section
      id="brand-story"
      className="py-28 bg-gradient-to-br from-[#FFFAF3] to-[#FFF0DC] border-y border-[#EDD9C0]"
      aria-labelledby="brand-story-heading"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Label */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#1C1410] text-[#F5C27A] font-heading font-semibold text-xs px-5 py-2 rounded-full tracking-widest uppercase">
            Câu chuyện thương hiệu
          </span>
        </div>

        {/* Main headline — heavy keyword placement */}
        <h2
          id="brand-story-heading"
          className="font-accent text-4xl lg:text-5xl text-[#2D1A0E] text-center mb-10 leading-tight"
        >
          Tại sao là{" "}
          <span className="text-[#E8834A]">Moew</span>{" "}
          chứ không phải{" "}
          <span className="italic text-[#C96535]">Meow</span>?
        </h2>

        {/* Pull quote */}
        <div className="flex items-start gap-4 bg-white border border-[#EDD9C0] rounded-3xl p-8 mb-10 shadow-sm">
          <Quote
            size={36}
            className="text-[#F5C27A] shrink-0 mt-1"
            aria-hidden="true"
          />
          <p className="font-accent text-xl lg:text-2xl text-[#2D1A0E] leading-relaxed italic">
            "Meow là tiếng mèo kêu — thứ ngôn ngữ không lời mà ai yêu mèo cũng hiểu.
            Moew là cách chúng tôi viết lại điều đó, theo cách của người Việt."
          </p>
        </div>

        {/* Body content — rich Meow keyword + storytelling */}
        <div className="font-body text-[#6B4423] text-lg leading-relaxed space-y-6">
          <p>
            Khi người dùng gõ <strong className="text-[#2D1A0E]">"Meow app"</strong> hay{" "}
            <strong className="text-[#2D1A0E]">"app quản lý mèo"</strong> trên Google,
            họ đang tìm kiếm điều gì? Không chỉ là một công cụ. Họ muốn tìm một người bạn
            đồng hành hiểu được ngôn ngữ{" "}
            <em>Meow</em> của những chú mèo — hiểu được rằng đằng sau tiếng kêu đó
            là nhu cầu được chăm sóc, được yêu thương, và được theo dõi sức khoẻ đúng cách.
          </p>

          <p>
            <strong className="text-[#2D1A0E]">Moew</strong> ra đời từ chính sự bực bội đó.
            Các{" "}
            <em>Meow app</em> quốc tế thì đẹp nhưng không nói tiếng Việt, không hiểu
            cách người Việt chăm mèo — từ chế độ ăn khác biệt, đến việc tìm phòng khám
            thú y đáng tin ở từng thành phố. Còn các app nội địa thì đơn giản đến mức
            nhàm chán.
          </p>

          <p>
            Chúng tôi viết{" "}
            <strong className="text-[#2D1A0E]">Moew</strong> thay vì{" "}
            <strong className="text-[#2D1A0E]">Meow</strong> bởi vì đây là phiên bản{" "}
            <em>made in Vietnam</em> — một{" "}
            <em>Meow app</em> được người Việt xây dựng, cho người Việt, hiểu thói quen và
            tình yêu của người Việt dành cho những người bạn bốn chân.
          </p>

          <p>
            Mỗi khi con mèo của bạn nhìn bạn và kêu lên một tiếng{" "}
            <em className="text-[#C96535] font-semibold">"Meow"</em> — Moew sẽ ở đó
            để giúp bạn hiểu, ghi lại, và chăm sóc tốt hơn. Vì mỗi cú{" "}
            <em className="text-[#C96535] font-semibold">Meow</em> đều có ý nghĩa.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#features"
            className="inline-flex items-center gap-2 text-[#E8834A] font-heading font-semibold text-lg hover:gap-4 transition-all duration-200 group"
          >
            Khám phá Moew ngay
            <ArrowRight
              size={20}
              aria-hidden="true"
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
