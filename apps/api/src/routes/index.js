import { Router } from 'express';
import healthCheck from './health-check.js';
import sitemapRouter from './sitemap.js';
import logger from '../utils/logger.js';

const router = Router();

export default () => {
    logger.info('\n═══════════════════════════════════════════════════════════');
    logger.info('🚀 INITIALIZING EXPRESS ROUTES');
    logger.info('═══════════════════════════════════════════════════════════');
    
    router.get('/health', healthCheck);
    logger.info('✅ Registered: GET /health');
    logger.info('   Purpose: Health check endpoint');
    logger.info('   Auth: None');
    logger.info('   Rate Limited: Yes (global 100/5min)');
    
    router.use('/', sitemapRouter);
    logger.info('\n✅ Registered: GET /sitemap.xml');
    logger.info('   Purpose: Dynamic XML sitemap with all suburb/service URLs');
    logger.info('   Auth: None (public access)');
    logger.info('   Rate Limited: Yes (global 100/5min - acceptable for public)');
    logger.info('   Cache: 24 hours (86400 seconds)');
    logger.info('   Response Type: application/xml');
    logger.info('   Data Source: apps/web/src/data/suburbServiceData.js');
    logger.info('   Expected URLs: 150+ (6 main pages + suburbs × services)');
    
    logger.info('\n═══════════════════════════════════════════════════════════');
    logger.info('✅ ALL ROUTES REGISTERED SUCCESSFULLY');
    logger.info('═══════════════════════════════════════════════════════════\n');

    return router;
};