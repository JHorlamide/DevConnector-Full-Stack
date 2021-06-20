const mongoose = require('mongoose');
const config = require('config');
const debug = require('debug');

/* Custom module */
const logger = require('./error_handler');
const db_uri = config.get('mongoURI');
const dbConnection = debug('app:db');

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  logger.info('Mongodb connected...');
  dbConnection('Mongodb connected...');
};

module.exports = connectDB;
