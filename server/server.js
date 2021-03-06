const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./router');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use(morgan('dev'));
app.use('/products/:id', express.static(PUBLIC_DIR));
// app.use('/:id', express.static(PUBLIC_DIR));

// Handling asset requests for webpack bundles by passing off requests to the bundles router
app.use('/products/:id/bundles', router.bundles);
// Handling AJAX requests to the API by passing off requests to the api router
app.use('/', router.api);

module.exports = app;
