/**
 * Server Entry Point
 */

// Dependencies
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const appRouter = require('./routers');
const { PORT } = require('./config');

// Initializing Application
const app = express();
require('./database');

// Setting up Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// Application Routes
app.use('/api', appRouter);

// Error Handling Middlewares

// Initializing Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});
