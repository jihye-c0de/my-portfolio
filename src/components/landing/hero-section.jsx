import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded';
import CodeRounded from '@mui/icons-material/CodeRounded';
import PaletteRounded from '@mui/icons-material/PaletteRounded';
import ViewInArRounded from '@mui/icons-material/ViewInArRounded';
import BrushRounded from '@mui/icons-material/BrushRounded';
import { useTypewriter } from '../../hooks/use-typewriter.js';
import { useScrollTransform } from '../../hooks/use-scroll-transform.js';
import ParallaxShape from '../ui/parallax-shape.jsx';
import { SOCIAL_LINKS } from '../../data/social-links.js';

const ROLES = ['웹디자이너입니다', '풀스택 개발자입니다'];

const TECH_STACK = [
  { name: 'React', Icon: CodeRounded },
  { name: 'Figma', Icon: PaletteRounded },
  { name: 'Illustrator', Icon: BrushRounded },
  { name: 'Rhino', Icon: ViewInArRounded },
];

const DECORATIVE_SHAPES = [
  { top: '10%', left: '8%', size: 240, color: 'var(--color-primary)', duration: '7s', delay: '0s', speed: 0.15 },
  { top: '68%', left: '80%', size: 240, color: 'var(--color-accent)', duration: '7s', delay: '0.3s', speed: 0.28 },
];

function HeroSection() {
  const navigate = useNavigate();
  const typedText = useTypewriter(ROLES);
  const scrollRef = useScrollTransform();

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollDown = () => {
    document.getElementById('about-preview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '75vh', md: '88vh' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        py: { xs: 8, md: 10 },
        px: { xs: 2, md: 3 },
        textAlign: 'center',
        background: 'var(--gradient-hero)',
        color: 'var(--color-hero-text)',
        textShadow: 'var(--hero-text-shadow)',
        animation: 'rise-up 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {DECORATIVE_SHAPES.map((shape, index) => (
        <ParallaxShape
          key={index}
          top={shape.top}
          left={shape.left}
          size={shape.size}
          color={shape.color}
          speed={shape.speed}
          floatDuration={shape.duration}
          floatDelay={shape.delay}
        />
      ))}

      <Container
        ref={scrollRef}
        maxWidth="sm"
        sx={{
          position: 'relative',
          zIndex: 1,
          opacity: 'calc(1 - var(--scroll-progress, 0))',
          transform:
            'translate3d(0, calc(var(--scroll-progress, 0) * 60px), 0) scale(calc(1 - var(--scroll-progress, 0) * 0.08))',
          willChange: 'opacity, transform',
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
            mb: 1.5,
          }}
        >
          보는 디자인을 넘어, 직접 움직이는 경험을 만듭니다.
        </Typography>

        <Stack
          direction="row"
          spacing={1.5}
          sx={{ justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}
        >
          {TECH_STACK.map(({ name, Icon }) => (
            <Tooltip key={name} title={name} arrow>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'var(--color-surface)',
                  color: 'var(--color-primary-dark)',
                  boxShadow: '0 4px 12px rgba(27, 46, 92, 0.12)',
                  transition: 'transform 0.5s ease, box-shadow 0.3s ease',
                  willChange: 'transform',
                  '&:hover': {
                    transform: 'rotate(360deg) scale(1.12)',
                    boxShadow: '0 0 0 4px var(--color-primary-light), 0 6px 16px rgba(27, 46, 92, 0.2)',
                  },
                }}
              >
                <Icon fontSize="small" />
              </Box>
            </Tooltip>
          ))}
        </Stack>

        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, width: '100%', mb: 4 }}>
          <Button
            variant="contained"
            onClick={() => navigate('/projects')}
            sx={{
              background: 'linear-gradient(135deg, var(--color-button-primary), var(--color-primary-dark))',
              backgroundSize: '160% 160%',
              backgroundPosition: '0% 50%',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease, background-position 0.4s ease',
              willChange: 'transform',
              '&:hover': {
                backgroundPosition: '100% 50%',
                transform: 'translateY(-3px) scale(1.03)',
                boxShadow: '0 10px 24px rgba(0, 168, 157, 0.35)',
              },
            }}
          >
            프로젝트 보기
          </Button>
          <Button
            variant="outlined"
            onClick={handleContactClick}
            sx={{
              color: 'var(--color-hero-text)',
              borderColor: 'var(--color-hero-text)',
              transition: 'transform 0.2s ease, background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
              '&:hover': {
                color: 'var(--color-link-hover)',
                borderColor: 'var(--color-link-hover)',
                transform: 'translateY(-3px)',
              },
            }}
          >
            연락하기
          </Button>
        </Box>

        <Stack direction="row" spacing={1} sx={{ width: '100%', justifyContent: 'center' }}>
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <IconButton
              key={label}
              component="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              sx={{
                color: 'var(--color-hero-text)',
                transition: 'color 0.2s ease, transform 0.2s ease',
                '&:hover': { color: 'var(--color-primary-dark)', transform: 'translateY(-3px)' },
              }}
            >
              <Icon />
            </IconButton>
          ))}
        </Stack>
      </Container>

      <IconButton
        onClick={handleScrollDown}
        aria-label="아래로 스크롤"
        sx={{
          position: 'absolute',
          bottom: { xs: 16, md: 28 },
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
          color: 'var(--color-hero-text)',
          opacity: 0.6,
          animation: 'bounce-down 1.6s ease-in-out infinite',
        }}
      >
        <KeyboardArrowDownRounded fontSize="large" />
      </IconButton>
    </Box>
  );
}

export default HeroSection;
