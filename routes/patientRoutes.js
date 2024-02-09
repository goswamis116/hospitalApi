const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const reportController = require('../controllers/reportController');

// Register a new patient
router.post('/register', patientController.registerPatient);

// Get all reports of a patient
router.get('/:id/all_reports', reportController.getAllReports);

module.exports = router;
