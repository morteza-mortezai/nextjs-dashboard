import "@/src/components/ui/global.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import SessionProvider from "../lib/sessionProvider";
import { getSession } from "../lib/authSession";
import RtlCacheProvider from "./RtlCacheProvider";

// import { Roboto } from "next/font/google";
// const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-roboto",
// });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  return (
    <html lang="fa" dir="rtl">
      <body>
        <AppRouterCacheProvider>
          <RtlCacheProvider>
            <SessionProvider session={session}>{children}</SessionProvider>
          </RtlCacheProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
