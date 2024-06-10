const express = require("express");
const router = express.Router();

/**
 * @route GET /contracts?page=1&limit=10
 * @description Get all contracts with pagination
 * @access Login required
 */

/**
 * @route POST /contracts
 * @description Create a new contract
 * @body {Cnumber, full name, phone, product, description, value, create-date }
 * @access Login required
 */

/**
 * @route PUT /contracts/:id
 * @description Update a contract
 * @body { full name, phone, product, description, value  }
 * @access Login required, role: super user
 */

/**
 * @route GET /contracts/:id
 * @description Get detail a contract
 * @access Login required
 */

/**
 * @route DELETE /contracts/:id
 * @description Delete a contract
 * @access Login required, role: super user
 */

/**
 * @route GET /contracts?phone=0919778899&Cnumber=00001
 * @description Get a single contract with query
 
 */

module.exports = router;
