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
    const { fullName, email, password, username } = req.body;
    try {
        // Check if Required fields are present
        if (!fullName || !email || !password || !username) throw new ApiError({ message: 'Required fields are missing', statusCode: 400 });

        // Check if User already exists
        let newUser = await User.findOne({ '$or': [{ email }, { username }] });
        if (newUser) throw new ApiError({ message: 'Account with same email or username already exists', statusCode: 409 });

        // Create Account if does not exist

        // Hash password before saving
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        newUser = new User({ fullName, email, password: hashedPassword, username });
        await newUser.save();

        // Update user object before responding
        newUser = newUser.toObject();
        delete newUser.password;

        // Create auth token and respond with cookie and user details
        const authToken = jwt.sign({ user: newUser }, APPLICATION_SECRET, { expiresIn: '1d' });
        res.cookie('authToken', authToken);
        return res.status(200).json({
            message: 'User login successful!',
            data: { user: newUser },
            success: true,
        });
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
        let loggedInUser = await User.findOne({ '$or': [{ email: user }, { username: user }] });
        if (!loggedInUser) throw new ApiError({ message: 'User does not exist!', statusCode: 404 });

        // Check if user has valid password
        const isValidPassword = await bcrypt.compare(password, loggedInUser.password)
        if (!isValidPassword) throw new ApiError({ message: 'Invalid Password', statusCode: 401 });

        // Updated User object before responding
        loggedInUser = loggedInUser.toObject();
        delete loggedInUser.password;

        // Create auth token and respond with cookie and user details
        const authToken = jwt.sign({ user: loggedInUser }, APPLICATION_SECRET, { expiresIn: '1d' });
        res.cookie('authToken', authToken);
        return res.status(200).json({
            message: 'User login successful!',
            data: { user: loggedInUser },
            success: true,
        });
    } catch (error) {
        next(error);
    }
};

authController.logoutUser = async (req, res, next) => {
    try {
        // Clear Cookie For logging out
        res.clearCookie('authToken');
        return res.status(200).json({
            message: 'User logout successful!',
            success: true,
            data: {},
        })
    } catch (error) {
        next(error);
    }
};

// Exporting Controller
module.exports = authController;