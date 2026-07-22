import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useCountUp } from '../../hooks/use-count-up.js';

const SIZE = 96;
const STROKE_WIDTH = 8;
const RADIUS = (SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/**
 * CircularSkillGauge 컴포넌트
 * SVG path animation 기반 원형 프로그레스로 스킬/역량 수준을 보여준다.
 *
 * Props:
 * @param {string} label - 링 아래 표시할 이름 [Required]
 * @param {number} level - 숙련도(0~100) [Required]
 * @param {boolean} isActive - 애니메이션 시작 여부 [Required]
 * @param {string} color - 링 색상(CSS 변수) [Optional, 기본값: 'var(--color-primary-dark)']
 *
 * Example usage:
 * <CircularSkillGauge label="개발" level={60} isActive={isInView} />
 */
function CircularSkillGauge({ label, level, isActive, color = 'var(--color-primary-dark)' }) {
  const displayLevel = useCountUp(level, isActive);
  const offset = CIRCUMFERENCE - ((isActive ? level : 0) / 100) * CIRCUMFERENCE;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
      <Box sx={{ position: 'relative', width: SIZE, height: SIZE }}>
        <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="var(--color-bg-secondary)"
            strokeWidth={STROKE_WIDTH}
          />
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke={color}
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
            style={{ transition: 'stroke-dashoffset 1.1s cubic-bezier(0.4, 0, 0.2, 1)' }}
          />
        </svg>
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            fontWeight: 700,
            color: 'var(--color-secondary)',
          }}
        >
          {displayLevel}%
        </Box>
      </Box>
      <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>
        {label}
      </Typography>
    </Box>
  );
}

export default CircularSkillGauge;
