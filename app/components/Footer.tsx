import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/theword_wave",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.link/6qtcur",
    icon: (
      <Image src="/images/whatsapp.png" alt="WhatsApp" width={18} height={18} className="object-contain" />
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/thewordwavelb/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/the-wordwave/",
    icon: (
      <Image src="/images/linkedin.png" alt="LinkedIn" width={18} height={18} className="object-contain" />
    ),
  },
];

interface FooterDict {
  copyright: string;
  nav: {
    process: string;
    benefits: string;
    services: string;
    pricing: string;
    faq: string;
  };
}

export default function Footer({ dict, locale }: { dict: FooterDict; locale: string }) {
  const footerLinks = [
    { label: dict.nav.process, href: `/${locale}#process` },
    { label: dict.nav.benefits, href: `/${locale}#benefits` },
    { label: dict.nav.services, href: `/${locale}#services` },
    { label: dict.nav.pricing, href: `/${locale}#pricing` },
    { label: dict.nav.faq, href: `/${locale}#faq` },
  ];

  return (
    <footer className="pt-[48px] pb-[100px] px-[30px] bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-[32px]">
          <p className="font-[family-name:var(--font-poppins)] text-[14px] font-normal text-gray-light">
            {dict.copyright}
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-[24px]">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-[family-name:var(--font-poppins)] text-[14px] font-normal text-gray hover:text-purple transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <nav className="flex items-center gap-[12px]">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-[40px] h-[40px] rounded-full bg-white shadow-purple flex items-center justify-center text-dark hover:text-purple transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
