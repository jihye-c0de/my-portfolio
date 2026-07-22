import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import StatCounter from '../ui/stat-counter.jsx';
import { useProjects } from '../../hooks/use-projects.js';
import { useSkills } from '../../hooks/use-skills.js';
import { useInViewRef } from '../../hooks/use-in-view-ref.js';
import { SKILLS } from '../../data/skills-data.js';

function StatsSection() {
  const [ref, isInView] = useInViewRef();
  const { projects } = useProjects();
  const { groupedSkills } = useSkills();

  const stats = [
    { label: '진행한 프로젝트', value: projects.length },
    { label: '보유 기술', value: SKILLS.length },
    { label: '전문 분야', value: groupedSkills.length },
  ];

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        width: '100%',
        py: { xs: 5, md: 7 },
        px: { xs: 2, md: 3 },
        backgroundColor: 'var(--color-secondary)',
      }}
    >
      <Grid container spacing={2} sx={{ maxWidth: 700, mx: 'auto' }}>
        {stats.map((stat) => (
          <Grid key={stat.label} size={{ xs: 4 }}>
            <StatCounter label={stat.label} value={stat.value} isActive={isInView} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default StatsSection;
