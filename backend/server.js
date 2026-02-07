const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const volunteerRoutes = require('./routes/volunteerRoutes');
app.use('/api/volunteer', volunteerRoutes);

mongoose.connect('mongodb+srv://volunteeruser:volunteeruser12345@cluster0.zdgq6va.mongodb.net/?appName=Cluster0')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
