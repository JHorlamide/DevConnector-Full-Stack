const express = require('express');
const Sentry = require('@sentry/node');
const dotenv = require('dotenv');

const route = require('./startup/route');
const logger = require('./startup/error_handler');
const connectDB = require('./startup/db');
const { configSettings, NODE_ENV } = require('./startup/settings');

const app = express();

dotenv.config();

/* Issue Tracking * Sentry * */
Sentry.init({
  dsn:
  'https://bcababa67494495a80f8175d2b3b406c@o543731.ingest.sentry.io/5749633',
  
  tracesSampleRate: 1.0,
});


const PORT = process.env.PORT || 5000;

/* Initialize routes */
route(app);

connectDB();

/* Configuration settings  */
configSettings();

/* Checking node environment */
NODE_ENV();

app.listen(PORT, () => {
  logger.info(`Server started on  ${PORT}`);
});
