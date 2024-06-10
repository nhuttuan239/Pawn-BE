const express = require("express");
const router = express.Router();

/**
 * @route GET /customers
 * @description Get all customers
 * @access Login required, role: super admin
 */

/**
 * @route POST /customer
 * @description Create a new customer
 * @body {username, password, description}
 * @access Login required, role: super admin
 */

/**
 * @route PUT /customer/:id
 * @description Update customer profile
 * @body {username, password, description}
 * @access Login required, role: super admin
 */

/**
 * @route DELETE /customer/:id
 * @description Delete a customer
 * @access Login required
 */

module.exports = router;
