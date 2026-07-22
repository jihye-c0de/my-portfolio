import { useCallback, useEffect, useMemo, useState } from 'react';
import { ThemeModeContext } from '../../hooks/use-theme-mode.js';

const STORAGE_KEY = 'portfolio-theme-mode';

function getInitialMode() {
  if (typeof document === 'undefined') {
    return 'light';
  }
  const attr = document.documentElement.getAttribute('data-theme');
  return attr === 'dark' ? 'dark' : 'light';
}

/**
 * ThemeModeProvider 컴포넌트
 * 다크모드 상태를 앱 전역에서 관리한다.
 * - index.html의 인라인 스크립트가 첫 페인트 전에 data-theme을 미리 설정해 깜빡임을 방지하며,
 *   이 컴포넌트는 그 값을 그대로 이어받아 초기 상태로 사용한다.
 * - 토글 시 선택한 값을 localStorage에 저장해 다음 방문에도 기억한다.
 * - 저장된 선호도가 없을 때는 시스템(prefers-color-scheme) 설정 변경을 실시간으로 따라간다.
 *
 * Props:
 * @param {node} children - 하위 트리 [Required]
 *
 * Example usage:
 * <ThemeModeProvider><App /></ThemeModeProvider>
 */
function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  useEffect(() => {
    const hasSavedPreference = localStorage.getItem(STORAGE_KEY) !== null;
    if (hasSavedPreference) {
      return undefined;
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => setMode(event.matches ? 'dark' : 'light');
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  const toggleMode = useCallback(() => {
    setMode((previous) => {
      const next = previous === 'dark' ? 'light' : 'dark';
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ mode, toggleMode }), [mode, toggleMode]);

  return <ThemeModeContext.Provider value={value}>{children}</ThemeModeContext.Provider>;
}

export default ThemeModeProvider;
