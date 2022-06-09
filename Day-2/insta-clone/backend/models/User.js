/**
 * User Model
 */

// Dependencies
const {Schema, model} = require('mongoose');

// User Schema
const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

// User Model
const User = model('User', UserSchema);

// Exporting Model
module.exports = User;