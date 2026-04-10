"use client";

import Image from "next/image";

const footerNavLinks = [
  { label: "Benefits", href: "#benefits" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#" },
  { label: "FAQ", href: "#faq" },
  { label: "AR", href: "#" },
];

export default function FooterLogo() {
  return (
    <section className="py-[60px] px-[30px] bg-white">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Large logo + text */}
        <div className="footer-logo-section flex items-center justify-center gap-[16px] mb-[32px] cursor-pointer inline-flex mx-auto">
          <Image
            src="/images/logo.png"
            alt="WordWave"
            width={60}
            height={55}
            className="footer-logo-icon"
          />
          <span className="font-[family-name:var(--font-poppins)] text-[50px] font-semibold text-[#573D97] italic">
            The WordWave
          </span>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-wrap items-center justify-center gap-[32px]">
          {footerNavLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-[family-name:var(--font-poppins)] text-[16px] font-normal text-dark hover:text-purple transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
