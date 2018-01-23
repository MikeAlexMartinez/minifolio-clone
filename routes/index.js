const express = require('express');
const router = express.Router();

const appRoutes = require('./appRoutes');

// api routes
router.use('/api', require('./api'));

appRoutes.forEach(({ method, route, fn}) => {
  
  router[method](route, fn);

});

// fallback route
router.all('*', function notFound(req, res) {
  res.send('Page not found!');
});

module.exports = router;
