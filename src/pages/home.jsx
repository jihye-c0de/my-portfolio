import { Suspense, lazy } from 'react';
import Box from '@mui/material/Box';
import HeroSection from '../components/landing/hero-section.jsx';
import StatsSection from '../components/landing/stats-section.jsx';
import AboutMeSection from '../components/landing/about-me-section.jsx';
import SkillTreeSection from '../components/landing/skill-tree-section.jsx';
import ProjectsSection from '../components/landing/projects-section.jsx';
import ScrollReveal from '../components/ui/scroll-reveal.jsx';

const ContactSection = lazy(() => import('../components/landing/contact-section.jsx'));

function Home() {
  return (
    <Box sx={{ width: '100%' }}>
      <HeroSection />
      <ScrollReveal>
        <StatsSection />
      </ScrollReveal>
      <ScrollReveal>
        <AboutMeSection />
      </ScrollReveal>
      <ScrollReveal>
        <SkillTreeSection />
      </ScrollReveal>
      <ScrollReveal>
        <ProjectsSection />
      </ScrollReveal>
      <Suspense fallback={null}>
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
      </Suspense>
    </Box>
  );
}

export default Home;
