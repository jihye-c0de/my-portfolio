import { createContext, useContext } from 'react';

export const ThemeModeContext = createContext(null);

/**
 * useThemeMode 훅
 * ThemeModeProvider가 제공하는 다크모드 상태와 토글 함수를 가져온다.
 *
 * @returns {{ mode: 'light' | 'dark', toggleMode: function }}
 *
 * Example usage:
 * const { mode, toggleMode } = useThemeMode();
 */
export function useThemeMode() {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error('useThemeMode은 ThemeModeProvider 내부에서 사용해야 합니다.');
  }
  return context;
}
