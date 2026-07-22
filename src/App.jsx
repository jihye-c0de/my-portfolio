import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Navbar from './components/common/navbar.jsx';
import CustomCursor from './components/ui/custom-cursor.jsx';
import Home from './pages/home.jsx';

const AboutMe = lazy(() => import('./pages/about-me.jsx'));
const Projects = lazy(() => import('./pages/projects.jsx'));

function App() {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <CustomCursor />
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Suspense>
    </Box>
  );
}

export default App;
