import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.jsx';
import ThemeModeProvider from './components/common/theme-mode-provider.jsx';
import theme from './theme.js';
import 'pretendard/dist/web/static/Pretendard-Regular.css';
import 'pretendard/dist/web/static/Pretendard-Medium.css';
import 'pretendard/dist/web/static/Pretendard-SemiBold.css';
import 'pretendard/dist/web/static/Pretendard-Bold.css';
import 'pretendard/dist/web/static/Pretendard-ExtraBold.css';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeModeProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeModeProvider>
    </ThemeProvider>
  </StrictMode>,
);
