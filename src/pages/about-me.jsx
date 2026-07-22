import { useState, Suspense, lazy } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import SchoolRounded from '@mui/icons-material/SchoolRounded';
import PaletteRounded from '@mui/icons-material/PaletteRounded';
import WorkRounded from '@mui/icons-material/WorkRounded';
import ExpandMoreRounded from '@mui/icons-material/ExpandMoreRounded';
import SkillCategoryCard from '../components/ui/skill-category-card.jsx';
import ScrollReveal from '../components/ui/scroll-reveal.jsx';
import OptimizedImage from '../components/ui/optimized-image.jsx';
import { useSkills } from '../hooks/use-skills.js';
import { ABOUT_ME_DATA } from '../data/about-me-data.js';

const ContactSection = lazy(() => import('../components/landing/contact-section.jsx'));
const STAGGER_STEP_MS = 80;

function AboutMe() {
  const [data] = useState(ABOUT_ME_DATA);
  const [expandedId, setExpandedId] = useState(data.sections[0].id);
  const { groupedSkills } = useSkills();

  const { basicInfo, sections } = data;

  const infoRows = [
    { Icon: SchoolRounded, label: '학력', value: basicInfo.education },
    { Icon: PaletteRounded, label: '전공', value: basicInfo.major },
    { Icon: WorkRounded, label: '경력', value: basicInfo.experience },
  ];

  const handleAccordionChange = (sectionId) => (_, isExpanded) => {
    setExpandedId(isExpanded ? sectionId : false);
  };

  return (
    <>
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        py: { xs: 4, md: 8 },
        backgroundColor: 'var(--color-bg-primary)',
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 } }}>
          <Typography
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 800,
              lineHeight: 1.2,
              color: 'var(--color-secondary)',
            }}
          >
            About Me
          </Typography>
        </Box>

        <ScrollReveal>
        <Card
          elevation={0}
          sx={{
            borderRadius: 3,
            backgroundColor: 'var(--color-surface)',
            boxShadow: '0 10px 28px rgba(27, 46, 92, 0.14)',
            mb: { xs: 4, md: 5 },
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'center', md: 'center' },
              gap: { xs: 3, md: 4.5 },
              px: { xs: 3, md: 6 },
              py: { xs: 5, md: 7 },
              '&:last-child': { pb: { xs: 5, md: 7 } },
            }}
          >
            <OptimizedImage
              src={basicInfo.photoWebp}
              fallbackSrc={basicInfo.photo}
              alt={basicInfo.name}
              loading="eager"
              sx={{
                width: { xs: 160, md: 220 },
                height: { xs: 160, md: 220 },
                borderRadius: 3,
                objectFit: 'cover',
                boxShadow: '0 6px 16px rgba(27, 46, 92, 0.18)',
                flexShrink: 0,
              }}
            />
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, width: '100%' }}>
              <Typography
                sx={{
                  fontSize: { xs: '1.7rem', md: '2.1rem' },
                  fontWeight: 700,
                  color: 'var(--color-secondary)',
                  mb: 1.5,
                }}
              >
                {basicInfo.name}
              </Typography>
              <Stack spacing={1.5}>
                {infoRows.map(({ Icon, label, value }) => (
                  <Box
                    key={label}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: { xs: 'center', md: 'flex-start' },
                      gap: 1,
                    }}
                  >
                    <Icon sx={{ fontSize: 20, color: 'var(--color-primary-dark)' }} />
                    <Typography sx={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', width: 42 }}>
                      {label}
                    </Typography>
                    <Typography sx={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                      {value}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </CardContent>
        </Card>
        </ScrollReveal>

        <Stack spacing={1.5}>
          {sections.map((section, index) => (
            <ScrollReveal key={section.id} delay={index * STAGGER_STEP_MS}>
              <Accordion
                expanded={expandedId === section.id}
                onChange={handleAccordionChange(section.id)}
                elevation={0}
                disableGutters
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-surface)',
                  boxShadow: '0 8px 20px rgba(27, 46, 92, 0.1)',
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreRounded sx={{ color: 'var(--color-primary-dark)' }} />}
                  sx={{ px: { xs: 3, md: 4 }, py: 0.5 }}
                >
                  <Typography sx={{ fontSize: { xs: '0.95rem', md: '1.05rem' }, fontWeight: 700, color: 'var(--color-secondary)' }}>
                    {section.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: { xs: 3, md: 4 }, pb: { xs: 3, md: 4 } }}>
                  <Typography
                    sx={{
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      lineHeight: 1.8,
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {section.content}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </ScrollReveal>
          ))}
        </Stack>

        <Box sx={{ mt: { xs: 5, md: 6 } }}>
          <Typography
            sx={{
              fontSize: { xs: '1.3rem', md: '1.6rem' },
              fontWeight: 700,
              textAlign: 'center',
              color: 'var(--color-secondary)',
              mb: { xs: 2.5, md: 3 },
            }}
          >
            Skill
          </Typography>

          <Grid container spacing={2}>
            {groupedSkills.map((group, index) => (
              <Grid key={group.category} size={{ xs: 12, sm: 6 }}>
                <ScrollReveal delay={index * STAGGER_STEP_MS}>
                  <SkillCategoryCard category={group.category} color={group.color} skills={group.items} />
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
    <Suspense fallback={null}>
      <ContactSection />
    </Suspense>
    </>
  );
}

export default AboutMe;
