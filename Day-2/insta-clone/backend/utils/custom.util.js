/**
 * Custom Utilities
 */

/**
 * @description ApiError class has all properties of Error class, calling super() to use properties from the parent Error Class.
 * The constructor function destructure a message and a statusCode and returns an error object along with the provided information.
 * @example 
 * const error = new ApiError({message: 'Unknown data, could not process!', statusCode: 400}); 
 */
class ApiError extends Error {
    constructor({ message, statusCode }) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
};

module.exports = {
    ApiError,
}