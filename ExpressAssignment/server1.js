const http = require('http');

// Sample data for men and women products
const menProducts = [
  { id: 1, name: 'Men Product 1' },
  { id: 2, name: 'Men Product 2' },
  { id: 3, name: 'Men Product 3' },
  // Add more products here
];

const womenProducts = [
  { id: 1, name: 'Women Product 1' },
  { id: 2, name: 'Women Product 2' },
  { id: 3, name: 'Women Product 3' },
  // Add more products here
];

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header to JSON format
  res.setHeader('Content-Type', 'application/json');

  // Handle different API endpoints
  if (req.url === '/') {
    // Send welcome message
    res.end(JSON.stringify({ message: 'Welcome to Men & Women Dummy Data' }));
  } else if (req.url === '/men') {
    // Send men products data
    res.end(JSON.stringify(menProducts));
  } else if (req.url === '/women') {
    // Send women products data
    res.end(JSON.stringify(womenProducts));
  } else {
    // Handle page not found
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Page not found' }));
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
