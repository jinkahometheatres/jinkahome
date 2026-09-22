export const getImageUrl = (imagePath: string | null | undefined, fallback: string): string => {
  if (!imagePath) return fallback;
  if (imagePath.startsWith('http')) return imagePath;
  return `http://localhost:8000${imagePath.startsWith('/') ? '' : '/'}${imagePath}`;
};
