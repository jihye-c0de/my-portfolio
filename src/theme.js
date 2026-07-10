import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'var(--color-primary)',
      light: 'var(--color-primary-light)',
      dark: 'var(--color-primary-dark)',
    },
    secondary: {
      main: 'var(--color-secondary)',
    },
    background: {
      default: 'var(--color-bg-primary)',
      paper: 'var(--color-bg-secondary)',
    },
    text: {
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      disabled: 'var(--color-text-muted)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.125rem',
      fontWeight: 500,
    },
  },
  spacing: 8,
});

export default theme;
