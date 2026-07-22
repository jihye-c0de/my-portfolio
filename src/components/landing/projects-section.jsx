import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useProjects } from '../../hooks/use-projects.js';
import ProjectCard from '../ui/project-card.jsx';
import ProjectCardSkeleton from '../ui/project-card-skeleton.jsx';
import ScrollReveal from '../ui/scroll-reveal.jsx';

const STAGGER_STEP_MS = 100;

const PREVIEW_LIMIT = 4;

function ProjectsSection() {
  const navigate = useNavigate();
  const { projects, isLoading } = useProjects({ limit: PREVIEW_LIMIT });

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 3 },
        textAlign: 'center',
        backgroundColor: 'var(--color-bg-primary)',
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
        Projects
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
        직접 기획하고 개발한 대표 프로젝트들입니다.
      </Typography>

      {isLoading && (
        <Grid container spacing={2} sx={{ justifyContent: 'center', maxWidth: 900, mx: 'auto', mb: 4 }}>
          {Array.from({ length: PREVIEW_LIMIT }).map((_, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <ProjectCardSkeleton />
            </Grid>
          ))}
        </Grid>
      )}

      {!isLoading && projects.length === 0 && (
        <Typography sx={{ color: 'var(--color-text-muted)', mb: 4 }}>
          등록된 프로젝트가 없습니다.
        </Typography>
      )}

      {!isLoading && projects.length > 0 && (
        <Grid container spacing={2} sx={{ justifyContent: 'center', maxWidth: 900, mx: 'auto', mb: 4 }}>
          {projects.map((project, index) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <ScrollReveal delay={index * STAGGER_STEP_MS}>
                <ProjectCard project={project} />
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>
      )}

      <Button
        variant="outlined"
        onClick={() => navigate('/projects')}
        sx={{
          color: 'var(--color-link)',
          borderColor: 'var(--color-link)',
          '&:hover': {
            color: 'var(--color-link-hover)',
            borderColor: 'var(--color-link-hover)',
          },
        }}
      >
        더 보기
      </Button>
    </Box>
  );
}

export default ProjectsSection;
