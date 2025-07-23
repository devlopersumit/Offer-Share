const mongoose = require('mongoose');

const OfferSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  url: { type: String, required: true },
  tags: [String],
  upvotes: { type: Number, default: 0 },
  createdBy: { type: String, required: true }, // user id or email
}, { timestamps: true });

module.exports = mongoose.model('Offer', OfferSchema); 