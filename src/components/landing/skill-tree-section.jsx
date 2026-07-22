import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import SkillCard from '../ui/skill-card.jsx';
import CircularSkillGauge from '../ui/circular-skill-gauge.jsx';
import ScrollReveal from '../ui/scroll-reveal.jsx';
import { useSkills } from '../../hooks/use-skills.js';
import { useInViewRef } from '../../hooks/use-in-view-ref.js';
import { SKILLS } from '../../data/skills-data.js';

const STAGGER_STEP_MS = 60;

function SkillTreeSection() {
  const { groupedSkills } = useSkills();
  const [gaugeRef, isGaugeInView] = useInViewRef();

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

      <Grid container spacing={2} sx={{ justifyContent: 'center', maxWidth: 900, mx: 'auto' }}>
        {SKILLS.map((skill, index) => (
          <Grid key={skill.name} size={{ xs: 6, sm: 4, md: 2.4 }}>
            <ScrollReveal delay={index * STAGGER_STEP_MS}>
              <SkillCard name={skill.name} level={skill.level} note={skill.note} />
            </ScrollReveal>
          </Grid>
        ))}
      </Grid>

      <Box ref={gaugeRef} sx={{ mt: { xs: 5, md: 6 } }}>
        <Typography
          sx={{
            fontSize: { xs: '1.1rem', md: '1.3rem' },
            fontWeight: 700,
            color: 'var(--color-secondary)',
            mb: 3,
          }}
        >
          카테고리별 평균 역량
        </Typography>
        <Stack direction="row" spacing={{ xs: 3, md: 5 }} sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
          {groupedSkills.map((group) => {
            const average = Math.round(
              group.items.reduce((sum, item) => sum + item.level, 0) / group.items.length,
            );
            return (
              <CircularSkillGauge
                key={group.category}
                label={group.category}
                level={average}
                isActive={isGaugeInView}
                color={group.color}
              />
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}

export default SkillTreeSection;
