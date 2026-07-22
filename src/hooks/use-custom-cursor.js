import { useEffect, useMemo, useRef } from 'react';

const TRAIL_COUNT = 5;
const DOT_EASE = 0.25;
const TRAIL_EASE = 0.28;
const MAGNETIC_RADIUS = 80;
const MAGNETIC_STRENGTH = 0.4;
const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select';
const ACTIVE_CLASS = 'custom-cursor-active';

function isTouchDevice() {
  return !window.matchMedia('(pointer: fine)').matches;
}

/**
 * useCustomCursor 훅
 * 마우스 팔로워(도트) + 트레일 + 버튼/링크 자기장 효과 + 호버 시 크기 변형을
 * 하나의 requestAnimationFrame 루프로 처리한다. 리렌더 없이 ref의 DOM 스타일을 직접 갱신한다.
 * 포인터가 정밀하지 않은 환경(모바일/터치)에서는 비활성화된다.
 *
 * @returns {{ dotRef: import('react').RefObject, setTrailRef: function, isEnabled: boolean }}
 *
 * Example usage:
 * const { dotRef, setTrailRef, isEnabled } = useCustomCursor();
 */
export function useCustomCursor() {
  const isEnabled = useMemo(() => typeof window !== 'undefined' && !isTouchDevice(), []);

  const dotRef = useRef(null);
  const trailElsRef = useRef([]);

  const setTrailRef = (index) => (el) => {
    trailElsRef.current[index] = el;
  };

  useEffect(() => {
    if (!isEnabled) {
      return undefined;
    }

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const dot = { x: mouse.x, y: mouse.y };
    const trail = Array.from({ length: TRAIL_COUNT }, () => ({ x: mouse.x, y: mouse.y }));

    let magneticEl = null;
    let frameId = null;

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseOver = (event) => {
      const target = event.target.closest(INTERACTIVE_SELECTOR);
      if (target) {
        magneticEl = target;
        dotRef.current?.setAttribute('data-cursor-hover', 'true');
      }
    };

    const handleMouseOut = (event) => {
      const target = event.target.closest(INTERACTIVE_SELECTOR);
      if (target && target === magneticEl) {
        magneticEl = null;
        dotRef.current?.removeAttribute('data-cursor-hover');
      }
    };

    document.body.classList.add(ACTIVE_CLASS);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    const tick = () => {
      let targetX = mouse.x;
      let targetY = mouse.y;

      if (magneticEl) {
        const rect = magneticEl.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.hypot(mouse.x - centerX, mouse.y - centerY);

        if (distance < MAGNETIC_RADIUS) {
          targetX = mouse.x + (centerX - mouse.x) * MAGNETIC_STRENGTH;
          targetY = mouse.y + (centerY - mouse.y) * MAGNETIC_STRENGTH;
        }
      }

      dot.x += (targetX - dot.x) * DOT_EASE;
      dot.y += (targetY - dot.y) * DOT_EASE;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0) translate(-50%, -50%)`;
      }

      let prevX = dot.x;
      let prevY = dot.y;
      trail.forEach((point, index) => {
        point.x += (prevX - point.x) * TRAIL_EASE;
        point.y += (prevY - point.y) * TRAIL_EASE;
        const el = trailElsRef.current[index];
        if (el) {
          el.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%)`;
          el.style.opacity = `${1 - (index + 1) / (TRAIL_COUNT + 1)}`;
        }
        prevX = point.x;
        prevY = point.y;
      });

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      document.body.classList.remove(ACTIVE_CLASS);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isEnabled]);

  return { dotRef, setTrailRef, isEnabled };
}
