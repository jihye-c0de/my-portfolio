import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useTypewriter } from '../../hooks/use-typewriter.js';

const ROLES = ['웹디자이너입니다', '풀스택 개발자입니다'];

function HeroSection() {
  const navigate = useNavigate();
  const typedText = useTypewriter(ROLES);

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 3 },
        textAlign: 'center',
        background: 'var(--color-primary-light)',
        color: 'var(--color-secondary)',
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '0.9rem', md: '1.1rem' },
          fontWeight: 600,
          letterSpacing: 1,
          opacity: 0.75,
          mb: 1,
        }}
      >
        Hello, I&apos;m
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: '2.5rem', md: '4rem' },
          fontWeight: 800,
          lineHeight: 1.1,
          mb: 2,
        }}
      >
        이지혜
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: '1.2rem', md: '1.75rem' },
          fontWeight: 700,
          minHeight: { xs: '1.6em', md: '1.4em' },
          mb: 3,
        }}
      >
        {typedText}
        <Box
          component="span"
          sx={{
            display: 'inline-block',
            width: '2px',
            height: '0.9em',
            ml: 0.5,
            verticalAlign: 'middle',
            backgroundColor: 'currentColor',
            animation: 'blink 0.8s step-end infinite',
          }}
        />
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: '1rem', md: '1.2rem' },
          lineHeight: 1.6,
          maxWidth: 640,
          mx: 'auto',
          mb: 4,
        }}
      >
        디자인과 개발을 넘나들며, 아이디어를 실제로 동작하는 화면으로 만듭니다.
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" useFlexGap>
        <Button
          variant="contained"
          onClick={() => navigate('/projects')}
          sx={{
            backgroundColor: 'var(--color-button-primary)',
            '&:hover': { backgroundColor: 'var(--color-button-hover)' },
          }}
        >
          프로젝트 보기
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate('/about')}
          sx={{
            color: 'var(--color-secondary)',
            borderColor: 'var(--color-secondary)',
            '&:hover': {
              color: 'var(--color-link-hover)',
              borderColor: 'var(--color-link-hover)',
            },
          }}
        >
          더 알아보기
        </Button>
      </Stack>
    </Box>
  );
}

export default HeroSection;
