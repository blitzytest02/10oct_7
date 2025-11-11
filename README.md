# Node.js Hello World Tutorial

A simple Node.js tutorial project demonstrating how to create a basic HTTP server with a single endpoint using Express.js.

## Description

This project serves as a beginner-friendly introduction to Node.js web development. It implements a minimal HTTP server with one endpoint (`/hello`) that returns "Hello world" to any HTTP client.

## Prerequisites

- Node.js v18.0.0 or higher (v20.19.5 LTS recommended)
- npm (comes bundled with Node.js)

## Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

## Running the Server

Start the server with:

```bash
npm start
```

For development with auto-reload:

```bash
npm run dev
```

The server will start on port 3000 by default. You should see:
```
Server running on http://localhost:3000
Test the endpoint: http://localhost:3000/hello
```

## Testing the Endpoint

### Using curl:
```bash
curl http://localhost:3000/hello
```

### Using a web browser:
Navigate to: `http://localhost:3000/hello`

### Using Postman or any HTTP client:
- Method: GET
- URL: `http://localhost:3000/hello`
- Expected response: `Hello world`

## Configuration

You can customize the server port by setting the PORT environment variable:

```bash
PORT=8080 npm start
```

Or create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

Then edit `.env` to set your preferred configuration.

## Project Structure

```
nodejs-hello-tutorial/
├── index.js           # Main application entry point
├── package.json       # Project metadata and dependencies
├── package-lock.json  # Dependency lock file
├── .gitignore        # Git exclusion patterns
├── .env.example      # Environment variable template
├── .nvmrc            # Node.js version specification
├── LICENSE           # MIT License
└── README.md         # This file
```

## How It Works

1. **Express Setup**: The application imports Express and creates an app instance
2. **Route Definition**: A GET route is defined at `/hello` path
3. **Response Handler**: The route handler sends "Hello world" as the response
4. **Server Startup**: The app listens on the configured port (default 3000)

## Code Example

```javascript
const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello world');
});

app.listen(3000);
```

## Dependencies

- **express**: Fast, unopinionated web framework for Node.js

## License

MIT

## Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [MDN Web Docs - Express Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)