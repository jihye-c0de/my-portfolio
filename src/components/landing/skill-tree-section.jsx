import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SkillCard from '../ui/skill-card.jsx';
import { SKILLS } from '../../data/skills-data.js';

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
          mb: 4,
          color: 'var(--color-text-secondary)',
        }}
      >
        디자인 툴부터 코드까지, 산업디자인을 전공한 개발자의 폭넓은 역량을 소개합니다.
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: 900, mx: 'auto' }}>
        {SKILLS.map((skill) => (
          <Grid key={skill.name} size={{ xs: 6, sm: 4, md: 2.4 }}>
            <SkillCard name={skill.name} level={skill.level} note={skill.note} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SkillTreeSection;
