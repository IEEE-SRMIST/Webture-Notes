/**
 * Database Connection
 */

// Dependencies
const mongoose = require('mongoose');
const { DB_URL } = require('../config');

// Anonymous Self Calling Function to Connect to MonoDB
(async () => {
    try {
        await mongoose.connect(DB_URL, {
            // TODO: Add meaning of this
            useNewUrlParser: true,
            // TODO: Add meaning of this
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.log(`Unable to connect to MongoDB with error: ${error}`);
    }
})();
