const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const authController = require('../controllers/authController');

// Register a new doctor
router.post('/register', doctorController.registerDoctor);

// Log in a doctor
router.post('/login', authController.loginDoctor);

module.exports = router;
