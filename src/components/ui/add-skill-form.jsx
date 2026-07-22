import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddRounded from '@mui/icons-material/AddRounded';

/**
 * AddSkillForm 컴포넌트
 *
 * Props:
 * @param {string[]} categoryOptions - 기존 카테고리 목록(자동완성 후보) [Required]
 * @param {function} onAdd - 스킬 추가 시 실행할 함수, { name, category, level, note } 객체를 인자로 받음 [Required]
 *
 * Example usage:
 * <AddSkillForm categoryOptions={['그래픽 디자인', '3D 디자인', '개발']} onAdd={handleAddSkill} />
 */
function AddSkillForm({ categoryOptions, onAdd }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState(50);

  const isValid = name.trim() !== '' && category.trim() !== '';

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;

    onAdd({ name: name.trim(), category: category.trim(), level, note: '새로 추가한 스킬' });
    setName('');
    setCategory('');
    setLevel(50);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 3,
        backgroundColor: 'var(--color-surface)',
        boxShadow: '0 8px 20px rgba(27, 46, 92, 0.1)',
        p: { xs: 3, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        gap: 2.5,
      }}
    >
      <Typography sx={{ fontSize: { xs: '0.95rem', md: '1.05rem' }, fontWeight: 700, color: 'var(--color-secondary)' }}>
        스킬 추가하기
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
        <TextField
          label="기술명"
          value={name}
          onChange={(event) => setName(event.target.value)}
          size="small"
          fullWidth
        />
        <Autocomplete
          freeSolo
          options={categoryOptions}
          inputValue={category}
          onInputChange={(_, value) => setCategory(value)}
          sx={{ width: { xs: '100%', sm: 220 }, flexShrink: 0 }}
          renderInput={(params) => <TextField {...params} label="카테고리" size="small" />}
        />
      </Box>

      <Box>
        <Typography sx={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', mb: 1 }}>
          숙련도 {level}%
        </Typography>
        <Slider
          value={level}
          onChange={(_, value) => setLevel(value)}
          step={5}
          min={0}
          max={100}
          sx={{ color: 'var(--color-primary-dark)', maxWidth: 320 }}
        />
      </Box>

      <Button
        type="submit"
        variant="contained"
        disabled={!isValid}
        startIcon={<AddRounded />}
        sx={{
          alignSelf: 'flex-start',
          backgroundColor: 'var(--color-button-primary)',
          '&:hover': { backgroundColor: 'var(--color-button-hover)' },
        }}
      >
        추가
      </Button>
    </Box>
  );
}

export default AddSkillForm;
