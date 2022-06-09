/**
 * Error Handling Middleware
 */

// Dependencies
const { ApiError } = require('../utils/custom.util');

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

module.exports = expressErrorHandler;