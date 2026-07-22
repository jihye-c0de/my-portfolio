import { useEffect, useState } from 'react';

/**
 * useInView 훅
 * Intersection Observer로 지정한 id의 엘리먼트가 화면에 보이는지 감지한다.
 *
 * @param {string} elementId - 관찰할 엘리먼트의 id [Required]
 * @returns {boolean} 해당 엘리먼트가 뷰포트에 보이는지 여부
 */
export function useInView(elementId) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const target = document.getElementById(elementId);
    if (!target) {
      setIsInView(false);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(target);

    return () => observer.disconnect();
  }, [elementId]);

  return isInView;
}
