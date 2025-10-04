export function GET() {
  const manifest = {
    name: 'Spotts.ai - AI Agents with Human Oversight',
    short_name: 'Spotts.ai',
    description: 'Deploy AI agents that handle workflows autonomously—with human oversight built in for critical decisions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#06B6D4',
    icons: [
      {
        src: '/icon-192',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };

  return Response.json(manifest, {
    headers: {
      'Cache-Control': 'public, max-age=86400', // Cache for 1 day
    },
  });
}