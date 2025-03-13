"use client";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { CssBaseline } from "@mui/material";

const theme = createTheme({
    direction: 'rtl',
    typography: {
      fontFamily: 'Vazirmatn, Roboto, Arial',
    },
    palette: {
      primary: {
        main: '#1976d2',
      },
    },
  });
  

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function RtlCacheProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider value={cacheRtl}>
      {/* <CssBaseline /> */}
      <ThemeProvider noSsr theme={theme}>
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
