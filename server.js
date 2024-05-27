const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/movies', require('./routes/movies'));
app.use('/api/actors', require('./routes/actors'));
app.use('/api/reviews', require('./routes/reviews'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
