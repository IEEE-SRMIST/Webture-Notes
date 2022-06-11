/**
 * Server Entry Point
 */

// Dependencies
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const wokeDyno = require('woke-dyno');
const appRouter = require('./routers');
const expressErrorHandler = require('./middlewares/error.middleware');
const { ApiError } = require('./utils/custom.util');
const { PORT } = require('./config');

// Initializing Application
const app = express();
require('./database');

// Setting up Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Application Routes
app.use('/api', appRouter);

// Error Handling Middlewares

// 404 Handler
app.use((req, res, next) => {
    const error = new ApiError({ message: `The request: ${req.originalUrl} you're looking for doesn't exist in this server!`, statusCode: 404 });
    return next(error);
});

// Express Error Handler
app.use(expressErrorHandler);

// Initializing Server
app.listen(PORT, () => {
    wokeDyno('https://ieee-petstagram.herokuapp.com').start();
    console.log(`Server running on http://localhost:${PORT}`)
});
