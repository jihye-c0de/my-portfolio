import { useEffect, useRef, useState } from 'react';

const DEFAULT_THRESHOLD = 0.2;

/**
 * useInViewRef 훅
 * ref를 붙인 엘리먼트가 뷰포트에 한 번 들어오면 isInView를 true로 고정한다.
 * (동일 컴포넌트가 여러 번 렌더링돼도 인스턴스별로 독립적으로 감지된다)
 *
 * @param {number} threshold - 감지 임계값(0~1) [Optional, 기본값: 0.2]
 * @returns {[import('react').RefObject, boolean]} [ref, isInView]
 *
 * Example usage:
 * const [ref, isInView] = useInViewRef();
 * <Box ref={ref} />
 */
export function useInViewRef(threshold = DEFAULT_THRESHOLD) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(target);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView];
}
