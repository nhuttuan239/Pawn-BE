const express = require("express");
const router = express.Router();

/**
 * @route GET /ptype?page=1&limit=10
 * @description Get all product types with pagination
 * @access Login required, role: super user
 */

/**
 * @route POST /ptype
 * @description Create a new product type
 * @body {name, description }
 * @access Login required, role: super user
 */

/**
 * @route PUT /ptype/:id
 * @description Update a product type
 * @body {name, description }
 * @access Login required, role: super user
 */

/**
 * @route DELETE /ptype/:id
 * @description Delete a product type
 * @access Login required, role: super user
 */

module.exports = router;
