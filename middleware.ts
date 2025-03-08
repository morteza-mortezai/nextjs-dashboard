export { middleware } from "./app/lib/middleware";


// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// };

export const config = {
  matcher: ["/dashboard/:path*"],
}