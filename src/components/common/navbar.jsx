import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useInView } from '../../hooks/use-in-view.js';
import { useHeaderVisibility } from '../../hooks/use-header-visibility.js';
import { useScrollProgress } from '../../hooks/use-scroll-progress.js';
import ThemeToggle from './theme-toggle.jsx';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Projects', path: '/projects' },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const heroInView = useInView('hero');
  const isHeaderVisible = useHeaderVisibility(heroInView);
  const scrollProgress = useScrollProgress();

  const currentPath = NAV_ITEMS.some((item) => item.path === location.pathname)
    ? location.pathname
    : false;

  const handleNavChange = (_event, value) => navigate(value);

  const handleMobileNavClick = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: 'var(--color-mint)',
        boxShadow: '0 2px 10px rgba(27, 46, 92, 0.12)',
        transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', flexWrap: 'wrap', py: { xs: 1, md: 0 } }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.15rem', md: '1.4rem' },
              letterSpacing: '-0.02em',
              color: 'var(--color-secondary)',
            }}
          >
            My Portfolio
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, md: 2 } }}>
            <ThemeToggle />

            {isMobile ? (
              <IconButton
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                aria-label="메뉴 열기"
                sx={{ p: 1 }}
              >
                <Box sx={{ width: 24, height: 18, position: 'relative' }}>
                  {[0, 1, 2].map((i) => (
                    <Box
                      key={i}
                      sx={{
                        position: 'absolute',
                        left: 0,
                        top: i * 8,
                        width: '100%',
                        height: 2,
                        borderRadius: 1,
                        backgroundColor: 'var(--color-secondary)',
                        transition: 'transform 0.3s ease, opacity 0.3s ease',
                        opacity: isMobileMenuOpen && i === 1 ? 0 : 1,
                        transform: isMobileMenuOpen
                          ? i === 0
                            ? 'translateY(8px) rotate(45deg)'
                            : i === 2
                              ? 'translateY(-8px) rotate(-45deg)'
                              : 'none'
                          : 'none',
                      }}
                    />
                  ))}
                </Box>
              </IconButton>
            ) : (
              <Tabs
                value={currentPath}
                onChange={handleNavChange}
                textColor="inherit"
                sx={{
                  '& .MuiTab-root': { color: 'var(--color-secondary)', opacity: 0.6, fontWeight: 700 },
                  '& .Mui-selected': { color: 'var(--color-secondary) !important', opacity: 1, fontWeight: 800 },
                  '& .MuiTabs-indicator': { backgroundColor: 'var(--color-primary-dark)' },
                }}
              >
                {NAV_ITEMS.map((item) => (
                  <Tab key={item.path} label={item.label} value={item.path} />
                ))}
              </Tabs>
            )}
          </Box>
        </Toolbar>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: 3,
          width: `${scrollProgress}%`,
          backgroundColor: 'var(--color-primary-dark)',
          transition: 'width 0.1s linear',
        }}
      />

      <Drawer anchor="right" open={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
        <Box sx={{ width: 220, pt: 2, height: '100%', backgroundColor: 'var(--color-bg-primary)' }} role="presentation">
          <List>
            {NAV_ITEMS.map((item) => (
              <ListItemButton
                key={item.path}
                selected={currentPath === item.path}
                onClick={() => handleMobileNavClick(item.path)}
                sx={{
                  '&.Mui-selected': { backgroundColor: 'var(--color-bg-secondary)' },
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontWeight: currentPath === item.path ? 800 : 600,
                        color: 'var(--color-secondary)',
                      }}
                    >
                      {item.label}
                    </Typography>
                  }
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
