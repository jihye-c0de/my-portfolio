import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Navbar from './components/common/navbar.jsx';
import Home from './pages/home.jsx';
import AboutMe from './pages/about-me.jsx';
import Projects from './pages/projects.jsx';

function App() {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Box>
  );
}

export default App;
