import Box from '@mui/material/Box';
import HeroSection from '../components/landing/hero-section.jsx';
import AboutMeSection from '../components/landing/about-me-section.jsx';
import SkillTreeSection from '../components/landing/skill-tree-section.jsx';
import ProjectsSection from '../components/landing/projects-section.jsx';
import ContactSection from '../components/landing/contact-section.jsx';

function Home() {
  return (
    <Box sx={{ width: '100%' }}>
      <HeroSection />
      <AboutMeSection />
      <SkillTreeSection />
      <ProjectsSection />
      <ContactSection />
    </Box>
  );
}

export default Home;
