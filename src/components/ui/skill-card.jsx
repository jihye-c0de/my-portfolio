import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AnimatedSkillBar from './animated-skill-bar.jsx';
import { useInViewRef } from '../../hooks/use-in-view-ref.js';
import { useCountUp } from '../../hooks/use-count-up.js';

/**
 * SkillCard 컴포넌트
 *
 * Props:
 * @param {string} name - 기술/툴 이름 [Required]
 * @param {number} level - 숙련도(0~100) [Required]
 * @param {string} note - 호버 시 보여줄 짧은 코멘트 [Required]
 *
 * Example usage:
 * <SkillCard name="Figma" level={70} note="실무 툴" />
 */
function SkillCard({ name, level, note }) {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, isInView] = useInViewRef();
  const displayLevel = useCountUp(level, isInView);

  return (
    <Box
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        height: '100%',
        borderRadius: 3,
        p: { xs: 2, md: 2.5 },
        textAlign: 'center',
        backgroundColor: 'var(--color-surface)',
        boxShadow: '0 8px 20px rgba(27, 46, 92, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-6px) scale(1.03)',
          boxShadow: '0 14px 28px rgba(27, 46, 92, 0.18)',
        },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '0.9rem', md: '1.05rem' },
          fontWeight: 700,
          color: 'var(--color-secondary)',
          mb: 1,
        }}
      >
        {name}
      </Typography>

      <Box sx={{ mb: 1 }}>
        <AnimatedSkillBar level={level} isActive={isInView} />
      </Box>

      <Typography sx={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
        {displayLevel}%
      </Typography>

      <Typography
        sx={{
          fontSize: '0.75rem',
          fontWeight: 600,
          color: 'var(--color-primary-dark)',
          maxHeight: isHovered ? 20 : 0,
          opacity: isHovered ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.25s ease, opacity 0.25s ease',
        }}
      >
        {note}
      </Typography>
    </Box>
  );
}

export default SkillCard;
