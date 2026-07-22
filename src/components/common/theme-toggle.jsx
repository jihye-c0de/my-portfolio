import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import LightModeRounded from '@mui/icons-material/LightModeRounded';
import DarkModeRounded from '@mui/icons-material/DarkModeRounded';
import { useThemeMode } from '../../hooks/use-theme-mode.js';

const TRACK_WIDTH = 52;
const TRACK_HEIGHT = 28;
const KNOB_SIZE = 22;
const KNOB_INSET = 3;

/**
 * ThemeToggle 컴포넌트
 * 해/달 아이콘이 모핑되는 스위치 형태의 다크모드 토글 버튼.
 *
 * Example usage:
 * <ThemeToggle />
 */
function ThemeToggle() {
  const { mode, toggleMode } = useThemeMode();
  const isDark = mode === 'dark';

  return (
    <ButtonBase
      onClick={toggleMode}
      aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
      aria-pressed={isDark}
      sx={{
        position: 'relative',
        width: TRACK_WIDTH,
        height: TRACK_HEIGHT,
        borderRadius: 99,
        flexShrink: 0,
        backgroundColor: isDark ? 'var(--color-secondary)' : 'var(--color-bg-secondary)',
        border: '1px solid var(--color-card-border)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: KNOB_INSET,
          left: isDark ? TRACK_WIDTH - KNOB_SIZE - KNOB_INSET : KNOB_INSET,
          width: KNOB_SIZE,
          height: KNOB_SIZE,
          borderRadius: '50%',
          backgroundColor: 'var(--color-surface)',
          boxShadow: '0 2px 6px rgba(27, 46, 92, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'left 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <LightModeRounded
          sx={{
            position: 'absolute',
            fontSize: 14,
            color: 'var(--color-primary-dark)',
            opacity: isDark ? 0 : 1,
            transform: isDark ? 'rotate(90deg) scale(0.5)' : 'rotate(0deg) scale(1)',
            transition: 'opacity 0.3s ease, transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        <DarkModeRounded
          sx={{
            position: 'absolute',
            fontSize: 13,
            color: 'var(--color-secondary)',
            opacity: isDark ? 1 : 0,
            transform: isDark ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0.5)',
            transition: 'opacity 0.3s ease, transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </Box>
    </ButtonBase>
  );
}

export default ThemeToggle;
