// Helper function to get Unsplash image URL from search query
export function getUnsplashImageUrl(query: string, width = 400, height = 400): string {
  const encodedQuery = encodeURIComponent(query);
  return `https://source.unsplash.com/${width}x${height}/?${encodedQuery}`;
}
