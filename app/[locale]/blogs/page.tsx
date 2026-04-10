import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/data/blog-data";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

export default async function BlogsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const posts = getBlogPosts();
  const isAr = locale === "ar";

  return (
    <main className="min-h-screen bg-white">
      <div className="flex justify-center pt-[40px] px-[20px]">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-[10px] bg-purple text-white pl-[20px] pr-[5px] py-[5px] rounded-[50px] font-[family-name:var(--font-poppins)] text-[16px] font-normal hover:opacity-90 transition-opacity"
        >
          {dict.blogs.backHome}
          <span className="w-[35px] h-[35px] bg-white rounded-full flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={isAr ? "-scale-x-100" : ""}>
              <path d="M1 13L13 1M13 1H1M13 1V13" stroke="#A841D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>
      </div>

      <h1 className="font-[family-name:var(--font-poppins)] text-[36px] md:text-[60px] font-semibold text-dark text-center mt-[40px] mb-[60px] md:mb-[100px] leading-tight px-[20px]">
        {dict.blogs.title}
      </h1>

      <div className="max-w-[1085px] mx-auto flex flex-col gap-[60px] md:gap-[100px] px-[20px] md:px-[30px] pb-[100px]">
        {posts.map((post, i) => (
          <Link key={post.slug} href={`/${locale}/blogs/${post.slug}`} className="block">
            <div
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } rounded-[25px] shadow-purple overflow-hidden bg-white hover:shadow-lg transition-shadow`}
            >
              <div className="w-full md:w-[500px] h-[250px] md:h-[400px] relative flex-shrink-0">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="flex-1 p-[30px] md:p-[40px] flex flex-col justify-between">
                <div>
                  <h3 className="font-[family-name:var(--font-poppins)] text-[24px] md:text-[32px] font-semibold text-dark leading-[1.2] text-center">
                    {post.title}
                  </h3>
                  <p className="font-[family-name:var(--font-poppins)] text-[16px] md:text-[18px] font-normal text-gray leading-[27px] mt-[16px]">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-[20px]">
                  <span className="inline-flex items-center gap-[8px] font-[family-name:var(--font-poppins)] text-[16px] font-medium text-black">
                    {dict.blogs.viewBlog}
                    <span className="w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className={isAr ? "-scale-x-100" : ""}>
                        <path d="M1 13L13 1M13 1H1M13 1V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
