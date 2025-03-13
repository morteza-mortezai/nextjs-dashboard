import "@/src/components/ui/global.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import SessionProvider from "../../lib/sessionProvider";
import { getSession } from "../../lib/authSession";
import RtlCacheProvider from "./RtlCacheProvider";
import {NextIntlClientProvider, Locale, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/src/i18n/routing';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {

  const { locale } = await params; 
  // const dict = await getDictionary(lang) 
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const session = await getSession();

  return (
    <html lang={locale} dir={locale=='fa'?'rtl':'ltr'}  >
      <body>
        <AppRouterCacheProvider>
          <RtlCacheProvider>
            <SessionProvider session={session}>
            <NextIntlClientProvider>{children}</NextIntlClientProvider>
              </SessionProvider>
          </RtlCacheProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}


export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'fa-IR' }]
}