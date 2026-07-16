import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const EMOJI_OPTIONS = ['😊', '🎉', '❤️', '👍', '✨', '🔥'];

/**
 * GuestbookForm 컴포넌트
 *
 * Props:
 * @param {function} onSubmit - 방명록 작성 완료 시 실행할 함수, 입력값 객체를 인자로 받음 [Required]
 * @param {boolean} isSubmitting - 제출 중 여부 [Optional, 기본값: false]
 *
 * Example usage:
 * <GuestbookForm onSubmit={handleSubmit} isSubmitting={submitting} />
 */
function GuestbookForm({ onSubmit, isSubmitting = false }) {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [message, setMessage] = useState('');
  const [emoji, setEmoji] = useState(EMOJI_OPTIONS[0]);
  const [rating, setRating] = useState(5);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !message.trim()) {
      setError('이름과 방명록 내용을 입력해주세요.');
      return;
    }

    setError('');
    onSubmit({ name: name.trim(), job: job.trim(), message: message.trim(), emoji, rating });
    setName('');
    setJob('');
    setMessage('');
    setEmoji(EMOJI_OPTIONS[0]);
    setRating(5);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: { xs: 2.5, md: 3 },
        borderRadius: 2,
        backgroundColor: 'var(--color-bg-primary)',
        boxShadow: '0 10px 28px rgba(27, 46, 92, 0.18)',
      }}
    >
      <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-secondary)' }}>
        방명록 남기기
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
        <TextField
          label="이름"
          value={name}
          onChange={(event) => setName(event.target.value)}
          size="small"
          fullWidth
          required
        />
        <TextField
          label="직업 (선택)"
          value={job}
          onChange={(event) => setJob(event.target.value)}
          size="small"
          fullWidth
        />
      </Box>

      <TextField
        label="방명록 내용"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        multiline
        minRows={3}
        fullWidth
        required
      />

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
        <ToggleButtonGroup
          value={emoji}
          exclusive
          onChange={(_event, value) => value && setEmoji(value)}
          size="small"
        >
          {EMOJI_OPTIONS.map((option) => (
            <ToggleButton key={option} value={option} sx={{ fontSize: '1.1rem', px: 1.2 }}>
              {option}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <Rating value={rating} onChange={(_event, value) => setRating(value || 1)} />
      </Box>

      {error && (
        <Typography sx={{ fontSize: '0.8rem', color: 'var(--color-accent)' }}>
          {error}
        </Typography>
      )}

      <Button
        type="submit"
        variant="contained"
        disabled={isSubmitting}
        sx={{
          alignSelf: 'flex-end',
          backgroundColor: 'var(--color-button-primary)',
          '&:hover': { backgroundColor: 'var(--color-button-hover)' },
        }}
      >
        {isSubmitting ? '남기는 중...' : '남기기'}
      </Button>
    </Box>
  );
}

export default GuestbookForm;
