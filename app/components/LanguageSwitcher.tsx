"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();
  const otherLocale = locale === "en" ? "ar" : "en";
  const newPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <Link
      href={newPath}
      className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white shadow-purple text-[14px] font-semibold text-dark hover:text-purple transition-colors font-[family-name:var(--font-poppins)]"
    >
      {locale === "en" ? "ع" : "EN"}
    </Link>
  );
}
