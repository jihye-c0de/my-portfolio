import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FavoriteRounded from '@mui/icons-material/FavoriteRounded';
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';
import AccessibilityNewRounded from '@mui/icons-material/AccessibilityNewRounded';

const HIGHLIGHTS = [
  {
    Icon: FavoriteRounded,
    title: '핵심 가치관',
    description: '사용자 경험을 최우선으로, 디테일을 놓치지 않으면서도 결과물은 깔끔하게 만드는 걸 중요하게 생각합니다.',
  },
  {
    Icon: AutoAwesomeRounded,
    title: '개인적 매력',
    description: '네일아트, 사진 찍기처럼 오밀조밀한 것을 모으고 꾸미는 걸 좋아하는 맥시멀리스트지만, 정작 작업물은 미니멀하게 정돈하는 편이에요.',
  },
  {
    Icon: AccessibilityNewRounded,
    title: '성장 목표',
    description: '유니버설 디자인을 지향합니다. 더 다양한 연령대가 편하게 쓸 수 있는 사용자 경험으로 넓혀가고 싶습니다.',
  },
];

function AboutMe() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        py: { xs: 4, md: 8 },
        backgroundColor: 'var(--color-bg-primary)',
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 } }}>
        <Typography
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
            lineHeight: 1.2,
            textAlign: 'center',
            color: 'var(--color-secondary)',
            mb: { xs: 3, md: 4 },
          }}
        >
          About Me
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' },
            lineHeight: 1.7,
            maxWidth: 720,
            mx: 'auto',
            textAlign: 'center',
            color: 'var(--color-text-primary)',
            mb: { xs: 5, md: 7 },
          }}
        >
          산업디자인을 4년 공부하고 졸업한 뒤, 단순한 흥미를 따라 웹디자인 분야로 넘어왔습니다.
          전공을 그대로 잇기보다 관심이 가는 방향으로 걸어온 시간이, 지금은 디자인과 개발을
          함께 다루는 지금의 저를 만들었습니다.
        </Typography>

        <Grid container spacing={3}>
          {HIGHLIGHTS.map(({ Icon, title, description }) => (
            <Grid key={title} size={{ xs: 12, md: 4 }}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  backgroundColor: 'var(--color-surface)',
                  boxShadow: '0 8px 20px rgba(27, 46, 92, 0.1)',
                }}
              >
                <CardContent sx={{ textAlign: 'center', px: { xs: 3, md: 3 }, py: { xs: 4, md: 4 } }}>
                  <Icon sx={{ fontSize: 36, color: 'var(--color-primary-dark)', mb: 1.5 }} />
                  <Typography
                    sx={{
                      fontSize: { xs: '1.05rem', md: '1.15rem' },
                      fontWeight: 700,
                      color: 'var(--color-secondary)',
                      mb: 1,
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutMe;
