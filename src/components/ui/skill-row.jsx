import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AnimatedSkillBar from './animated-skill-bar.jsx';
import { useCountUp } from '../../hooks/use-count-up.js';

/**
 * SkillRow 컴포넌트
 * 스킬명 + 진행률 바 + 카운팅 숫자를 한 줄로 보여준다.
 *
 * Props:
 * @param {string} name - 스킬 이름 [Required]
 * @param {number} level - 숙련도(0~100) [Required]
 * @param {boolean} isActive - 애니메이션 시작 여부 [Required]
 * @param {string} color - 바 색상(CSS 변수) [Optional, 기본값: 'var(--color-primary-dark)']
 *
 * Example usage:
 * <SkillRow name="Figma" level={70} isActive={isInView} />
 */
function SkillRow({ name, level, isActive, color = 'var(--color-primary-dark)' }) {
  const displayLevel = useCountUp(level, isActive);

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', mb: 0.75 }}>
        <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
          {name}
        </Typography>
        <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
          {displayLevel}%
        </Typography>
      </Box>
      <AnimatedSkillBar level={level} isActive={isActive} color={color} />
    </Box>
  );
}

export default SkillRow;
