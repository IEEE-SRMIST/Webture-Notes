/**
 * Post Model
 */

// Dependencies
const { Schema, model } = require('mongoose');

// Post Schema
const PostSchema = new Schema({
    title: {
        type: String,
    },
    image: {
        type: String,
        default: '',
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
}, {
    timestamps: true,
});

// Post Model
const Post = model('Post', PostSchema);

// Exporting Model
module.exports = Post;