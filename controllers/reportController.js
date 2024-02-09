const Report = require('../models/report');

// Controller function to get all reports of a patient
exports.getAllReports = async (req, res) => {
  try {
    const { id } = req.params;
    const reports = await Report.find({ patient: id }).sort({ date: 'asc' });
    res.json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller function to get all reports filtered by status
exports.getReportsByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const reports = await Report.find({ status }).sort({ date: 'asc' });
    res.json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

