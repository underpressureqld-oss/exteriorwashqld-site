const API_SERVER_URL = "/hcgi/api";

const apiServerClient = {
    fetch: async (url, options = {}) => {
        try {
            const response = await window.fetch(API_SERVER_URL + url, options);
            return response;
        } catch (error) {
            // Silently handle errors in production to avoid console errors
            if (process.env.NODE_ENV === 'development') {
                console.error('API Server Client fetch error:', error);
            }
            throw error;
        }
    }
};

export default apiServerClient;

export { apiServerClient };
