import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import EmailRounded from '@mui/icons-material/EmailRounded';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';

const EMAIL = 'your.email@example.com';

const SNS_LINKS = [
  { label: 'GitHub', href: 'https://github.com/yourusername', Icon: GitHub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', Icon: LinkedIn },
  { label: 'Instagram', href: 'https://instagram.com/yourusername', Icon: Instagram },
];

function ContactInfoCard() {
  return (
    <Card
      elevation={0}
      sx={{
        width: '100%',
        borderRadius: 3,
        px: { xs: 3, md: 4 },
        py: { xs: 3, md: 4 },
        backgroundColor: 'var(--color-bg-secondary)',
        boxShadow: '0 8px 24px rgba(27, 46, 92, 0.08)',
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '1.1rem', md: '1.3rem' },
          fontWeight: 700,
          color: 'var(--color-secondary)',
          mb: 2.5,
        }}
      >
        Contact
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
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

      <Divider sx={{ mb: 2.5, borderColor: 'var(--color-text-muted)', opacity: 0.3 }} />

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {SNS_LINKS.map(({ label, href, Icon }) => (
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
