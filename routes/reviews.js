const express = require('express');
const router = express.Router();
const Review = require('../models/review');

// all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find().populate('movie');
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// review by ID
router.get('/:id', async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate('movie');
    if (!review) return res.status(404).json({ message: 'Review not found' });
    res.json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
