export function GET() {
  const robotsTxt = `
User-agent: *
Allow: /

# Sitemap
Sitemap: https://spotts.ai/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow certain paths (if any)
# Disallow: /admin
# Disallow: /api

# Allow common crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /
`.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // Cache for 1 day
    },
  });
}