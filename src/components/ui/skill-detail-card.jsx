import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * SkillDetailCard 컴포넌트
 *
 * Props:
 * @param {string} name - 기술명 [Required]
 * @param {number} level - 숙련도(0~100) [Required]
 * @param {string} category - 카테고리명 [Required]
 * @param {string} color - 카테고리를 나타내는 색상(CSS 변수) [Required]
 *
 * Example usage:
 * <SkillDetailCard name="Figma" level={70} category="그래픽 디자인" color="var(--color-primary-dark)" />
 */
function SkillDetailCard({ name, level, category, color }) {
  return (
    <Box
      sx={{
        borderRadius: 2,
        borderTop: `3px solid ${color}`,
        backgroundColor: 'var(--color-surface)',
        boxShadow: '0 8px 20px rgba(27, 46, 92, 0.1)',
        px: 2.5,
        py: 2.25,
      }}
    >
      <Typography
        sx={{
          display: 'inline-block',
          fontSize: '0.7rem',
          fontWeight: 700,
          color,
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: 99,
          px: 1.2,
          py: 0.3,
          mb: 1.4,
        }}
      >
        {category}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', mb: 1 }}>
        <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
          {name}
        </Typography>
        <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
          {level}%
        </Typography>
      </Box>

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
            width: `${level}%`,
            height: '100%',
            borderRadius: 99,
            backgroundColor: color,
            transition: 'width 0.6s ease',
          }}
        />
      </Box>
    </Box>
  );
}

export default SkillDetailCard;
