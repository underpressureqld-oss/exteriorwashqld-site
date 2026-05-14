import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import routes from './routes/index.js';
import { errorMiddleware } from './middleware/error.js';
import { globalRateLimit } from './middleware/global-rate-limit.js';
import logger from './utils/logger.js';
import { BodyLimit } from './constants/common.js';

const app = express();

app.set('trust proxy', true);

logger.info('\n╔═══════════════════════════════════════════════════════════╗');
logger.info('║         🚀 EXPRESS API SERVER INITIALIZATION 🚀          ║');
logger.info('╚═══════════════════════════════════════════════════════════╝\n');

logger.info('📋 Environment Configuration:');
logger.info(`   NODE_ENV: ${process.env.NODE_ENV || 'development'}`);
logger.info(`   PORT: ${process.env.PORT || 3001}`);
logger.info(`   CORS_ORIGIN: ${process.env.CORS_ORIGIN || '*'}`);

process.on('uncaughtException', (error) => {
	logger.error('Uncaught exception:', error);
});
  
process.on('unhandledRejection', (reason, promise) => {
	logger.error('Unhandled rejection at:', promise, 'reason:', reason);
});

process.on('SIGINT', async () => {
	logger.info('Interrupted');
	process.exit(0);
});

process.on('SIGTERM', async () => {
	logger.info('SIGTERM signal received');

	await new Promise(resolve => setTimeout(resolve, 3000));

	logger.info('Exiting');
	process.exit();
});

logger.info('\n🔧 Applying Middleware:');

app.use(helmet());
logger.info('   ✓ Helmet (security headers)');

app.use(cors({
	origin: process.env.CORS_ORIGIN,
	credentials: true,
}));
logger.info('   ✓ CORS (cross-origin requests)');

app.use(morgan('combined'));
logger.info('   ✓ Morgan (request logging)');

app.use(globalRateLimit);
logger.info('   ✓ Global Rate Limit (100 requests/5 minutes)');

app.use(express.json({
	limit: BodyLimit,
}));
logger.info('   ✓ JSON parser');

app.use(express.urlencoded({ 
	extended: true,
	limit: BodyLimit,
}));
logger.info('   ✓ URL-encoded parser');

logger.info('\n📍 Mounting Routes:');
app.use('/', routes());

app.use(errorMiddleware);
logger.info('   ✓ Error middleware');

app.use((req, res) => {
	logger.warn(`404 Not Found: ${req.method} ${req.path}`);
	res.status(404).json({ error: 'Route not found' });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
	logger.info('\n╔═══════════════════════════════════════════════════════════╗');
	logger.info(`║  ✅ API SERVER RUNNING ON PORT ${port}                        ║`);
	logger.info('╚═══════════════════════════════════════════════════════════╝');
	logger.info(`\n🌐 Access the API at: http://localhost:${port}`);
	logger.info(`📄 Sitemap endpoint: http://localhost:${port}/sitemap.xml`);
	logger.info(`❤️  Health check: http://localhost:${port}/health`);
	logger.info('\n✅ Backend sitemap route is ACTIVE and ready to serve dynamic XML');
	logger.info('✅ All suburb/service URLs will be generated from suburbServiceData.js');
	logger.info('✅ No static file conflicts - backend route is the sole handler\n');
});

export default app;