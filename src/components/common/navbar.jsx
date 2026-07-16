import { useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Projects', path: '/projects' },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = NAV_ITEMS.some((item) => item.path === location.pathname)
    ? location.pathname
    : false;

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: 'var(--color-mint)',
        borderBottom: '1px solid var(--color-bg-secondary)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', flexWrap: 'wrap', py: { xs: 1, md: 0 } }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 700, color: 'var(--color-secondary)' }}
          >
            My Portfolio
          </Typography>
          <Tabs
            value={currentPath}
            onChange={(_event, value) => navigate(value)}
            textColor="inherit"
            sx={{
              '& .MuiTab-root': { color: 'var(--color-secondary)', opacity: 0.6 },
              '& .Mui-selected': { color: 'var(--color-secondary) !important', opacity: 1 },
              '& .MuiTabs-indicator': { backgroundColor: 'var(--color-primary-dark)' },
            }}
          >
            {NAV_ITEMS.map((item) => (
              <Tab key={item.path} label={item.label} value={item.path} />
            ))}
          </Tabs>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
