import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/data/blog-data";
import { getDictionary } from "@/i18n/get-dictionary";
import { locales, type Locale } from "@/i18n/config";
import Logo from "@/app/components/Logo";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

export function generateStaticParams() {
  const posts = getBlogPosts();
  return locales.flatMap((locale) =>
    posts.map((post) => ({ locale, slug: post.slug }))
  );
}

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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale as Locale);
  const post = getBlogPost(slug);
  if (!post) notFound();

  const allPosts = getBlogPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const related = allPosts.filter((_, i) => i !== currentIndex).slice(0, 2);
  const isAr = locale === "ar";

  const navLinks = [
    { label: dict.nav.process, href: `/${locale}/#process` },
    { label: dict.nav.benefits, href: `/${locale}/#benefits` },
    { label: dict.nav.services, href: `/${locale}/#services` },
    { label: dict.nav.pricing, href: `/${locale}/#pricing` },
    { label: dict.nav.faq, href: `/${locale}/#faq` },
  ];

  const footerLinks = [
    { label: dict.nav.process, href: `/${locale}/#process` },
    { label: dict.nav.benefits, href: `/${locale}/#benefits` },
    { label: dict.nav.services, href: `/${locale}/#services` },
    { label: dict.nav.pricing, href: `/${locale}/#pricing` },
    { label: dict.nav.faq, href: `/${locale}/#faq` },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="w-full flex justify-center pt-[20px] px-[20px] md:px-[30px]">
        <div className="w-full max-w-[1100px] flex items-center justify-between py-[10px]">
          <Link href={`/${locale}`}>
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-[30px]">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="font-[family-name:var(--font-poppins)] text-[18px] font-normal text-black hover:text-purple transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-[12px]">
            <LanguageSwitcher locale={locale} />
            <Link
              href="https://calendly.com/lamamassoude/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[10px] bg-purple text-white pl-[20px] pr-[5px] py-[5px] rounded-[50px] text-[16px] font-[family-name:var(--font-poppins)] font-normal hover:opacity-90 transition-opacity"
            >
              {dict.nav.bookCall}
              <span className="w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={isAr ? "-scale-x-100" : ""}>
                  <path d="M1 13L13 1M13 1H1M13 1V13" stroke="#A841D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Blog post header */}
      <div className="max-w-[850px] mx-auto px-[20px] md:px-[30px] mt-[40px] md:mt-[60px]">
        <h2 className="font-[family-name:var(--font-poppins)] text-[28px] md:text-[45px] font-semibold text-dark leading-[1.3] md:leading-[63px] text-center">
          {post.title}
        </h2>
        {post.date && (
          <p className="font-[family-name:var(--font-poppins)] text-[18px] font-normal text-gray text-center mt-[16px]">
            {post.date}
          </p>
        )}
        <div className="mt-[30px] md:mt-[40px] w-full h-[250px] md:h-[500px] relative rounded-[15px] overflow-hidden">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
      </div>

      {/* Blog content */}
      <div className="max-w-[850px] mx-auto px-[20px] md:px-[40px] py-[40px]">
        <div
          className="blog-content font-[family-name:var(--font-poppins)] text-[18px] font-normal text-[#333333] leading-[1.8]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <div className="max-w-[850px] mx-auto px-[20px] md:px-[30px] pb-[80px]">
          <h3 className="font-[family-name:var(--font-poppins)] text-[28px] font-semibold text-dark mb-[24px]">
            {dict.blogs.relatedPosts}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px]">
            {related.map((rp) => (
              <Link key={rp.slug} href={`/${locale}/blogs/${rp.slug}`} className="block">
                <div className="rounded-[15px] overflow-hidden bg-white shadow-purple hover:shadow-lg transition-shadow">
                  <div className="w-full h-[200px] md:h-[300px] relative">
                    <Image src={rp.image} alt={rp.title} fill className="object-cover" />
                  </div>
                  <div className="p-[15px_25px_25px]">
                    {rp.date && (
                      <p className="font-[family-name:var(--font-poppins)] text-[16px] font-normal text-gray">
                        {rp.date}
                      </p>
                    )}
                    <h4 className="font-[family-name:var(--font-poppins)] text-[20px] font-semibold text-dark mt-[8px]">
                      {rp.title}
                    </h4>
                    <p className="font-[family-name:var(--font-poppins)] text-[16px] font-normal text-[#333333] mt-[8px] line-clamp-2">
                      {rp.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-[8px] mt-[12px] font-[family-name:var(--font-poppins)] text-[16px] font-medium text-black">
                      {dict.blogs.viewBlog}
                      <span className="w-[26px] h-[26px] bg-black rounded-full flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 14 14" fill="none" className={isAr ? "-scale-x-100" : ""}>
                          <path d="M1 13L13 1M13 1H1M13 1V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="pt-[48px] pb-[40px] px-[20px] md:px-[30px] bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-[32px]">
            <p className="font-[family-name:var(--font-poppins)] text-[14px] font-normal text-gray-light">
              {dict.footer.copyright}
            </p>
            <nav className="flex flex-wrap items-center justify-center gap-[24px]">
              {footerLinks.map((link) => (
                <Link key={link.label} href={link.href} className="font-[family-name:var(--font-poppins)] text-[14px] font-normal text-gray hover:text-purple transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
            <nav className="flex items-center gap-[12px]">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="w-[40px] h-[40px] rounded-full bg-white shadow-purple flex items-center justify-center text-dark hover:text-purple transition-colors">
                  {link.icon}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}
