// // export { middleware } from "./lib/middleware"

// import { match } from "@formatjs/intl-localematcher";
// // import Negotiator from "negotiator";
// var Negotiator = require("negotiator");

// // export const config = {
// //   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
// //   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// // };

// // export const config = {
// //   matcher: ["/dashboard/:path*"],
// // }

// import { NextRequest, NextResponse } from "next/server";

// let locales = ["en-US", "fa-IR"];

// // Get the preferred locale, similar to the above or using a library
// function getLocale(request: NextRequest) {
//   let acceptLanguages = request.headers.get("accept-language");
//   const headers = { "accept-language": acceptLanguages };
//   let languages = new Negotiator({ headers }).languages();
//   let locales = ["en-US", "fa-IR"];
//   let defaultLocale = "fa-IR";

//   return match(languages, locales, defaultLocale); // -> 'en-US'
// }

// export function middleware(request: NextRequest) {
//   // Check if there is any supported locale in the pathname

//   const { pathname } = request.nextUrl;
//   const pathnameHasLocale = locales.some(
//     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//   );

//   if (pathnameHasLocale) return;

//   // Redirect if there is no locale
//   const locale = getLocale(request);
//   request.nextUrl.pathname = `/${locale}${pathname}`;
//   // e.g. incoming request is /products
//   // The new URL is now /en-US/products
//   return NextResponse.redirect(request.nextUrl);
// }

// export const config = {
//   matcher: [
//     // Skip all internal paths (_next)
//     "/((?!_next).*)",
//     // Optional: only run on root (/) URL
//     // '/'
//   ],
// };

import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};