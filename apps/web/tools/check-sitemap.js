import fs from 'fs';
import path from 'path';
import { services, suburbs } from '../src/data/suburbServiceData.js';
import { blogPosts } from '../src/data/BlogData.js';

const baseUrl = 'https://www.exteriorwashqld.com.au';
const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
const sitemapRaw = fs.readFileSync(sitemapPath, 'utf8');
const urlMatches = [...sitemapRaw.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const count = urlMatches.length;

const expectedStatic = [
  '',
  '/about',
  '/contact',
  '/services',
  '/gallery',
  '/blog',
  '/driveway-cleaning',
  '/roof-cleaning',
  '/house-washing',
  '/solar-panel-cleaning',
  '/gutter-cleaning',
  '/commercial-cleaning'
];
const expectedBlog = blogPosts.map(post => `/blog/${post.slug}`);
const expectedDynamic = [];
Object.keys(services).forEach(serviceId => {
  Object.keys(suburbs).forEach(suburbId => {
    expectedDynamic.push(`/${serviceId}-${suburbId}`);
  });
});

const expectedStaticUrls = expectedStatic.map(p => `${baseUrl}${p}`);
const expectedBlogUrls = expectedBlog.map(p => `${baseUrl}${p}`);
const expectedDynamicUrls = expectedDynamic.map(p => `${baseUrl}${p}`);

const missingStatic = expectedStaticUrls.filter(url => !urlMatches.includes(url));
const missingBlog = expectedBlogUrls.filter(url => !urlMatches.includes(url));
const missingDynamic = expectedDynamicUrls.filter(url => !urlMatches.includes(url));

console.log('sitemap count', count);
console.log('expected static count', expectedStaticUrls.length);
console.log('expected blog count', expectedBlogUrls.length);
console.log('expected dynamic count', expectedDynamicUrls.length);
console.log('missing static', missingStatic);
console.log('missing blog', missingBlog);
console.log('missing dynamic count', missingDynamic.length);
console.log('first missing dynamic', missingDynamic.slice(0, 10));

const unexpected = urlMatches.filter(url => {
  if (expectedStaticUrls.includes(url)) return false;
  if (expectedBlogUrls.includes(url)) return false;
  if (expectedDynamicUrls.includes(url)) return false;
  return true;
});
console.log('unexpected urls count', unexpected.length);
console.log('unexpected urls sample', unexpected.slice(0, 20));
