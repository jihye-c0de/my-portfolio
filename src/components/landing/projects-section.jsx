import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useProjects } from '../../hooks/use-projects.js';
import ProjectCard from '../ui/project-card.jsx';

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
          fontSize: { xs: '1.1rem', md: '1.3rem' },
          fontWeight: 700,
          color: 'var(--color-secondary)',
          mb: 4,
        }}
      >
        Projects
      </Typography>

      {isLoading && (
        <Typography sx={{ color: 'var(--color-text-muted)', mb: 4 }}>
          프로젝트를 불러오는 중...
        </Typography>
      )}

      {!isLoading && projects.length === 0 && (
        <Typography sx={{ color: 'var(--color-text-muted)', mb: 4 }}>
          등록된 프로젝트가 없습니다.
        </Typography>
      )}

      {!isLoading && projects.length > 0 && (
        <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: 900, mx: 'auto', mb: 4 }}>
          {projects.map((project) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6 }}>
              <ProjectCard project={project} />
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
