import { writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { generateSitemap } from '../src/lib/sitemapGenerator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const sitemapPath = join(__dirname, '../public/sitemap.xml');

const xml = generateSitemap();

await writeFile(sitemapPath, xml, 'utf8');
console.log(`✅ Sitemap generated: ${sitemapPath}`);
