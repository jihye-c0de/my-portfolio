import Box from '@mui/material/Box';

/**
 * OptimizedImage 컴포넌트
 * WebP 소스 + 원본 포맷 폴백을 갖춘 <picture> 기반 이미지.
 * WebP를 지원하지 않는 브라우저는 자동으로 fallbackSrc를 사용한다.
 *
 * Props:
 * @param {string} src - WebP 이미지 경로 [Required]
 * @param {string} fallbackSrc - WebP 미지원 브라우저용 폴백 이미지 경로(jpg/png 등) [Required]
 * @param {string} alt - 대체 텍스트 [Required]
 * @param {string} loading - 로딩 전략('lazy' | 'eager') [Optional, 기본값: 'lazy']
 * @param {object} sx - img 엘리먼트에 적용할 스타일 [Optional]
 *
 * Example usage:
 * <OptimizedImage src={photoWebp} fallbackSrc={photo} alt="이지혜" sx={{ width: 120, height: 120 }} />
 */
function OptimizedImage({ src, fallbackSrc, alt, loading = 'lazy', sx = {} }) {
  return (
    <Box component="picture">
      <source srcSet={src} type="image/webp" />
      <Box component="img" src={fallbackSrc} alt={alt} loading={loading} sx={sx} />
    </Box>
  );
}

export default OptimizedImage;
