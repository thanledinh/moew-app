import { Plus_Jakarta_Sans, Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
  weight: "400",
});

export const metadata = {
  title: "MoewCare | Ứng Dụng Chăm Sóc Chuẩn Meow Cho Thú Cưng",
  description:
    "Bạn đang tìm một Meow app tốt nhất? MoewCare là ứng dụng quản lý thú cưng toàn diện: lịch ăn AI, hồ sơ y tế, cộng đồng Meow và SOS khẩn cấp. Miễn phí tải về, nâng cấp Premium để mở khoá AI.",
  metadataBase: new URL("https://moewcare.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "MoewCare | Ứng Dụng Chăm Sóc Chuẩn Meow Cho Thú Cưng",
    description:
      "Bạn đang tìm Meow app tốt nhất? MoewCare có lịch ăn AI, hồ sơ y tế, cộng đồng Meow và SOS khẩn cấp.",
    url: "https://moewcare.app",
    siteName: "Moew App",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Moew App - Ứng dụng quản lý thú cưng thông minh",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoewCare | Ứng Dụng Chăm Sóc Chuẩn Meow Cho Thú Cưng",
    description:
      "Bạn đang tìm Meow app tốt nhất? MoewCare có lịch ăn AI, hồ sơ y tế, cộng đồng Meow và SOS khẩn cấp.",
    images: ["/images/og-image.webp"],
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MobileApplication",
      name: "Moew App",
      operatingSystem: "iOS, Android",
      applicationCategory: "LifestyleApplication",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "5000",
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "VND",
      },
      description:
        "Ứng dụng quản lý thú cưng toàn diện cho người Việt với AI phân tích thức ăn, hồ sơ y tế và mạng xã hội thú cưng.",
    },
    {
      "@type": "Organization",
      name: "Moew App",
      url: "https://moewcare.app",
      email: "support@moewcare.app",
    },
    {
      "@type": "WebSite",
      url: "https://moewcare.app",
      name: "Moew App",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: "https://moewcare.app/?q={search_term_string}" },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${plusJakarta.variable} ${inter.variable} ${dmSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
