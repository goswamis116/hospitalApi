const Patient = require('../models/patient');

// Controller function to register a new patient
exports.registerPatient = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    // Check if patient already exists
    const existingPatient = await Patient.findOne({ phoneNumber });
    if (existingPatient) {
      return res.status(400).json({ message: 'Patient already exists' });
    }
    const patient = new Patient({ phoneNumber });
    await patient.save();
    res.status(201).json({ message: 'Patient registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

