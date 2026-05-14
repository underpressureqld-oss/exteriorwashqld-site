import { services, suburbs } from '../data/suburbServiceData.js';
import { blogPosts } from '../data/BlogData.js';

export const generateSitemap = (baseUrl = 'https://www.exteriorwashqld.com.au') => {
  const urls = new Set();
  const currentDate = new Date().toISOString().split('T')[0];

  const addUrl = (path, priority, changefreq) => {
    // Prevent duplicates by using Set, though logic below shouldn't create them
    const loc = `${baseUrl}${path}`;
    const entry = `  <url>
    <loc>${loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    urls.add(entry);
  };

  // 1. Main Pages
  addUrl('', '1.0', 'weekly');
  addUrl('/about', '0.8', 'weekly');
  addUrl('/contact', '0.8', 'weekly');
  addUrl('/services', '0.8', 'weekly');
  addUrl('/gallery', '0.8', 'weekly');
  addUrl('/blog', '0.8', 'weekly');

  // 1a. Dedicated Service Pages
  addUrl('/driveway-cleaning', '0.7', 'monthly');
  addUrl('/roof-cleaning', '0.7', 'monthly');
  addUrl('/house-washing', '0.7', 'monthly');
  addUrl('/solar-panel-cleaning', '0.7', 'monthly');
  addUrl('/gutter-cleaning', '0.7', 'monthly');
  addUrl('/commercial-cleaning', '0.7', 'monthly');

  // 2. Blog Posts
  blogPosts.forEach((post) => {
    addUrl(`/blog/${post.slug}`, '0.7', 'weekly');
  });

  // 3. Dynamic Suburb/Service Pages
  // Iterate through all services and suburbs to generate combinations
  Object.keys(services).forEach((serviceId) => {
    Object.keys(suburbs).forEach((suburbId) => {
      // Validate combination exists (in this case, all combinations are valid based on data structure)
      if (services[serviceId] && suburbs[suburbId]) {
        addUrl(`/${serviceId}-${suburbId}`, '0.7', 'monthly');
      }
    });
  });

  // 3. Construct complete XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Array.from(urls).join('\n')}
</urlset>`;

  return xml;
};