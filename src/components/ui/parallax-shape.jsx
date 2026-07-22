import Box from '@mui/material/Box';
import { useParallax } from '../../hooks/use-parallax.js';

/**
 * ParallaxShape 컴포넌트
 * 스크롤 위치에 따라 배경 장식 요소를 다른 속도로 움직여 패럴렉스 깊이감을 만든다.
 * 패럴렉스 이동(부모)과 기존 부유 애니메이션(자식)을 분리해 transform 충돌을 피한다.
 *
 * Props:
 * @param {string} top - 세로 위치(%) [Required]
 * @param {string} left - 가로 위치(%) [Required]
 * @param {number} size - 지름(px) [Required]
 * @param {string} color - 배경 색상(CSS 변수) [Required]
 * @param {number} speed - 패럴렉스 속도 배율 [Optional, 기본값: 0.2]
 * @param {string} floatDuration - 부유 애니메이션 지속시간 [Optional, 기본값: '7s']
 * @param {string} floatDelay - 부유 애니메이션 지연시간 [Optional, 기본값: '0s']
 *
 * Example usage:
 * <ParallaxShape top="10%" left="8%" size={240} color="var(--color-primary)" speed={0.15} />
 */
function ParallaxShape({ top, left, size, color, speed = 0.2, floatDuration = '7s', floatDelay = '0s' }) {
  const offset = useParallax(speed);

  return (
    <Box
      aria-hidden="true"
      sx={{
        position: 'absolute',
        top,
        left,
        width: size,
        height: size,
        pointerEvents: 'none',
        zIndex: 0,
        transform: `translate3d(0, ${offset}px, 0)`,
        willChange: 'transform',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          backgroundColor: color,
          opacity: 0.18,
          filter: 'blur(60px)',
          animation: `float-shape ${floatDuration} ease-in-out infinite`,
          animationDelay: floatDelay,
        }}
      />
    </Box>
  );
}

export default ParallaxShape;
