import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const PLACEHOLDER_COUNT = 4;

function ProjectsSection() {
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
          fontSize: { xs: '1rem', md: '1.2rem' },
          lineHeight: 1.6,
          maxWidth: 640,
          mx: 'auto',
          mb: 4,
          color: 'var(--color-text-primary)',
        }}
      >
        여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 &apos;더 보기&apos; 버튼이 들어갈 예정입니다.
      </Typography>
      <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: 900, mx: 'auto', mb: 4 }}>
        {Array.from({ length: PLACEHOLDER_COUNT }, (_, index) => (
          <Grid key={index} size={{ xs: 6, md: 3 }}>
            <Card
              elevation={0}
              sx={{
                aspectRatio: '1 / 1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--color-bg-secondary)',
              }}
            >
              <CardContent>
                <Typography sx={{ color: 'var(--color-text-muted)' }}>
                  썸네일 {index + 1}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="outlined"
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
