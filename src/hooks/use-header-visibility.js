import { useEffect, useRef, useState } from 'react';

/**
 * useHeaderVisibility 훅
 * 스크롤을 내리면 헤더를 숨기고, 올리면 다시 보여준다.
 * heroInView가 true가 되는 즉시(페이지 맨 위 영역) 항상 보이도록 강제한다.
 *
 * @param {boolean} heroInView - Hero 섹션이 뷰포트에 보이는지 여부 [Required]
 * @returns {boolean} 헤더를 보여줄지 여부
 */
export function useHeaderVisibility(heroInView) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (heroInView) {
      setIsVisible(true);
    }
  }, [heroInView]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let ticking = false;

    const update = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (currentY < 40) {
        setIsVisible(true);
      } else if (delta > 4) {
        setIsVisible(false);
      } else if (delta < -4) {
        setIsVisible(true);
      }

      lastScrollY.current = currentY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return isVisible;
}
