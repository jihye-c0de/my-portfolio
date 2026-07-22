import Box from '@mui/material/Box';

const SIZE_MAP = { small: 20, medium: 32, large: 48 };

/**
 * LoadingSpinner 컴포넌트
 * CSS @keyframes 기반 커스텀 로딩 스피너.
 *
 * Props:
 * @param {string} size - 스피너 크기 ('small' | 'medium' | 'large') [Optional, 기본값: 'medium']
 *
 * Example usage:
 * <LoadingSpinner size="small" />
 */
function LoadingSpinner({ size = 'medium' }) {
  const dimension = SIZE_MAP[size] ?? SIZE_MAP.medium;

  return (
    <Box
      role="status"
      aria-label="로딩 중"
      sx={{
        width: dimension,
        height: dimension,
        borderRadius: '50%',
        border: '3px solid var(--color-bg-secondary)',
        borderTopColor: 'var(--color-primary-dark)',
        animation: 'spin 0.8s linear infinite',
      }}
    />
  );
}

export default LoadingSpinner;
