const express = require('express');
const app = express();

// Route for generating a random number
app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 100
  res.json({ random: randomNumber });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
