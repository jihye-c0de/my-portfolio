import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PaletteRounded from '@mui/icons-material/PaletteRounded';
import ViewInArRounded from '@mui/icons-material/ViewInArRounded';
import CodeRounded from '@mui/icons-material/CodeRounded';
import OptimizedImage from '../ui/optimized-image.jsx';
import { ABOUT_ME_DATA } from '../../data/about-me-data.js';
import { SKILLS } from '../../data/skills-data.js';

const SUMMARY_LENGTH = 130;
const TOP_SKILL_COUNT = 4;

const CATEGORY_ICONS = {
  '그래픽 디자인': PaletteRounded,
  '3D 디자인': ViewInArRounded,
  개발: CodeRounded,
};

function AboutMeSection() {
  const navigate = useNavigate();

  const { basicInfo } = ABOUT_ME_DATA;
  const devStory = ABOUT_ME_DATA.sections.find((section) => section.id === 'dev-story');
  const summary = `${devStory.content.slice(0, SUMMARY_LENGTH)}...`;
  const topSkills = [...SKILLS].sort((a, b) => b.level - a.level).slice(0, TOP_SKILL_COUNT);

  return (
    <Box
      component="section"
      id="about-preview"
      sx={{
        width: '100%',
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 3 },
        backgroundColor: 'var(--color-bg-primary)',
        textAlign: 'center',
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '1.75rem', md: '2.5rem' },
          fontWeight: 800,
          color: 'var(--color-secondary)',
          mb: 2,
        }}
      >
        About Me
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '1rem', md: '1.2rem' },
          lineHeight: 1.6,
          maxWidth: 640,
          mx: 'auto',
          mb: 4,
          color: 'var(--color-text-secondary)',
        }}
      >
        산업디자인과 개발을 넘나드는 저를 소개합니다.
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card
          elevation={0}
          sx={{
            maxWidth: 900,
            width: '100%',
            borderRadius: 3,
            backgroundColor: 'var(--color-surface)',
            boxShadow: '0 8px 20px rgba(27, 46, 92, 0.1)',
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: { xs: 3, md: 5 },
              px: { xs: 3, md: 5 },
              py: { xs: 4, md: 5 },
              '&:last-child': { pb: { xs: 4, md: 5 } },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                flexShrink: 0,
                width: { xs: '100%', md: 200 },
              }}
            >
              <OptimizedImage
                src={basicInfo.photoWebp}
                fallbackSrc={basicInfo.photo}
                alt={basicInfo.name}
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: 3,
                  objectFit: 'cover',
                  boxShadow: '0 6px 16px rgba(27, 46, 92, 0.18)',
                  mb: 2,
                }}
              />
              <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-secondary)', mb: 0.5 }}>
                {basicInfo.name}
              </Typography>
              <Typography sx={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                {basicInfo.education}
              </Typography>
              <Typography sx={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                {basicInfo.major} · {basicInfo.experience}
              </Typography>
            </Box>

            <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, width: '100%' }}>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', md: '1.15rem' },
                  lineHeight: 1.7,
                  color: 'var(--color-text-primary)',
                  mb: 3,
                }}
              >
                {summary}
              </Typography>

              <Stack
                direction="row"
                spacing={1.5}
                useFlexGap
                sx={{
                  flexWrap: 'wrap',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  mb: 3,
                }}
              >
                {topSkills.map((skill) => {
                  const Icon = CATEGORY_ICONS[skill.category];
                  return (
                    <Box
                      key={skill.name}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.75,
                        backgroundColor: 'var(--color-bg-secondary)',
                        borderRadius: 99,
                        px: 1.5,
                        py: 0.6,
                      }}
                    >
                      <Icon sx={{ fontSize: 16, color: 'var(--color-primary-dark)' }} />
                      <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                        {skill.name}
                      </Typography>
                    </Box>
                  );
                })}
              </Stack>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Button
        variant="outlined"
        onClick={() => navigate('/about')}
        sx={{
          mt: 4,
          color: 'var(--color-link)',
          borderColor: 'var(--color-link)',
          '&:hover': {
            color: 'var(--color-link-hover)',
            borderColor: 'var(--color-link-hover)',
          },
        }}
      >
        더 알아보기
      </Button>
    </Box>
  );
}

export default AboutMeSection;
