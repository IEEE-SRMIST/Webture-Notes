/**
 * Post Model
 */

// Dependencies
const {Schema, model} = require('mongoose');

// Post Schema
const PostSchema = new Schema({});

// Post Model
const Post = model('Post', PostSchema);

// Exporting Model
module.exports = Post;