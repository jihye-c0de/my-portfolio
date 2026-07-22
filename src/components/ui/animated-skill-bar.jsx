import Box from '@mui/material/Box';

/**
 * AnimatedSkillBar 컴포넌트
 * 뷰포트에 들어오면 0에서 지정한 숙련도(%)까지 채워지는 진행률 바.
 *
 * Props:
 * @param {number} level - 숙련도(0~100) [Required]
 * @param {boolean} isActive - 채우기 애니메이션 시작 여부 [Required]
 * @param {string} color - 바 색상(CSS 변수) [Optional, 기본값: 'var(--color-primary-dark)']
 *
 * Example usage:
 * <AnimatedSkillBar level={80} isActive={isInView} />
 */
function AnimatedSkillBar({ level, isActive, color = 'var(--color-primary-dark)' }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: 6,
        borderRadius: 99,
        backgroundColor: 'var(--color-bg-secondary)',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: `${isActive ? level : 0}%`,
          height: '100%',
          borderRadius: 99,
          backgroundColor: color,
          transition: 'width 1.1s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    </Box>
  );
}

export default AnimatedSkillBar;
