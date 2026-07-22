import { useState } from 'react';
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
import AddRounded from '@mui/icons-material/AddRounded';
import Button from '@mui/material/Button';
import SkillDetailCard from '../components/ui/skill-detail-card.jsx';
import AddSkillForm from '../components/ui/add-skill-form.jsx';
import { useSkills } from '../hooks/use-skills.js';
import profilePhoto from '../assets/profile.jpg';

const aboutMeData = {
  basicInfo: {
    name: '이지혜',
    education: '전주대학교 산업디자인학과',
    major: '산업디자인',
    experience: '신입',
    photo: profilePhoto,
  },
  sections: [
    {
      id: 'dev-story',
      title: '나의 개발 스토리',
      content:
        '전주대학교 산업디자인학과에서 4년간 제품과 공간을 만드는 법을 배웠습니다. 전공을 마칠 즈음, 사람들이 매일 손에 쥐는 화면 안의 경험을 직접 만들어보고 싶다는 흥미가 생겼고, 그 흥미를 따라 웹디자인과 개발의 세계로 방향을 틀었습니다. 전공을 그대로 잇기보다 흥미를 따라간 전환이었지만, 산업디자인에서 배운 입체적인 조형 감각과 사용자 중심 사고는 지금의 작업에도 그대로 이어지고 있습니다.',
      showInHome: true,
    },
    {
      id: 'philosophy',
      title: '개발 철학',
      content:
        '사용자 경험을 최우선으로 생각합니다. 화면 뒤에는 항상 그것을 사용하는 사람이 있다는 걸 잊지 않으려 하고, 작은 디테일 하나도 놓치지 않으려 노력합니다. 동시에 결과물은 군더더기 없이 깔끔하게 정돈해, 사용자가 고민 없이 원하는 것을 찾을 수 있도록 만드는 것을 목표로 합니다.',
      showInHome: true,
    },
    {
      id: 'personal',
      title: '개인적인 이야기',
      content: '네일아트 · 뜨개질 · 동물의숲 · 친모아 · 사진꾸미기 · 디지털카메라 · 영상편집',
      showInHome: false,
    },
  ],
};

function AboutMe() {
  const [data] = useState(aboutMeData);
  const [expandedId, setExpandedId] = useState(data.sections[0].id);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const { skills, categoryOptions, addSkill } = useSkills();

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

        <Card
          elevation={0}
          sx={{
            borderRadius: 3,
            backgroundColor: 'var(--color-surface)',
            boxShadow: '0 8px 20px rgba(27, 46, 92, 0.1)',
            mb: { xs: 3, md: 4 },
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: { xs: 2.5, md: 3.5 },
              px: { xs: 3, md: 5 },
              py: { xs: 4, md: 5 },
            }}
          >
            <Box
              component="img"
              src={basicInfo.photo}
              alt={basicInfo.name}
              sx={{
                width: { xs: 128, md: 140 },
                height: { xs: 128, md: 140 },
                borderRadius: 3,
                objectFit: 'cover',
                boxShadow: '0 6px 16px rgba(27, 46, 92, 0.18)',
                flexShrink: 0,
              }}
            />
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, width: '100%' }}>
              <Typography
                sx={{
                  fontSize: { xs: '1.4rem', md: '1.6rem' },
                  fontWeight: 700,
                  color: 'var(--color-secondary)',
                  mb: 1.5,
                }}
              >
                {basicInfo.name}
              </Typography>
              <Stack spacing={1}>
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
                    <Icon sx={{ fontSize: 18, color: 'var(--color-primary-dark)' }} />
                    <Typography sx={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', width: 40 }}>
                      {label}
                    </Typography>
                    <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                      {value}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </CardContent>
        </Card>

        <Stack spacing={1.5}>
          {sections.map((section) => (
            <Accordion
              key={section.id}
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
            {skills.map((skill) => (
              <Grid key={skill.name} size={{ xs: 12, sm: 6 }}>
                <SkillDetailCard
                  name={skill.name}
                  level={skill.level}
                  category={skill.category}
                  color={skill.color}
                />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 3, md: 4 } }}>
            <Button
              variant="outlined"
              startIcon={<AddRounded />}
              onClick={() => setIsAddFormOpen((prev) => !prev)}
              sx={{
                borderRadius: 99,
                color: 'var(--color-primary-dark)',
                borderColor: 'var(--color-primary-dark)',
                '&:hover': { color: 'var(--color-button-hover)', borderColor: 'var(--color-button-hover)' },
              }}
            >
              스킬 추가
            </Button>
          </Box>

          {isAddFormOpen && (
            <Box sx={{ mt: { xs: 2.5, md: 3 } }}>
              <AddSkillForm categoryOptions={categoryOptions} onAdd={addSkill} />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default AboutMe;
