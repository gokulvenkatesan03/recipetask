const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./Database/dbConfig'); // Adjust the path if needed
const recipeRouter = require('./Routers/recipeRouter');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

app.use(cors());

// Connect to the database
connectDB();

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Recipe API! Navigate to /api/recipes to interact with the API.');
});

// Routes
app.use('/api/recipes', recipeRouter);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
