const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const requestsRoutes = require('./src/routes/requestsRoutes');
const resourceRoutes = require('./src/routes/resourceRoutes');
const matchRoutes = require('./src/routes/matchRoutes');

// Use Routes
app.use('/api', requestsRoutes);
app.use('/api', resourceRoutes);
app.use('/api', matchRoutes);

// Start Server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});

module.exports = app;