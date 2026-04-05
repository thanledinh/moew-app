import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import BrandStory from "@/components/BrandStory";
import Testimonials from "@/components/Testimonials";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Skip navigation for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[9999] bg-[#E8834A] text-white font-semibold px-4 py-2 rounded-lg"
      >
        Bỏ qua điều hướng
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <BrandStory />
        <Testimonials />
        <DownloadCTA />
      </main>

      <Footer />
    </>
  );
}
