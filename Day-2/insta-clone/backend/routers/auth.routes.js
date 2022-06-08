/**
 * Authentication Routes
 */

// Dependencies
const Router = require('express').Router();
const authController = require('../controllers/auth.controller');

/***********************
 * Unauthenticated Routes
 ************************/

Router.post('/signup', authController.signupUser);

Router.post('/login', authController.loginUser);

/***********************
 * Unauthenticated Routes
 ************************/

Router.post('/logout', authController.logoutUser);

// Exporting Router
module.exports = Router;