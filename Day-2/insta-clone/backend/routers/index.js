/**
 * Application Router Hub
 */

// Dependencies
const Router = require('express').Router();
const authRouter = require('./auth.routes');
const userRouter = require('./user.routes');
const postRouter = require('./post.routes');

Router.use('/auth', authRouter);
Router.use('/user', userRouter);
Router.use('/post', postRouter);

// Exporting Application Router
module.exports = Router;