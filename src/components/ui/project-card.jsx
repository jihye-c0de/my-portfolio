import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LaunchRounded from '@mui/icons-material/LaunchRounded';
import GitHub from '@mui/icons-material/GitHub';

/**
 * ProjectCard 컴포넌트
 *
 * Props:
 * @param {object} project - 프로젝트 데이터 객체 (title, description, tech_stack, project_type, detail_url, github_url, thumbnail_url) [Required]
 *
 * Example usage:
 * <ProjectCard project={project} />
 */
function ProjectCard({ project }) {
  const {
    title,
    description,
    tech_stack: techStack,
    project_type: projectType,
    detail_url: detailUrl,
    github_url: githubUrl,
    thumbnail_url: thumbnailUrl,
  } = project;

  return (
    <Card
      elevation={0}
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        backgroundColor: 'var(--color-bg-primary)',
        boxShadow: '0 10px 28px rgba(27, 46, 92, 0.12)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: '0 14px 32px rgba(27, 46, 92, 0.2)',
        },
        '&:active': {
          transform: 'scale(0.98)',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          aspectRatio: '1 / 1',
          overflow: 'hidden',
          backgroundColor: 'var(--color-bg-secondary)',
        }}
      >
        <Box
          component="img"
          src={thumbnailUrl}
          alt={`${title} 스크린샷`}
          loading="lazy"
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', px: { xs: 2, md: 3 }, py: { xs: 2, md: 2.5 } }}>
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.1rem' },
            fontWeight: 700,
            color: 'var(--color-secondary)',
            mb: 0.5,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '0.85rem', md: '0.9rem' },
            color: 'var(--color-text-secondary)',
            mb: 1,
          }}
        >
          {description}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5, mt: 'auto' }}>
          <Typography
            sx={{
              fontSize: '0.8rem',
              color: 'var(--color-text-muted)',
            }}
          >
            {techStack.join(' · ')}
          </Typography>
          <Typography
            sx={{
              fontSize: '0.75rem',
              color: 'var(--color-primary-dark)',
              fontWeight: 600,
            }}
          >
            {projectType}
          </Typography>
        </Box>

        <Stack direction="row" spacing={1}>
          <Button
            component="a"
            href={detailUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            variant="contained"
            startIcon={<LaunchRounded fontSize="small" />}
            sx={{
              flex: 1,
              backgroundColor: 'var(--color-button-primary)',
              '&:hover': { backgroundColor: 'var(--color-button-hover)' },
            }}
          >
            Live Demo
          </Button>
          <Button
            component="a"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            variant="outlined"
            startIcon={<GitHub fontSize="small" />}
            sx={{
              flex: 1,
              color: 'var(--color-link)',
              borderColor: 'var(--color-link)',
              '&:hover': { color: 'var(--color-link-hover)', borderColor: 'var(--color-link-hover)' },
            }}
          >
            GitHub
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
