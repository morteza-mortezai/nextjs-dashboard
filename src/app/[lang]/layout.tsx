import "@/src/components/ui/global.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import SessionProvider from "../../lib/sessionProvider";
import { getSession } from "../../lib/authSession";
import RtlCacheProvider from "./RtlCacheProvider";
import { getDictionary, Locale } from "./dictionaries/dictionaries";
// import { Roboto } from "next/font/google";
// const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-roboto",
// });

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang) // en
  const session = await getSession();
  return (
    <html lang={lang} dir={lang=='fa-IR'?'rtl':'ltr'}  >
      <body>
        <AppRouterCacheProvider>
          <RtlCacheProvider>
            <SessionProvider session={session}>
     
             <button>{dict.products.cart}</button> 
              
              {children}</SessionProvider>
          </RtlCacheProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}


export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'fa-IR' }]
}