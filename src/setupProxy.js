const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    const options = {
        target: 'https://gymer-management-system.herokuapp.com',
        changeOrigin: true
    };

    app.use('/api/', createProxyMiddleware(options));
};