import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Projects() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 4, md: 8 },
        backgroundColor: 'var(--color-bg-primary)',
      }}
    >
      <Container maxWidth="sm" sx={{ py: 4, textAlign: 'center' }}>
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' },
            lineHeight: 1.6,
            color: 'var(--color-text-primary)',
          }}
        >
          Projects 페이지가 개발될 공간입니다. 포트폴리오 작품들이 들어갈 예정입니다.
        </Typography>
      </Container>
    </Box>
  );
}

export default Projects;
