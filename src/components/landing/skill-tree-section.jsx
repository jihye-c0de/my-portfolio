import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function SkillTreeSection() {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 3 },
        textAlign: 'center',
        backgroundColor: 'var(--color-bg-secondary)',
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '1.75rem', md: '2.5rem' },
          fontWeight: 800,
          color: 'var(--color-secondary)',
          mb: 2,
        }}
      >
        Skill Tree
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '1rem', md: '1.2rem' },
          lineHeight: 1.6,
          maxWidth: 640,
          mx: 'auto',
          color: 'var(--color-text-secondary)',
        }}
      >
        여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
      </Typography>
    </Box>
  );
}

export default SkillTreeSection;
