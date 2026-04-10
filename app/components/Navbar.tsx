"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavDict {
  process: string;
  benefits: string;
  services: string;
  pricing: string;
  faq: string;
  bookAudit: string;
  bookCall: string;
}

export default function Navbar({ dict, locale }: { dict: NavDict; locale: string }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isAr = locale === "ar";
  const fontFamily = isAr ? "var(--font-cairo)" : "var(--font-poppins)";

  const navLinks = [
    { label: dict.process, href: "#process" },
    { label: dict.benefits, href: "#benefits" },
    { label: dict.services, href: "#services" },
    { label: dict.pricing, href: "#pricing" },
    { label: dict.faq, href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <header className="w-full flex justify-center pt-[40px] px-[20px] md:px-[30px] absolute top-0 left-0 right-0 z-50">
        <div className="w-full max-w-[1359px] flex items-center justify-between">
          <Link href={`/${locale}`}>
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-[40px]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-karla)] text-[16px] font-normal text-[#222222] tracking-[-0.32px] hover:text-purple transition-colors"
                style={isAr ? { fontFamily } : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-[12px]">
            <LanguageSwitcher locale={locale} />
            <a
              href="https://calendly.com/lamamassoude/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[10px] bg-purple text-white pl-[20px] pr-[5px] py-[5px] rounded-[50px] text-[16px] font-normal hover:opacity-90 transition-opacity"
              style={{ fontFamily }}
            >
              {dict.bookAudit}
              <span className="w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={isAr ? "-scale-x-100" : ""}>
                  <path d="M1 13L13 1M13 1H1M13 1V13" stroke="#A841D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
          {/* Hamburger button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-[40px] h-[40px] gap-[5px]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-[24px] h-[2px] bg-dark transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-[24px] h-[2px] bg-dark transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-[24px] h-[2px] bg-dark transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center gap-[32px] transition-all duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-[40px] right-[20px] rtl:right-auto rtl:left-[20px] w-[40px] h-[40px] flex items-center justify-center"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-[24px] font-semibold text-dark hover:text-purple transition-colors"
            style={{ fontFamily }}
          >
            {link.label}
          </a>
        ))}
        <LanguageSwitcher locale={locale} />
        <a
          href="https://calendly.com/lamamassoude/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-[10px] bg-purple text-white pl-[24px] pr-[5px] py-[5px] rounded-[50px] text-[16px] font-normal"
          style={{ fontFamily }}
        >
          {dict.bookCall}
          <span className="w-[35px] h-[35px] bg-white/20 rounded-full flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={isAr ? "-scale-x-100" : ""}>
              <path d="M1 13L13 1M13 1H1M13 1V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>

      {/* Sticky Bottom Navbar */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isSticky ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-[24px] bg-white/90 backdrop-blur-md shadow-xl rounded-[50px] px-[16px] py-[8px] border border-gray-100">
          <Logo small />
          <nav className="hidden md:flex items-center gap-[24px]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-karla)] text-[14px] font-normal text-black tracking-[-0.28px] hover:text-purple transition-colors"
                style={isAr ? { fontFamily } : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="https://calendly.com/lamamassoude/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[8px] bg-purple text-white pl-[16px] pr-[4px] py-[4px] rounded-[50px] text-[14px] font-normal hover:opacity-90 transition-opacity"
            style={{ fontFamily }}
          >
            <span className="hidden md:inline">{dict.bookAudit}</span>
            <span className="md:hidden">{dict.bookCall}</span>
            <span className="w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className={isAr ? "-scale-x-100" : ""}>
                <path d="M1 13L13 1M13 1H1M13 1V13" stroke="#A841D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
