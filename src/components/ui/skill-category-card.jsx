import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import SkillRow from './skill-row.jsx';
import { useInViewRef } from '../../hooks/use-in-view-ref.js';

/**
 * SkillCategoryCard 컴포넌트
 * 같은 카테고리의 스킬들을 하나의 카드 안에 묶어서 보여준다.
 *
 * Props:
 * @param {string} category - 카테고리명 [Required]
 * @param {string} color - 카테고리를 나타내는 색상(CSS 변수) [Required]
 * @param {object[]} skills - { name, level } 형태의 스킬 배열 [Required]
 *
 * Example usage:
 * <SkillCategoryCard category="그래픽 디자인" color="var(--color-primary-dark)" skills={[{ name: 'Figma', level: 70 }]} />
 */
function SkillCategoryCard({ category, color, skills }) {
  const [ref, isInView] = useInViewRef();

  return (
    <Box
      ref={ref}
      sx={{
        height: '100%',
        borderRadius: 3,
        borderTop: `3px solid ${color}`,
        backgroundColor: 'var(--color-surface)',
        boxShadow: '0 8px 20px rgba(27, 46, 92, 0.1)',
        px: 3,
        py: 2.75,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        willChange: 'transform',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 16px 32px rgba(27, 46, 92, 0.18)',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.25 }}>
        <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: color, flexShrink: 0 }} />
        <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-secondary)' }}>
          {category}
        </Typography>
      </Box>

      <Stack spacing={2.25}>
        {skills.map((skill) => (
          <SkillRow key={skill.name} name={skill.name} level={skill.level} isActive={isInView} color={color} />
        ))}
      </Stack>
    </Box>
  );
}

export default SkillCategoryCard;
