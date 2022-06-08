/**
 * Application Configs
 */

// Dependencies
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

const DB_URL = isProduction ? DB_URL : '';

// Configuration Container
const configuration = {
    PORT: process.env.PORT || 5000,
    DB_URL,
    isProduction,
};

// Exporting Configuration
module.exports = configuration;