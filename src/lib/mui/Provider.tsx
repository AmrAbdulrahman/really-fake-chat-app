import { Theme, ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';

const theme: Partial<Theme> = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#f5f5f5',
        },
      },
    },
    MuiLink: {
      root: {
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#5c607d',
      light: '#5c607d',
    },
    text: {
      primary: '#346469',
      secondary: '#8a8a8a',
    },
  },
});

export const MuiProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />

    {children}
  </ThemeProvider>
);
