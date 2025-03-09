'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  direction:'rtl',
  colorSchemes: {
  dark:true
  },
});

export default theme; 