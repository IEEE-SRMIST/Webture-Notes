# Instagram Clone - Webture

Table of Contents

- [Backend Application](#backend-application)
  - [Installation](#installation-backend)
  - [Request Handlers](#request-handlers)
- [Frontend Application](#frontend-application)

## Backend Application

Backend application for the instagram clone uses Node.js, Express.js and MongoDB and follows the MVC Architecture to sort business logic.

Following the REST API standards, this application supports 7 different request handlers.


### Installation Backend

1. Clone this Repository.
2. Open terminal with the backend folder.
3. Run `$ npm install` to install all required dependencies.
4. Add a `.env` file in the backend folder with the following variables.

  ```env
    # ENVIRONMENT 

    NODE_ENV=development
    PORT=5000

    # DATABASE

    DB_URL=<database url here>

    # SECRETS

    APPLICATION_SECRET=instaCloneCreatedAtWebture@123456
  ```


### Request Handlers

#### Signup New User

```js
/**
 * @description Creates a new User, if successful, then returns user data with authToken to login
 * @api {POST} /api/auth/signup
 * @access Public
 * @example
 * req.body = {
 *  fullName: 'John Doe',
 *  email: 'doe.john@example.com',
 *  username: 'doe.john',
 *  password: 'john.doe.123',
 * }
 */
```

#### Login User

```js
/**
 * @description Login user, and send user data with authToken
 * @api {POST} /api/auth/login
 * @access Public
 * @example
 * req.body = {
 *  user: 'doe.john' || 'doe.john@example.com',
 *  password: 'john.doe.123',
 * }
 */
```

#### Logout User

```js
/**
 * @description Logout user by clearing authToken cookie
 * @api {POST} /api/auth/logout
 * @access User
 */
```

#### Create New Post

```js
/**
 * @description Create a new post and reference the user creating it
 * @api {POST} /api/post/create
 * @access User
 * @example
 * req.body = {
 *  title: 'Hello, World!',
 * }
 */
```

#### Fetch All Posts

```js
/**
 * @description Fetch all posts' along with the user information
 * @api {GET} /api/post/
 * @access Public
 */
```

#### Update Post

```js
/**
 * @description Update a post with its postId
 * @api {PUT} /api/post/update
 * @access User
 * @example
 * req.body = {
 *  title: 'Hello, there! "General Kenobi!"',
 *  postId: 'asdf3qr13ifef-ifjrfu3eifj'
 * }
 */
```

#### Delete Post

```js
/**
 * @description Delete a post with its postId
 * @api {DELETE} /api/post/delete
 * @access User
 * @example
 * req.body = {
 *  postId: 'asdf3qr13ifef-ifjrfu3eifj',
 * }
 */
```

## Frontend Application
