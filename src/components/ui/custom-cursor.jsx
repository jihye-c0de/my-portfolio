import Box from '@mui/material/Box';
import { useCustomCursor } from '../../hooks/use-custom-cursor.js';

const TRAIL_COUNT = 5;

/**
 * CustomCursor 컴포넌트
 * 마우스를 따라다니는 커스텀 커서(도트 + 트레일)를 렌더링한다.
 * 버튼/링크 근처에서는 자기장처럼 끌려가고, 호버 시 도트 크기가 살짝 커진다.
 * 데스크톱(포인터가 정밀한 환경) 전용이며 모바일/터치 환경에서는 아무것도 렌더링하지 않는다.
 *
 * Example usage:
 * <CustomCursor />
 */
function CustomCursor() {
  const { dotRef, setTrailRef, isEnabled } = useCustomCursor();

  if (!isEnabled) {
    return null;
  }

  return (
    <Box aria-hidden="true" sx={{ position: 'fixed', inset: 0, zIndex: 2000, pointerEvents: 'none' }}>
      {Array.from({ length: TRAIL_COUNT }).map((_, index) => (
        <Box
          key={index}
          ref={setTrailRef(index)}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary-dark)',
            pointerEvents: 'none',
          }}
        />
      ))}

      <Box
        ref={dotRef}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: 'var(--color-secondary)',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          transition: 'width 0.25s ease, height 0.25s ease',
          '&[data-cursor-hover="true"]': {
            width: 14,
            height: 14,
          },
        }}
      />
    </Box>
  );
}

export default CustomCursor;
