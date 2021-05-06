const functions = require('firebase-functions');
const express = require('express');
const hotelsApi = require('./src/routes/hotels');

const app = express();

app.use('/api/hotels',hotelsApi);

  exports.app = functions.https.onRequest(app);