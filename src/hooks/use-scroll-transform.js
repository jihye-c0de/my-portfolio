import { useEffect, useRef } from 'react';

/**
 * useScrollTransform 훅
 * ref가 가리키는 엘리먼트가 뷰포트 상단을 벗어나는 정도를 0~1 값으로 계산해
 * --scroll-progress CSS 커스텀 프로퍼티를 직접 갱신한다.
 * setState 대신 스타일을 직접 제어해 리렌더 없이 스크롤에 따른 변형을 부드럽게 처리한다.
 *
 * @returns {import('react').RefObject} ref - 관찰 및 변형을 적용할 엘리먼트에 연결할 ref
 *
 * Example usage:
 * const scrollRef = useScrollTransform();
 * <Box ref={scrollRef} sx={{ opacity: 'calc(1 - var(--scroll-progress, 0))' }} />
 */
export function useScrollTransform() {
  const ref = useRef(null);

  useEffect(() => {
    const target = ref.current;
    if (!target) {
      return undefined;
    }

    let ticking = false;

    const update = () => {
      const rect = target.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / window.innerHeight));
      target.style.setProperty('--scroll-progress', progress.toFixed(3));
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
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return ref;
}
