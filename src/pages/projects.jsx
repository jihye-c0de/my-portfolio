import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useProjects } from '../hooks/use-projects.js';
import ProjectCard from '../components/ui/project-card.jsx';

function Projects() {
  const { projects, isLoading } = useProjects();

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        py: { xs: 4, md: 8 },
        backgroundColor: 'var(--color-bg-primary)',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Typography
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 800,
            lineHeight: 1.2,
            textAlign: 'center',
            color: 'var(--color-secondary)',
            mb: { xs: 4, md: 6 },
          }}
        >
          Projects
        </Typography>

        {isLoading && (
          <Typography sx={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>
            프로젝트를 불러오는 중...
          </Typography>
        )}

        {!isLoading && projects.length === 0 && (
          <Typography sx={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>
            등록된 프로젝트가 없습니다.
          </Typography>
        )}

        {!isLoading && projects.length > 0 && (
          <Grid container spacing={3}>
            {projects.map((project) => (
              <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default Projects;
