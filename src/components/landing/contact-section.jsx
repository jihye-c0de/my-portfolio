import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseRounded from '@mui/icons-material/CloseRounded';
import ContactInfoCard from '../ui/contact-info-card.jsx';
import GuestbookBoard from '../ui/guestbook-board.jsx';

const TAB_AREA_HEIGHT = { xs: 260, md: 310 };

const FOLDER_TABS = [
  {
    key: 'guestbook',
    label: 'GUESTBOOK',
    glass: 'rgba(95, 232, 220, 0.78)',
    border: 'rgba(255, 255, 255, 0.6)',
    top: 0,
    align: 'left',
    zIndex: 8,
    riseMarginTop: { xs: '-260px', md: '-310px' },
  },
  {
    key: 'contact',
    label: 'CONTACT',
    glass: 'rgba(27, 46, 92, 0.88)',
    border: 'rgba(255, 255, 255, 0.3)',
    top: { xs: 76, md: 96 },
    align: 'right',
    zIndex: 9,
    riseMarginTop: { xs: '-184px', md: '-214px' },
  },
];

function ContactSection() {
  const [activePanel, setActivePanel] = useState(null);
  const activeTab = FOLDER_TABS.find((tab) => tab.key === activePanel);

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        width: '100%',
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 3 },
        backgroundColor: 'var(--color-bg-primary)',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 900 }}>
        <Box sx={{ position: 'relative', height: TAB_AREA_HEIGHT }}>
          {/* 폴더 탭: 열리면 아래로 내려가며 사라짐 */}
          {FOLDER_TABS.map((tab) => (
            <Box
              key={tab.key}
              onClick={() => setActivePanel(tab.key)}
              sx={{
                position: 'absolute',
                top: tab.top,
                left: '4%',
                right: '4%',
                zIndex: tab.zIndex,
                cursor: 'pointer',
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease',
                transform: activePanel ? 'translateY(70px)' : 'translateY(0)',
                opacity: activePanel ? 0 : 1,
                pointerEvents: activePanel ? 'none' : 'auto',
                '&:hover': { transform: activePanel ? 'translateY(70px)' : 'translateY(-6px)' },
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

          {!activePanel && (
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
              탭을 눌러 열어보기
            </Typography>
          )}
        </Box>

        {/* 열린 탭이 있던 자리에서 종이가 올라오듯 등장 */}
        {activeTab && (
          <Box
            key={activeTab.key}
            sx={{
              position: 'relative',
              zIndex: 25,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              mt: activeTab.riseMarginTop,
              animation: 'rise-up 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton
                onClick={() => setActivePanel(null)}
                aria-label="접기"
                size="small"
                sx={{ color: 'var(--color-text-secondary)' }}
              >
                <CloseRounded fontSize="small" />
              </IconButton>
            </Box>
            {activeTab.key === 'contact' ? <ContactInfoCard /> : <GuestbookBoard />}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default ContactSection;
