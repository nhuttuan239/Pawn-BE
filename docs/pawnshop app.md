# Final project: Pawn app

Pawn App is a pawnshop management app. Super Admin can CRUD other accounts (Admin), set
interest rates and product type. The application has features: add/edit/delete
and calculate the amount payable with the selected date. In addition, customers do not need
to log in still check contract details with phone number and contract number.

## User Stories

### Authentication

- [ ] As a user (Super Admin and Admin), I can sign in with username and password.

### Super Admin & Admin

- [ ] As a super admin, I can add/edit/soft delete other acounts.
- [ ] As a super admin and admin, I can update my current profile info like username, description.

### Pawn Contract

- [ ] As a super admin and admin, I can see list of contracts.
- [ ] As a super admin and admin, I can create a new contract.
- [ ] As a super admin, I can edit any contract.
- [ ] As a super admin, I can delete any contract.
- [ ] As a super admin and admin, I can calculate the amount payable for a contract with the selected date.

### Interest Rate

- [ ] As a super admin, I can create a new interest rate by product type.
- [ ] As a super admin, I can edit interest rate.
- [ ] As a super admin, I can delete interest rate.
- [ ] As a super admin, I can see list of interest rates.

### Product type

- [ ] As a super admin, I can create a new product type.
- [ ] As a super admin, I can edit product type.
- [ ] As a super admin, I can delete product type.
- [ ] As a super admin, I can see list of product type.

### Customer

- [ ] As a super admin and admin, I can see list of customers.
- [ ] As a super admin and admin, I can create a new customer.
- [ ] As a super admin, I can edit any customer.
- [ ] As a super admin, I can delete any customer.
- [ ] As a customer,do not need to log in, I can filter detail my contract with Phone-number and Contract-number.
- [ ] As a customer, I can extend the contract with payment feature.

## Endpoint APIs

### Auth APIs

```javascript
/**
 * @route POST /auth/login
 * @description Log in with username and password
 * @body {username,password}
 * @access Public
 */
```

### User APIs

```javascript
/**
 * @route GET /users/me
 * @description Get current account info
 * @access Login required
 */
```

```javascript
/**
 * @route PUT /users/me
 * @description Update user profile
 * @body {username, password, description}
 * @access Login required
 */
```

```javascript
/**
 * @route GET /users
 * @description Get all users
 * @access Login required, role: super admin
 */
```

```javascript
/**
 * @route POST /users
 * @description Create a new user
 * @body {username, password, description}
 * @access Login required, role: super admin
 */
```

```javascript
/**
 * @route PUT /users/:id
 * @description Update user profile
 * @body {username, password, description}
 * @access Login required, role: super admin
 */
```

```javascript
/**
 * @route DELETE /users/:id
 * @description Delete a user
 * @access Login required, role: super admin
 */
```

### Customer APIs

```javascript
/**
 * @route GET /customers
 * @description Get all customers
 * @access Login required
 */
```

```javascript
/**
 * @route POST /customer
 * @description Create a new customer
 * @body {username, password, description}
 * @access Login required
 */
```

```javascript
/**
 * @route PUT /customer/:id
 * @description Update customer profile
 * @body {username, password, description}
 * @access Login required, role: super admin
 */
```

```javascript
/**
 * @route DELETE /customer/:id
 * @description Delete a customer
 * @access Login required, role: super admin
 */
```

### Product Type APIs

```javascript
/**
 * @route GET /ptype?page=1&limit=10
 * @description Get all product types with pagination
 * @access Login required, role: super user
 */
```

```javascript
/**
 * @route POST /ptype
 * @description Create a new product type
 * @body {name, description }
 * @access Login required, role: super user
 */
```

```javascript
/**
 * @route PUT /ptype/:id
 * @description Update a product type
 * @body {name, description }
 * @access Login required, role: super user
 */
```

```javascript
/**
 * @route DELETE /ptype/:id
 * @description Delete a product type
 * @access Login required, role: super user
 */
```

### Interest Rate APIs

```javascript
/**
 * @route GET /interest?page=1&limit=10
 * @description Get all interest rate with pagination
 * @access Login required, role: super user
 */
```

```javascript
/**
 * @route POST /interest
 * @description Create a new interest rate
 * @body {product type, date min, date max, interest rate }
 * @access Login required, role: super user
 */
```

```javascript
/**
 * @route PUT /interest/:id
 * @description Update a interest rate
 * @body { product type, date min, date max, interest rate  }
 * @access Login required, role: super user
 */
```

```javascript
/**
 * @route DELETE /interest/:id
 * @description Delete a interest rate
 * @access Login required, role: super user
 */
```

### Contract APIs

```javascript
/**
 * @route GET /contracts?page=1&limit=10
 * @description Get all contracts with pagination
 * @access Login required
 */
```

```javascript
/**
 * @route POST /contracts
 * @description Create a new contract
 * @body {Cnumber, full name, phone, product, description, value, create-date }
 * @access Login required
 */
```

```javascript
/**
 * @route PUT /contracts/:id
 * @description Update a contract
 * @body { full name, phone, product, description, value  }
 * @access Login required, role: super user
 */
```

```javascript
/**
 * @route GET /contracts/:id
 * @description Get detail a contract
 * @access Login required
 */
```

```javascript
/**
 * @route DELETE /contracts/:id
 * @description Delete a contract
 * @access Login required, role: super user
 */
```

```javascript
/**
 * @route GET /contracts?phone=0919778899&Cnumber=00001
 * @description Get a single contract with query
 
 */
```
