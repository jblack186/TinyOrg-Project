// const { createProxyMiddleware } = require('http-proxy-middleware');


// module.exports = function(app) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       context: ["/api/customers/", '/api/recipes-list/'],
//       target: 'https://tinyo-challenge-backend.herokuapp.com/',
//       changeOrigin: true,
//     })
//   );
// };