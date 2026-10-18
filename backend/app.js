const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Correct path to routes
const requestsRoutes = require('./src/routes/requestsRoutes');

// Use routes
app.use('/api', requestsRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

module.exports = app;
