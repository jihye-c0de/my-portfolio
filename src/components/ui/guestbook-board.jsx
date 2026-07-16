import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grow from '@mui/material/Grow';
import ExpandMoreRounded from '@mui/icons-material/ExpandMoreRounded';
import { supabase } from '../../lib/supabase.js';
import GuestbookForm from './guestbook-form.jsx';
import GuestbookPaper from './guestbook-paper.jsx';

const STACK_PREVIEW_STYLES = [
  { transform: 'rotate(0deg)', zIndex: 3 },
  { transform: 'rotate(-3deg) translateY(10px)', zIndex: 2, opacity: 0.9 },
  { transform: 'rotate(2deg) translateY(20px)', zIndex: 1, opacity: 0.75 },
];

function GuestbookBoard() {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchEntries() {
      const { data } = await supabase
        .from('portfolio_guestbook')
        .select('*')
        .order('created_at', { ascending: false });

      if (isMounted && data) {
        setEntries(data);
      }
      if (isMounted) {
        setIsLoading(false);
      }
    }

    fetchEntries();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSubmit = async (payload) => {
    setIsSubmitting(true);
    const { data, error } = await supabase
      .from('portfolio_guestbook')
      .insert(payload)
      .select()
      .single();

    if (!error && data) {
      setEntries((previous) => [data, ...previous]);
      setIsExpanded(true);
    }
    setIsSubmitting(false);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography
        sx={{
          fontSize: { xs: '1.1rem', md: '1.3rem' },
          fontWeight: 700,
          color: 'var(--color-secondary)',
        }}
      >
        방명록
      </Typography>

      <GuestbookForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />

      {isLoading && (
        <Typography sx={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
          방명록을 불러오는 중...
        </Typography>
      )}

      {!isLoading && entries.length === 0 && (
        <Typography sx={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
          아직 방명록이 없어요. 첫 번째 방명록을 남겨보세요!
        </Typography>
      )}

      {!isLoading && entries.length > 0 && !isExpanded && (
        <Box
          onClick={() => setIsExpanded(true)}
          sx={{
            position: 'relative',
            width: '100%',
            height: { xs: 140, md: 160 },
            cursor: 'pointer',
            mb: { xs: 2, md: 3 },
          }}
        >
          {entries.slice(0, 3).map((entry, index) => (
            <GuestbookPaper
              key={entry.id}
              entry={entry}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                transition: 'transform 0.3s ease',
                ...STACK_PREVIEW_STYLES[index],
              }}
            />
          ))}
          <Button
            endIcon={<ExpandMoreRounded />}
            sx={{
              position: 'absolute',
              bottom: -8,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 4,
              color: 'var(--color-secondary)',
              backgroundColor: 'var(--color-bg-primary)',
              boxShadow: '0 4px 10px rgba(27, 46, 92, 0.15)',
              '&:hover': { backgroundColor: 'var(--color-bg-primary)' },
            }}
          >
            방명록 {entries.length}개 펼쳐보기
          </Button>
        </Box>
      )}

      {!isLoading && entries.length > 0 && isExpanded && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {entries.map((entry, index) => (
            <Grow key={entry.id} in timeout={400} style={{ transitionDelay: `${Math.min(index, 6) * 80}ms` }}>
              <Box>
                <GuestbookPaper entry={entry} />
              </Box>
            </Grow>
          ))}
          <Button
            onClick={() => setIsExpanded(false)}
            sx={{ alignSelf: 'center', color: 'var(--color-text-secondary)' }}
          >
            접기
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default GuestbookBoard;
