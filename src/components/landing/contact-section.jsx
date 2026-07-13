import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ContactSection() {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 3 },
        textAlign: 'center',
        background: 'var(--gradient-brand)',
        color: 'var(--color-secondary)',
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '1.5rem', md: '2rem' },
          fontWeight: 500,
          mb: 2,
        }}
      >
        Contact
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '1rem', md: '1.2rem' },
          lineHeight: 1.6,
          maxWidth: 640,
          mx: 'auto',
        }}
      >
        여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
      </Typography>
    </Box>
  );
}

export default ContactSection;
