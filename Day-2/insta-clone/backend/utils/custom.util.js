/**
 * Custom Utilities
 */

// Utility Container
const customUtilities = {};

// Api Error Utility
class ApiError extends Error {
    constructor({message, statusCode}) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
}