/**
 * Error Handling Middleware
 */

// Dependencies
const { ApiError } = require('../utils/custom.util');

/**
 * @description Express Error Handler, takes in 4 params when it's the last request handler in line
 *  (err, req, res, next) => Helps handling Error's specifically down the middleware cycle.
 *  Checks if Error was declared by one of the controller or was it an unknown error.        
 */
const expressErrorHandler = (err, req, res, next) => {
    console.log(err);
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            message: err.message,
            success: false,
            data: {},
        });
    }
    return res.status(500).json({
        message: 'Internal Server Error',
        success: false,
        data: {},
    });
};

// Exporting Middleware
module.exports = expressErrorHandler;