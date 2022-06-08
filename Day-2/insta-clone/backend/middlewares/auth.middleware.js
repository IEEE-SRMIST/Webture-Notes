/**
 * Authentication Middleware
 */

// Dependencies
const jwt = require('jsonwebtoken');
const { APPLICATION_SECRET } = require('../config');

const auth = (req, res, next) => {
    try {
        
    } catch (error) {
        return res.status(401).json({
            message: 'Access Denied',
            success: false,
            data: {}
        })
    }
};