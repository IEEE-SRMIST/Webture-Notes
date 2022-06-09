/**
 * Authentication Middleware
 */

// Dependencies
const jwt = require('jsonwebtoken');
const { APPLICATION_SECRET } = require('../config');

const auth = (req, res, next) => {
    const { authToken } = req.cookies;
    try {
        // Check if Auth Token is there
        if (!authToken) throw new Error();

        // Verify Auth Token and User Object
        const decoded = jwt.verify(authToken, APPLICATION_SECRET);
        if (!decoded.user) throw new Error();

        // All good then proceed to next handler
        req.user = decoded.user;
        return next();
    } catch (error) {
        console.log(error);
        res.clearCookie('authToken');
        return res.status(401).json({
            message: 'Access Denied',
            success: false,
            data: {}
        })
    }
};

module.exports = auth;