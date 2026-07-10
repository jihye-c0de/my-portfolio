import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function AboutMeSection() {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 3 },
        backgroundColor: 'var(--color-bg-primary)',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Card
        elevation={0}
        sx={{
          maxWidth: 600,
          width: '100%',
          textAlign: 'center',
          backgroundColor: 'var(--color-bg-secondary)',
        }}
      >
        <CardContent sx={{ py: { xs: 4, md: 6 } }}>
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              lineHeight: 1.6,
              color: 'var(--color-text-primary)',
              mb: 3,
            }}
          >
            여기는 About Me 섹션입니다. 간단한 자기소개와 &apos;더 알아보기&apos; 버튼이 들어갈 예정입니다.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'var(--color-button-primary)',
              '&:hover': { backgroundColor: 'var(--color-button-hover)' },
            }}
          >
            더 알아보기
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AboutMeSection;
