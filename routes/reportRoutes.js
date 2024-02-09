const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const authController = require('../controllers/authController');

// Create a new report for a patient
router.post('/:id/create_report', authController.verifyToken, reportController.createReport);

// List all reports filtered by status
router.get('/:status', reportController.getReportsByStatus);

module.exports = router;
