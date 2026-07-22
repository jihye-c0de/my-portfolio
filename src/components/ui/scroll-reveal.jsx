import Box from '@mui/material/Box';
import { useInViewRef } from '../../hooks/use-in-view-ref.js';

const OFFSET_MAP = {
  up: 'translate3d(0, 32px, 0)',
  left: 'translate3d(-32px, 0, 0)',
  right: 'translate3d(32px, 0, 0)',
};

/**
 * ScrollReveal 컴포넌트
 * 자식 요소가 뷰포트에 들어오면 Intersection Observer로 감지해
 * 페이드인 + 슬라이드 애니메이션으로 등장시킨다.
 *
 * Props:
 * @param {node} children - 애니메이션을 적용할 콘텐츠 [Required]
 * @param {number} delay - 등장 지연 시간(ms), 여러 요소를 순차적으로 등장시킬 때 사용 [Optional, 기본값: 0]
 * @param {string} direction - 슬라이드 방향 ('up' | 'left' | 'right') [Optional, 기본값: 'up']
 *
 * Example usage:
 * <ScrollReveal delay={index * 80}><ProjectCard project={project} /></ScrollReveal>
 */
function ScrollReveal({ children, delay = 0, direction = 'up' }) {
  const [ref, isInView] = useInViewRef();

  return (
    <Box
      ref={ref}
      sx={{
        height: '100%',
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translate3d(0, 0, 0)' : OFFSET_MAP[direction],
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Box>
  );
}

export default ScrollReveal;
