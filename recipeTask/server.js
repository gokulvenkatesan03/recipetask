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
    res.send('{
             "_id": "6753175df7bb78a40ab2ce34",
        "title": "Cookies",
        "ingredients": [
            "butter",
            "sugar",
            "eggs",
            "vanilla extract",
            "flour",
            "baking soda"
        ],
        "instructions": "Mix butter, sugar, eggs, and vanilla essence, then add flour and baking soda. Drop spoonfuls onto a baking sheet and bake at 350°F (175°C) until golden.",
        "prepTime": 25,
    },
        {
            "_id": "67531817f7bb78a40ab2ce39",
        "title": "Pasta",
        "ingredients": [
            "pasta",
            "sauce",
            "cheese"
        ],
        "instructions": "Boil pasta, add sauce, and mix.",
        "prepTime": 30,
        }
        {
     "_id": "67531940f7bb78a40ab2ce3c",
        "title": "Cake",
        "ingredients": [
            "flour",
            "sugar",
            "eggs",
            "butter",
            "baking powder"
        ],
        "instructions": "Mix flour, sugar, eggs, butter, and baking powder. Add milk and vanilla extract until smooth.",
        "prepTime": 45,
        }');
});

// Routes
app.use('/api/recipes', recipeRouter);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
