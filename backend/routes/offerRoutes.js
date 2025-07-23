const express = require('express');
const Offer = require('../models/Offer');
const router = express.Router();

// Get all offers
router.get('/', async (req, res) => {
  const offers = await Offer.find().sort({ createdAt: -1 });
  res.json(offers);
});

// Add new offer
router.post('/', async (req, res) => {
  try {
    const offer = new Offer(req.body);
    await offer.save();
    res.status(201).json(offer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get offers by user
router.get('/user/:uid', async (req, res) => {
  const offers = await Offer.find({ createdBy: req.params.uid }).sort({ createdAt: -1 });
  res.json(offers);
});

// Edit offer
router.put('/:id', async (req, res) => {
  try {
    const offer = await Offer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(offer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete offer
router.delete('/:id', async (req, res) => {
  try {
    await Offer.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router; 