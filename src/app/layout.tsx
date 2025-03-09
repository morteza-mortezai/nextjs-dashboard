import "@/src/components/ui/global.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CssBaseline from '@mui/material/CssBaseline';
import SessionProvider from "../lib/sessionProvider";
import { getSession } from "../lib/authSession";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session=await getSession()
  return (
    <html lang="fa" dir="rtl">
      <body className={roboto.className}>
        <AppRouterCacheProvider >
          <ThemeProvider theme={theme} noSsr>
            <CssBaseline />
            <SessionProvider session={session}>

            {children}
            </SessionProvider>
            </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
