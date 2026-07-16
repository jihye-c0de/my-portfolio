import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseRounded from '@mui/icons-material/CloseRounded';
import ContactInfoCard from '../ui/contact-info-card.jsx';
import GuestbookBoard from '../ui/guestbook-board.jsx';

const FOLDER_TABS = [
  {
    label: 'GUESTBOOK',
    glass: 'rgba(95, 232, 220, 0.78)',
    border: 'rgba(255, 255, 255, 0.6)',
    top: 0,
    align: 'left',
    zIndex: 8,
  },
  {
    label: 'CONTACT',
    glass: 'rgba(27, 46, 92, 0.88)',
    border: 'rgba(255, 255, 255, 0.3)',
    top: { xs: 76, md: 96 },
    align: 'right',
    zIndex: 9,
  },
];

function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 3 },
        backgroundColor: 'var(--color-bg-primary)',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 720, perspective: '1600px' }}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isOpen ? 'rotateX(-180deg)' : 'rotateX(0deg)',
          }}
        >
          {/* 접힌 상태: 반투명 글라스 폴더 탭 */}
          <Box
            onClick={() => setIsOpen(true)}
            sx={{
              position: isOpen ? 'absolute' : 'relative',
              inset: 0,
              backfaceVisibility: 'hidden',
              visibility: isOpen ? 'hidden' : 'visible',
              cursor: 'pointer',
              height: { xs: 260, md: 310 },
            }}
          >
            {FOLDER_TABS.map((tab) => (
              <Box
                key={tab.label}
                sx={{
                  position: 'absolute',
                  top: tab.top,
                  left: '4%',
                  right: '4%',
                  zIndex: tab.zIndex,
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(-6px)' },
                }}
              >
                {/* 인덱스처럼 튀어나온 탭 */}
                <Box
                  sx={{
                    width: 96,
                    height: 28,
                    ml: tab.align === 'left' ? { xs: 2, md: 3 } : 'auto',
                    mr: tab.align === 'left' ? 'auto' : { xs: 2, md: 3 },
                    borderRadius: '10px 10px 0 0',
                    backgroundColor: tab.glass,
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                    border: `1px solid ${tab.border}`,
                    borderBottom: 'none',
                  }}
                />
                {/* 폴더 본체 */}
                <Box
                  sx={{
                    height: { xs: 120, md: 150 },
                    borderRadius: tab.align === 'left' ? '0 16px 16px 16px' : '16px 0 16px 16px',
                    backgroundColor: tab.glass,
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                    border: `1px solid ${tab.border}`,
                    display: 'flex',
                    justifyContent: tab.align === 'left' ? 'flex-start' : 'flex-end',
                    px: 3,
                    pt: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      letterSpacing: 1,
                      fontSize: '0.75rem',
                      color: tab.align === 'left' ? 'var(--color-secondary)' : 'var(--color-bg-primary)',
                    }}
                  >
                    ( {tab.label} )
                  </Typography>
                </Box>
              </Box>
            ))}
            <Typography
              sx={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '0.85rem',
                color: 'var(--color-text-secondary)',
                zIndex: 20,
              }}
            >
              눌러서 열어보기
            </Typography>
          </Box>

          {/* 펼쳐진 상태: Contact + 방명록 */}
          <Box
            sx={{
              position: isOpen ? 'relative' : 'absolute',
              inset: 0,
              backfaceVisibility: 'hidden',
              transform: 'rotateX(180deg)',
              visibility: isOpen ? 'visible' : 'hidden',
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 3, md: 4 },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton
                onClick={() => setIsOpen(false)}
                aria-label="접기"
                size="small"
                sx={{ color: 'var(--color-text-secondary)' }}
              >
                <CloseRounded fontSize="small" />
              </IconButton>
            </Box>
            <ContactInfoCard />
            <GuestbookBoard />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactSection;
