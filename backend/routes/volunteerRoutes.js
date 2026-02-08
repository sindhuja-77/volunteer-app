const express = require('express');
const router = express.Router();
const Volunteer = require('../models/volunteer');

// Save volunteer data
router.post('/', async (req, res) => {
  try {
    const newVolunteer = new Volunteer(req.body);
    await newVolunteer.save();
    res.status(201).json({ message: 'Volunteer registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save data' });
  }
});

// Get all volunteers (Admin)
router.get('/', async (req, res) => {
  const volunteers = await Volunteer.find();
  res.json(volunteers);
});

module.exports = router;

