import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "ar"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return;

  // Skip static files, API routes, and assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/lottie") ||
    pathname.includes(".")
  ) {
    return;
  }

  // Geo-detect: Saudi Arabia -> Arabic, else check Accept-Language
  const country = request.headers.get("x-vercel-ip-country");
  let locale = defaultLocale;

  if (country === "SA") {
    locale = "ar";
  } else {
    // Fallback: check Accept-Language header
    const acceptLang = request.headers.get("accept-language") || "";
    if (acceptLang.startsWith("ar")) {
      locale = "ar";
    }
  }

  // Redirect: / -> /en, /blogs -> /en/blogs, etc.
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ["/((?!_next|api|images|lottie|favicon.ico).*)"],
};
