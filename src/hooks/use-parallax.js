import { useEffect, useState } from 'react';

const DEFAULT_SPEED = 0.3;

/**
 * useParallax 훅
 * 스크롤 위치에 speed를 곱한 오프셋(px)을 반환해 배경/전경이 서로 다른 속도로
 * 움직이는 다층 패럴렉스 효과를 만든다. rAF로 스크롤 이벤트를 throttle한다.
 *
 * @param {number} speed - 패럴렉스 속도 배율 [Optional, 기본값: 0.3]
 * @returns {number} 현재 스크롤 오프셋 * speed (px)
 *
 * Example usage:
 * const offset = useParallax(0.2);
 * <Box sx={{ transform: `translate3d(0, ${offset}px, 0)` }} />
 */
export function useParallax(speed = DEFAULT_SPEED) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      setOffset(window.scrollY * speed);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return offset;
}
