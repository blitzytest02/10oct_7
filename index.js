// Import Express framework
const express = require('express');

// Create Express application instance
const app = express();

// Configure port with environment variable fallback
const PORT = process.env.PORT || 3000;

// Define GET route handler for /hello endpoint
app.get('/hello', (req, res) => {
  // Send "Hello world" text response
  res.send('Hello world');
});

// Start HTTP server and listen on configured port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Test the endpoint: http://localhost:${PORT}/hello`);
});
