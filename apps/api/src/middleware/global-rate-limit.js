import rateLimit from 'express-rate-limit';
import logger from '../utils/logger.js';

export const globalRateLimit = rateLimit({
	windowMs: 5 * 60 * 1000,
	max: 100,
	standardHeaders: true,
	legacyHeaders: false,
	message: { error: 'Too many requests, please try again later' },
	validate: { trustProxy: false },
	skip: (req) => {
		// Log rate limit info for sitemap requests
		if (req.path === '/sitemap.xml') {
			logger.info(`⏱️  Rate limit check for /sitemap.xml - Remaining: ${req.rateLimit?.remaining || 'N/A'}`);
		}
		return false;
	},
});