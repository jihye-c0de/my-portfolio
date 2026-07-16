import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { supabase } from '../../lib/supabase.js';
import GuestbookForm from './guestbook-form.jsx';
import GuestbookPaper from './guestbook-paper.jsx';

const STACK_OFFSETS = [
  { transform: 'translate(0px, 0px) scale(1)', zIndex: 3, boxShadow: '0 10px 28px rgba(27, 46, 92, 0.18)' },
  { transform: 'translate(28px, 8px) scale(0.97)', zIndex: 2, boxShadow: '0 8px 20px rgba(27, 46, 92, 0.14)' },
  { transform: 'translate(52px, 16px) scale(0.94)', zIndex: 1, boxShadow: '0 6px 16px rgba(27, 46, 92, 0.1)' },
];

const LEAVE_STYLE = { transform: 'translate(0px, 130%) scale(0.98)' };
const ADVANCE_DELAY_MS = 350;

function GuestbookBoard() {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);

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
      setCurrentIndex(0);
    }
    setIsSubmitting(false);
  };

  const handleAdvance = () => {
    if (entries.length <= 1 || isLeaving) {
      return;
    }
    setIsLeaving(true);
    setTimeout(() => {
      setCurrentIndex((previous) => (previous + 1) % entries.length);
      setIsLeaving(false);
    }, ADVANCE_DELAY_MS);
  };

  const stackCount = Math.min(entries.length, STACK_OFFSETS.length);
  const visibleEntries = Array.from(
    { length: stackCount },
    (_, index) => entries[(currentIndex + index) % entries.length],
  );

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

      {!isLoading && entries.length > 0 && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box
            onClick={handleAdvance}
            sx={{
              position: 'relative',
              width: '100%',
              minHeight: { xs: 220, md: 260 },
              cursor: entries.length > 1 ? 'pointer' : 'default',
            }}
          >
            {visibleEntries.map((entry, index) => (
              <GuestbookPaper
                key={entry.id}
                entry={entry}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  ...STACK_OFFSETS[index],
                  ...(index === 0 && isLeaving ? LEAVE_STYLE : {}),
                }}
              />
            ))}
          </Box>

          {entries.length > 1 && (
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: '0.8rem',
                color: 'var(--color-text-secondary)',
              }}
            >
              탭하여 다음 방명록 보기 · {currentIndex + 1} / {entries.length}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
}

export default GuestbookBoard;
