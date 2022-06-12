/**
 * Application Router Hub
 */

// Dependencies
const Router = require('express').Router();
const authRouter = require('./auth.routes');
const postRouter = require('./post.routes');

Router.use('/auth', authRouter);
Router.use('/post', postRouter);

// Exporting Application Router
module.exports = Router;