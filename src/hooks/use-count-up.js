import { useEffect, useRef, useState } from 'react';

const DEFAULT_DURATION_MS = 1200;

/**
 * useCountUp 훅
 * start가 true가 되는 순간 0에서 target까지 숫자를 requestAnimationFrame으로 애니메이션한다.
 *
 * @param {number} target - 도달할 목표 숫자 [Required]
 * @param {boolean} start - 애니메이션 시작 여부 [Required]
 * @param {number} duration - 애니메이션 시간(ms) [Optional, 기본값: 1200]
 * @returns {number} 현재 카운트 값
 *
 * Example usage:
 * const displayLevel = useCountUp(80, isInView);
 */
export function useCountUp(target, start, duration = DEFAULT_DURATION_MS) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!start) {
      return undefined;
    }

    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(target * eased));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameRef.current);
  }, [start, target, duration]);

  return count;
}
