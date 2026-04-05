"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { PawPrint, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#features", label: "Tính năng" },
    { href: "#how-it-works", label: "Hướng dẫn" },
    { href: "#testimonials", label: "Đánh giá" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FDF6EE]/90 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <PawPrint className="text-[#E8834A]" size={28} />
            <span className="font-accent text-2xl text-[#C96535] font-bold tracking-tight">
              Moew
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-heading font-500 text-[#2D1A0E] hover:text-[#E8834A] transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#download"
              className="bg-[#E8834A] hover:bg-[#C96535] text-white font-heading font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-200"
            >
              Tải Ngay
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-[#2D1A0E] hover:text-[#E8834A] transition-colors"
            aria-label="Mở menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="relative ml-auto w-72 bg-[#FFFAF3] h-full shadow-2xl flex flex-col p-8 gap-6 animate-slide-up">
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-[#2D1A0E] hover:text-[#E8834A] transition-colors"
              aria-label="Đóng menu"
            >
              <X size={28} />
            </button>
            <Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setMenuOpen(false)}>
              <PawPrint className="text-[#E8834A]" size={24} />
              <span className="font-accent text-2xl text-[#C96535]">Moew</span>
            </Link>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-heading text-lg text-[#2D1A0E] hover:text-[#E8834A] transition-colors border-b border-[#EDD9C0] pb-4"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-[#E8834A] hover:bg-[#C96535] text-white font-heading font-semibold px-6 py-3 rounded-full text-center transition-all duration-300"
            >
              Tải Ngay
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
