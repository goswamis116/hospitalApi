const Doctor = require('../models/doctor');

// Controller function to register a new doctor
exports.registerDoctor = async (req, res) => {
  try {
    const { username, password } = req.body;
    // Check if username already exists
    const existingDoctor = await Doctor.findOne({ username });
    if (existingDoctor) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    const doctor = new Doctor({ username, password });
    await doctor.save();
    res.status(201).json({ message: 'Doctor registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Other controller functions for login, etc.
