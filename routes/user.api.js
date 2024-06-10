const express = require("express");
const router = express.Router();

/**
 * @route GET /users/me
 * @description Get current account info
 * @access Login required
 */

/**
 * @route PUT /users/me
 * @description Update user profile
 * @body {username, password, description, contact}
 * @access Login required
 */

/**
 * @route GET /users
 * @description Get all users
 * @access Login required, role: super admin
 */

/**
 * @route POST /users
 * @description Create a new user
 * @body {username, password, description, contact}
 * @access Login required, role: super admin
 */

/**
 * @route PUT /users/:id
 * @description Update user profile
 * @body {username, password, description, contact}
 * @access Login required, role: super admin
 */

/**
 * @route DELETE /users/:id
 * @description Delete a user
 * @access Login required
 */

module.exports = router;
