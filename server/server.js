const express = require('express');

const route = require('./startup/route');
const logger = require('./startup/error_handler');
const connectDB = require('./startup/db');
const { configSettings, NODE_ENV } = require('./startup/settings');

/* Issue Tracking * Sentry * */
const Sentry = require('@sentry/node');
const Tracing = require('@sentry/tracing');

Sentry.init({
  dsn:
    'https://bcababa67494495a80f8175d2b3b406c@o543731.ingest.sentry.io/5749633',

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
  op: 'test',
  name: 'My First Test Transaction',
});


const app = express();

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
