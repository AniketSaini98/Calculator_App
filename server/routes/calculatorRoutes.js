const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define a MongoDB schema for calculation history
const calculationSchema = new mongoose.Schema({
  calculation: String,
});

const Calculation = mongoose.model('Calculation', calculationSchema);

// Route to save a new calculation to the database
router.post('/save', async (req, res) => {
  try {
    const { calculation } = req.body;
    const newCalculation = new Calculation({ calculation });
    await newCalculation.save();
    res.status(201).json({ message: 'Calculation saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to save calculation' });
  }
});

// Route to retrieve all calculations from the database
router.get('/history', async (req, res) => {
  try {
    const history = await Calculation.find({}, '-_id calculation').exec();
    res.json({ history });
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve calculation history' });
  }
});

// Route to delete a calculation from the database
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Calculation.findByIdAndRemove(id).exec();
    res.json({ message: 'Calculation deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete calculation' });
  }
});

module.exports = router;
