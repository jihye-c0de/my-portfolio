import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

/**
 * GuestbookPaper 컴포넌트
 *
 * Props:
 * @param {object} entry - 방명록 한 건의 데이터 [Required]
 * @param {object} style - 겹쳐진 종이 느낌을 위한 추가 sx 스타일 [Optional, 기본값: {}]
 *
 * Example usage:
 * <GuestbookPaper entry={entry} style={{ transform: 'rotate(-2deg)' }} />
 */
function GuestbookPaper({ entry, style = {} }) {
  const createdAtLabel = new Date(entry.created_at).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Paper
      elevation={0}
      sx={{
        width: '100%',
        borderRadius: 3,
        px: { xs: 2.5, md: 3 },
        py: { xs: 2.5, md: 3 },
        backgroundColor: 'var(--color-bg-primary)',
        border: '1px solid rgba(27, 46, 92, 0.08)',
        boxShadow: '0 8px 24px rgba(27, 46, 92, 0.16)',
        ...style,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
        <Box>
          <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-secondary)' }}>
            {entry.emoji} {entry.name}
          </Typography>
          {entry.job && (
            <Typography sx={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
              {entry.job}
            </Typography>
          )}
        </Box>
        <Rating value={entry.rating} readOnly size="small" />
      </Box>

      <Typography
        sx={{
          fontSize: '0.95rem',
          lineHeight: 1.6,
          color: 'var(--color-text-primary)',
          whiteSpace: 'pre-wrap',
          mb: 1.5,
        }}
      >
        {entry.message}
      </Typography>

      <Typography sx={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'right' }}>
        {createdAtLabel}
      </Typography>
    </Paper>
  );
}

export default GuestbookPaper;
