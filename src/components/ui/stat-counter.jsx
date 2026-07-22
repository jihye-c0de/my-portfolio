import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useCountUp } from '../../hooks/use-count-up.js';

/**
 * StatCounter 컴포넌트
 * 뷰포트에 들어오면 0에서 목표 숫자까지 카운팅되는 통계 지표.
 *
 * Props:
 * @param {string} label - 지표 이름 [Required]
 * @param {number} value - 목표 숫자 [Required]
 * @param {boolean} isActive - 카운팅 시작 여부 [Required]
 *
 * Example usage:
 * <StatCounter label="진행한 프로젝트" value={12} isActive={isInView} />
 */
function StatCounter({ label, value, isActive }) {
  const displayValue = useCountUp(value, isActive);

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, fontWeight: 800, color: 'var(--color-primary)' }}>
        {displayValue}
      </Typography>
      <Typography sx={{ fontSize: { xs: '0.75rem', md: '0.9rem' }, color: 'var(--color-bg-primary)', opacity: 0.85 }}>
        {label}
      </Typography>
    </Box>
  );
}

export default StatCounter;
