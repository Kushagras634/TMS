const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');

// Create a new user
router.post('/users', userController.createUser);

// Login user
router.post('/users/login', userController.loginUser);

// Logout user
router.post('/users/logout', authMiddleware, userController.logoutUser);

// Logout user from all devices
router.post('/users/logoutAll', authMiddleware, userController.logoutAllUsers);

// Get all users
router.get('/users', userController.getAllUsers);

// Get user by ID
router.get('/users/:id', userController.getUserById);

module.exports = router;
