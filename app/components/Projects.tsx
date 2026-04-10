"use client";

import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";
import { getBlogPosts } from "@/data/blog-data";

const projects = getBlogPosts().slice(0, 5).map((post) => ({
  title: post.title,
  description: post.excerpt,
  image: post.image,
  slug: post.slug,
}));

interface ProjectsDict {
  label: string;
  heading: string;
  subheading: string;
  viewBlog: string;
}

export default function Projects({ dict, locale }: { dict: ProjectsDict; locale: string }) {
  const isAr = locale === "ar";

  return (
    <section className="py-[60px] md:py-[100px] px-[20px] md:px-[30px] bg-white">
      <div className="max-w-[1085px] mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-[50px]">
            <span className="inline-block px-[16px] py-[8px] rounded-[25px] bg-purple-light font-[family-name:var(--font-poppins)] text-[16px] font-normal text-purple">
              {dict.label}
            </span>
            <h2 className="font-[family-name:var(--font-poppins)] text-[28px] md:text-[45px] font-semibold text-dark mt-[8px] leading-tight">
              {dict.heading}
            </h2>
            <p className="font-[family-name:var(--font-poppins)] text-[18px] font-normal text-dark mt-[8px]">
              {dict.subheading}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col gap-[30px] md:gap-[50px]">
          {projects.map((project, i) => (
            <AnimateOnScroll key={project.title} delay={i * 0.1}>
              <div
                className={`flex flex-col ${
                  i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } rounded-[25px] shadow-purple overflow-hidden h-auto md:h-[460px]`}
              >
                <div className="w-full md:w-[500px] h-[300px] md:h-full relative flex-shrink-0">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <div className="flex-1 p-[40px] md:p-[50px] flex flex-col justify-center bg-white">
                  <h3 className="font-[family-name:var(--font-poppins)] text-[24px] font-semibold text-dark mb-[12px]">
                    {project.title}
                  </h3>
                  <p className="font-[family-name:var(--font-poppins)] text-[16px] font-normal text-gray leading-[24px] mb-[20px]">
                    {project.description}
                  </p>
                  <Link href={`/${locale}/blogs/${project.slug}`} className="inline-flex items-center gap-[10px] bg-purple text-white pl-[20px] pr-[5px] py-[5px] rounded-[50px] font-[family-name:var(--font-poppins)] text-[14px] font-normal w-fit hover:opacity-90 transition-opacity">
                    {dict.viewBlog}
                    <span className="w-[30px] h-[30px] bg-white/20 rounded-full flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className={isAr ? "-scale-x-100" : ""}>
                        <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
