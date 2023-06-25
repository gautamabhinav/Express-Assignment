// const express = require('express');
// const app = express();

// // Initialize counter variable
// let counter = 0;

// // Endpoint to get counter data
// app.get('/', (req, res) => {
//   res.json({ counter: counter });
// });

// // Endpoint to increment counter
// app.post('/increment', (req, res) => {
//   counter++;
//   res.json({ counter: counter });
// });

// // Endpoint to decrement counter
// app.post('/decrement', (req, res) => {
//   counter--;
//   res.json({ counter: counter });
// });

// // Start the server on port 3000
// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });



const express = require('express');
const app = express();

let counter = 0;

// Root endpoint to send counter data
app.get('/', (req, res) => {
  res.json({ counter });
  console.log(counter);
});

// Endpoint to increment the counter by 1
app.get('/increment', (req, res) => {
  counter++;
  res.json({ counter });
  console.log(counter);
});

// Endpoint to decrement the counter by 1
app.get('/decrement', (req, res) => {
  counter--;
  res.json({ counter });
  console.log(counter);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});




