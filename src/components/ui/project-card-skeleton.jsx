import Box from '@mui/material/Box';

const SKELETON_ANIMATION = 'skeleton-pulse 1.4s ease-in-out infinite';

/**
 * ProjectCardSkeleton 컴포넌트
 * 프로젝트 카드 로딩 중 보여줄 스켈레톤 UI.
 *
 * Example usage:
 * <ProjectCardSkeleton />
 */
function ProjectCardSkeleton() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: 3,
        overflow: 'hidden',
        backgroundColor: 'var(--color-surface)',
        boxShadow: '0 10px 28px rgba(27, 46, 92, 0.08)',
      }}
    >
      <Box
        sx={{
          width: '100%',
          aspectRatio: '1 / 1',
          backgroundColor: 'var(--color-bg-secondary)',
          animation: SKELETON_ANIMATION,
        }}
      />
      <Box sx={{ px: { xs: 2, md: 3 }, py: { xs: 2, md: 2.5 } }}>
        <Box
          sx={{
            width: '60%',
            height: 18,
            borderRadius: 1,
            backgroundColor: 'var(--color-bg-secondary)',
            animation: SKELETON_ANIMATION,
            mb: 1,
          }}
        />
        <Box
          sx={{
            width: '90%',
            height: 14,
            borderRadius: 1,
            backgroundColor: 'var(--color-bg-secondary)',
            animation: SKELETON_ANIMATION,
            mb: 0.5,
          }}
        />
        <Box
          sx={{
            width: '75%',
            height: 14,
            borderRadius: 1,
            backgroundColor: 'var(--color-bg-secondary)',
            animation: SKELETON_ANIMATION,
          }}
        />
      </Box>
    </Box>
  );
}

export default ProjectCardSkeleton;
