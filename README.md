# Claude API CORS Proxy

This is a simple proxy server to bypass CORS restrictions when using the Claude API from browser applications.

## Setup

1. Install Node.js if you haven't already
2. Open terminal/command prompt in this folder
3. Run: `npm install`
4. Run: `npm start`
5. The proxy will be available at http://localhost:3001

## Usage

In the documentation generator, set the CORS Proxy URL to:
`http://localhost:3001/api/claude`

Then use the application normally!

## Security Note

This proxy is for local development only. Never deploy this to production or use it with sensitive data in public environments.