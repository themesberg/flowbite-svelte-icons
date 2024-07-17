interface Page {
  loc: string;
  changefreq?: string;
  priority?: string;
  lastmod?: string;
}

const site = 'https://flowbite-svelte-icons.codewithshin.com';
const pages: Page[] = [
  {
    loc: '',
    changefreq: 'weekly',
    priority: '0.5',
    lastmod: '2024-05-20'
  },
  {
    loc: 'guide/custom-icons',
    changefreq: 'weekly',
    priority: '0.5'
  },
  {
    loc: 'guide/global-icons',
    changefreq: 'weekly',
    priority: '0.5'
  },
  {
    loc: 'guide/svelte-4/getting-started',
    changefreq: 'weekly',
    priority: '0.5'
  },
  {
    loc: 'guide/svelte-4/props',
    changefreq: 'weekly',
    priority: '0.5'
  },
  {
    loc: 'guide/svelte-5/getting-started',
    changefreq: 'weekly',
    priority: '0.5'
  },
  {
    loc: 'outline-icons',
    changefreq: 'weekly',
    priority: '0.5'
  },
  {
    loc: 'solid-icons',
    changefreq: 'weekly',
    priority: '0.5'
  }
];

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  const body = sitemap(pages);
  const response = new Response(body);
  response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
  response.headers.set('Content-Type', 'application/xml');
  return response;
}

const sitemap = (pages: Page[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  ${pages
    .map(
      ({ loc, changefreq, priority, lastmod }) => `
  <url>
    <loc>${site}/${loc}</loc>
    ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ''}
		${priority ? `<priority>${priority}</priority>` : ''}
		${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
  </url>
  `
    )
    .join('')}
</urlset>`;
