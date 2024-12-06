const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./Database/dbConfig'); // Adjust the path as needed
const Recipe = require('./Model/recipeModel'); // Adjust the path as needed

dotenv.config();

const seedData = async () => {
  const recipes = [
    { name: "Spaghetti Bolognese", ingredients: ["spaghetti", "beef"], instructions: "Cook spaghetti. Prepare sauce." },
    { name: "Chocolate Cake", ingredients: ["flour", "sugar"], instructions: "Mix and bake." },
    { name: "Caesar Salad", ingredients: ["lettuce", "croutons"], instructions: "Toss together." },
    { name: "Tandoori Chicken", ingredients: ["chicken", "spices"], instructions: "Marinate and bake." },
    { name: "Vegetable Stir-fry", ingredients: ["carrots", "soy sauce"], instructions: "Stir-fry in wok." },
    { name: "Tomato Soup", ingredients: ["tomatoes", "cream"], instructions: "Blend and heat." },
  ];

  try {
    await connectDB(); // Connect to the database
    await Recipe.deleteMany(); // Clear the existing data
    await Recipe.insertMany(recipes); // Insert the new data
    console.log('Data seeded successfully!');
    process.exit(); // Exit the process
  } catch (err) {
    console.error('Error seeding data:', err.message);
    process.exit(1); // Exit with failure
  }
};

seedData();
