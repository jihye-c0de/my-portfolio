import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function AboutMeSection() {
  const navigate = useNavigate();

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
          backgroundColor: 'var(--color-surface)',
          boxShadow: '0 8px 20px rgba(27, 46, 92, 0.1)',
        }}
      >
        <CardContent sx={{ py: { xs: 4, md: 6 }, px: { xs: 3, md: 4 } }}>
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              lineHeight: 1.6,
              color: 'var(--color-text-primary)',
              mb: 3,
            }}
          >
            산업디자인을 4년 공부하고, 흥미를 따라 웹디자인으로 넘어왔습니다.
            사용자 경험과 디테일을 우선하면서도 깔끔한 결과물을 만드는 걸 좋아합니다.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate('/about')}
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
