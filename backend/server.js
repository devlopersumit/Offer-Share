require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const offerRoutes = require('./routes/offerRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('OfferShare API is running');
});

app.use('/offers', offerRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err)); 