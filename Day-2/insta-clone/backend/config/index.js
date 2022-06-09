/**
 * Application Configs
 */

// Dependencies
require('dotenv').config();

// Check for current running environment of application
const isProduction = process.env.NODE_ENV === 'production';

// Assign Database URL based on App environment
const DB_URL = isProduction ? DB_URL : 'mongodb://localhost:27017/Instagram';

// Configuration Container
const configuration = {
    PORT: process.env.PORT || 5000,
    APPLICATION_SECRET: process.env.APPLICATION_SECRET,
    DB_URL,
    isProduction,
};

// Exporting Configuration
module.exports = configuration;