/**
 * Database Connection
 */

// Dependencies
const mongoose = require('mongoose');
const { DB_URL } = require('../config');

(async () => {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.log(`Unable to connect to MongoDB with error: ${error}`);
    }
})();
