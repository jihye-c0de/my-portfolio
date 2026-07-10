import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 3 },
        textAlign: 'center',
        backgroundColor: 'var(--color-secondary)',
        color: 'var(--color-bg-primary)',
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '1rem', md: '1.2rem' },
          lineHeight: 1.6,
          maxWidth: 720,
          mx: 'auto',
        }}
      >
        여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
      </Typography>
    </Box>
  );
}

export default HeroSection;
