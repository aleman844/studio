import { NextRequest, NextResponse } from 'next/server';

let locales = ['en', 'es'];
export let defaultLocale = 'es';

// This regex matches any path that looks like a file extension
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 1. Check if the path is a static file. If so, do nothing.
  if (PUBLIC_FILE.test(pathname)) {
    return;
  }

  // 2. Check if the path is missing a locale.
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // 3. If it's missing a locale, redirect to the default locale.
  if (pathnameIsMissingLocale) {
    const locale = defaultLocale;
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and API routes.
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
