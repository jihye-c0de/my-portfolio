import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import EmailRounded from '@mui/icons-material/EmailRounded';
import LocationOnRounded from '@mui/icons-material/LocationOnRounded';
import { SOCIAL_LINKS } from '../../data/social-links.js';

const NAME = '이지혜';
const EMAIL = 'wg3927@naver.com';
const LOCATION = '광주광역시 북구';

function ContactInfoCard() {
  return (
    <Card
      elevation={0}
      sx={{
        width: '100%',
        borderRadius: 3,
        px: { xs: 3, md: 4 },
        py: { xs: 3, md: 4 },
        backgroundColor: 'var(--color-surface)',
        boxShadow: '0 10px 28px rgba(27, 46, 92, 0.18)',
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '1.1rem', md: '1.3rem' },
          fontWeight: 700,
          color: 'var(--color-secondary)',
          mb: 0.5,
        }}
      >
        Contact
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: '0.95rem', md: '1rem' },
          fontWeight: 600,
          color: 'var(--color-text-primary)',
          mb: 2.5,
        }}
      >
        {NAME}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
        <EmailRounded sx={{ color: 'var(--color-primary-dark)' }} />
        <Typography
          component="a"
          href={`mailto:${EMAIL}`}
          sx={{
            fontSize: { xs: '0.95rem', md: '1rem' },
            color: 'var(--color-text-primary)',
            textDecoration: 'none',
            '&:hover': { color: 'var(--color-link-hover)' },
          }}
        >
          {EMAIL}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
        <LocationOnRounded sx={{ color: 'var(--color-primary-dark)' }} />
        <Typography
          sx={{
            fontSize: { xs: '0.95rem', md: '1rem' },
            color: 'var(--color-text-primary)',
          }}
        >
          {LOCATION}
        </Typography>
      </Box>

      <Divider sx={{ mb: 2.5, borderColor: 'var(--color-text-muted)', opacity: 0.3 }} />

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {SOCIAL_LINKS.map(({ label, href, Icon }) => (
          <IconButton
            key={label}
            component="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            size="small"
            sx={{
              color: 'var(--color-secondary)',
              '&:hover': { color: 'var(--color-primary-dark)', backgroundColor: 'transparent' },
            }}
          >
            <Icon fontSize="small" />
          </IconButton>
        ))}
      </Box>
    </Card>
  );
}

export default ContactInfoCard;
