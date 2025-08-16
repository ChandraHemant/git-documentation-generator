const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = 3001;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Proxy endpoint for Anthropic API
app.post('/api/claude', async (req, res) => {
    try {
        const { apiKey, ...requestBody } = req.body;
        
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        
        if (!response.ok) {
            return res.status(response.status).json(data);
        }
        
        res.json(data);
    } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).json({ error: 'Proxy server error' });
    }
});

app.listen(PORT, () => {
    console.log(`CORS Proxy server running on http://localhost:${PORT}`);
    console.log('You can now use the documentation generator!');
});