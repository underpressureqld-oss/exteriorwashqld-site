import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import logger from '../utils/logger.js';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.get('/sitemap.xml', async (req, res) => {
  logger.info('═══════════════════════════════════════════════════════════');
  logger.info('🔍 SITEMAP REQUEST RECEIVED');
  logger.info('═══════════════════════════════════════════════════════════');
  logger.info(`📍 Endpoint: GET /sitemap.xml`);
  logger.info(`🌐 Full URL: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
  logger.info(`⏰ Timestamp: ${new Date().toISOString()}`);
  
  // Import suburbServiceData
  const suburbServiceDataPath = join(__dirname, '../../..', 'web/src/data/suburbServiceData.js');
  const blogDataPath = join(__dirname, '../../..', 'web/src/data/BlogData.js');
  logger.info(`\n📂 Loading suburbServiceData from:`);
  logger.info(`   ${suburbServiceDataPath}`);
  logger.info(`\n📂 Loading BlogData from:`);
  logger.info(`   ${blogDataPath}`);
  
  let servicesData;
  let suburbsData;
  let blogPostsData = [];
  
  try {
    const module = await import(suburbServiceDataPath);
    const imported = module.default || module;
    servicesData = imported.services;
    suburbsData = imported.suburbs;
    logger.info('✅ Successfully imported suburbServiceData');
  } catch (error) {
    logger.error(`❌ Failed to import suburbServiceData: ${error.message}`);
    throw new Error(`Failed to import suburbServiceData: ${error.message}`);
  }

  try {
    const module = await import(blogDataPath);
    const imported = module.default || module;
    blogPostsData = imported.blogPosts || [];
    logger.info('✅ Successfully imported BlogData');
  } catch (error) {
    logger.warn(`⚠️ Failed to import BlogData: ${error.message}. Blog posts will not be included in sitemap.`);
    blogPostsData = [];
  }

  if (!servicesData || !suburbsData || typeof servicesData !== 'object' || typeof suburbsData !== 'object') {
    logger.error('❌ Invalid suburbServiceData structure: missing suburbs or services');
    throw new Error('Invalid suburbServiceData structure: missing suburbs or services');
  }

  const suburbCount = Object.keys(suburbsData).length;
  const serviceCount = Object.keys(servicesData).length;
  const blogCount = blogPostsData.length;
  logger.info(`\n📊 Data Statistics:`);
  logger.info(`   Suburbs loaded: ${suburbCount}`);
  logger.info(`   Services loaded: ${serviceCount}`);
  logger.info(`   Blog posts loaded: ${blogCount}`);
  logger.info(`   Expected URLs: ${6 + blogCount + (suburbCount * serviceCount)} (6 main pages + blog posts + suburb/service combinations)`);

  const baseUrl = 'https://www.exteriorwashqld.com.au';
  const lastmod = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

  // Main pages with their priorities
  const mainPages = [
    { path: '/', priority: '1.0', label: 'Homepage' },
    { path: '/about', priority: '0.9', label: 'About' },
    { path: '/contact', priority: '0.9', label: 'Contact' },
    { path: '/gallery', priority: '0.9', label: 'Gallery' },
    { path: '/services', priority: '0.9', label: 'Services' },
    { path: '/blog', priority: '0.9', label: 'Blog' },
  ];

  const serviceSlugs = Object.keys(servicesData);

  logger.info(`\n🏗️  Building XML Sitemap:`);
  logger.info(`   Base URL: ${baseUrl}`);
  logger.info(`   Last Modified: ${lastmod}`);
  logger.info(`   Services: ${serviceSlugs.join(', ')}`);

  // Build XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  // Add main pages
  logger.info(`\n📄 Adding main pages:`);
  mainPages.forEach((page) => {
    xml += '<url>';
    xml += `<loc>${baseUrl}${page.path}</loc>`;
    xml += `<lastmod>${lastmod}</lastmod>`;
    xml += `<priority>${page.priority}</priority>`;
    xml += '</url>';
    logger.info(`   ✓ ${page.label}: ${baseUrl}${page.path}`);
  });

  // Add blog posts
  logger.info(`\n📰 Adding blog posts:`);
  blogPostsData.forEach((post) => {
    const blogUrl = `${baseUrl}/blog/${post.slug}`;
    xml += '<url>';
    xml += `<loc>${blogUrl}</loc>`;
    xml += `<lastmod>${lastmod}</lastmod>`;
    xml += '<changefreq>weekly</changefreq>';
    xml += '<priority>0.7</priority>';
    xml += '</url>';
    logger.info(`   ✓ Blog post: ${blogUrl}`);
  });

  let urlCount = mainPages.length + blogPostsData.length;
  logger.info(`\n🏘️  Adding suburb/service combinations:`);
  
  const sampleUrls = [];
  serviceSlugs.forEach((service) => {
    Object.values(suburbsData).forEach((suburb) => {
      // Convert suburb name to URL format (lowercase, replace spaces with hyphens)
      const suburbSlug = suburb.name.toLowerCase().replace(/\s+/g, '-');
      const path = `/${service}-${suburbSlug}`;

      xml += '<url>';
      xml += `<loc>${baseUrl}${path}</loc>`;
      xml += `<lastmod>${lastmod}</lastmod>`;
      xml += '<changefreq>weekly</changefreq>';
      xml += '<priority>0.8</priority>';
      xml += '</url>';
      
      // Collect sample URLs for logging
      if (sampleUrls.length < 5) {
        sampleUrls.push(`${baseUrl}${path}`);
      }
      
      urlCount++;
    });
  });

  logger.info(`   ✓ Generated ${urlCount - mainPages.length} suburb/service URLs`);
  logger.info(`\n📋 Sample Generated URLs:`);
  sampleUrls.forEach((url) => {
    logger.info(`   • ${url}`);
  });

  xml += '</urlset>';

  logger.info(`\n✅ SITEMAP GENERATION COMPLETE`);
  logger.info(`   Total URLs: ${urlCount}`);
  logger.info(`   XML Size: ${(xml.length / 1024).toFixed(2)} KB`);
  logger.info(`   Valid XML: ${xml.startsWith('<?xml') && xml.endsWith('</urlset>')}`);

  // Set response headers
  logger.info(`\n📤 Response Headers:`);
  logger.info(`   Content-Type: application/xml; charset=utf-8`);
  logger.info(`   Cache-Control: public, max-age=86400`);
  logger.info(`   Status: 200 OK`);

  res.set('Content-Type', 'application/xml; charset=utf-8');
  res.set('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
  res.set('X-Sitemap-Generated', new Date().toISOString());
  res.set('X-Sitemap-URLs', urlCount.toString());
  
  logger.info(`\n═══════════════════════════════════════════════════════════`);
  logger.info('✅ SITEMAP SERVED SUCCESSFULLY FROM BACKEND ROUTE');
  logger.info(`═══════════════════════════════════════════════════════════\n`);
  
  res.send(xml);
});

export default router;