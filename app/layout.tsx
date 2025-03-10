import "@/app/ui/global.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CssBaseline from '@mui/material/CssBaseline';


const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={roboto.className}>
        <AppRouterCacheProvider >
          <ThemeProvider theme={theme} noSsr>
            <CssBaseline />
            {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
