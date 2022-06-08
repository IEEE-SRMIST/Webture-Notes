/**
 * Authentication Controllers
 */

// Dependencies
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { ApiError } = require('../utils/custom.util');
const { APPLICATION_SECRET } = require('../config');

// Auth Controller Container
const authController = {};

authController.signupUser = async (req, res, next) => {
    // Collecting Required Information from the Request Body
    const { fullName, email, password } = req.body;
    try {
    } catch (error) {
        next(error);
    }
};

authController.loginUser = async (req, res, next) => {
    // Collecting Required Information from the Request Body
    const { user, password } = req.body;
    try {
        // Check if Required fields are present
        if (!user || !password) throw new ApiError({ message: 'Required fields are missing', statusCode: 400 });

        // Check if user exists
        let loggedInUser = await User.find({ '$or': [{ email: user }, { username: user }] });
        if (!loggedInUser) throw new ApiError({ message: 'User does not exist!', statusCode: 404 });

        // Check if user has valid password
        const isValidPassword = await bcrypt.compare(password, loggedInUser.password)
        if (!isValidPassword) throw new ApiError({ message: 'Invalid Password', statusCode: 401 });

        // Updated User object before responding
        loggedInUser = loggedInUser.toObject();
        delete loggedInUser.password;

        // Create auth token and respond with cookie and user details
        const authToken = jwt.sign(loggedInUser, APPLICATION_SECRET, { expiresIn: '1d' });
        res.cookie('authToken', authToken);
        return res.statusCode(200).json({
            message: 'User login successful!',
            data: { user: loggedInUser },
            success: true,
        })
    } catch (error) {
        next(error);
    }
};

authController.logoutUser = async (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
};

// Exporting Controller
module.exports = authController;