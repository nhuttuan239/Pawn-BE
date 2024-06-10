const express = require("express");
const router = express.Router();

/**
 * @route GET /interest?page=1&limit=10
 * @description Get all interest rate with pagination
 * @access Login required, role: super user
 */

/**
 * @route POST /interest
 * @description Create a new interest rate
 * @body {product type, date min, date max, interest rate }
 * @access Login required, role: super user
 */

/**
 * @route PUT /interest/:id
 * @description Update a interest rate
 * @body { product type, date min, date max, interest rate  }
 * @access Login required, role: super user
 */

/**
 * @route DELETE /interest/:id
 * @description Delete a interest rate
 * @access Login required, role: super user
 */

module.exports = router;
