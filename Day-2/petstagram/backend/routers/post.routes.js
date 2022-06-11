/**
 * Post Routes
 */

// Dependencies
const Router = require('express').Router();
const postController = require('../controllers/post.controller');
const auth = require('../middlewares/auth.middleware');

/***********************
 * Unauthenticated Routes
 ************************/

Router.get('/', postController.fetchAllPosts);

/***********************
 * Authenticated Routes
 ************************/

Router.post('/create', auth, postController.createPost);

Router.put('/update', auth, postController.updatePost);

Router.post('/delete', auth, postController.deletePost);

// Exporting Router
module.exports = Router;