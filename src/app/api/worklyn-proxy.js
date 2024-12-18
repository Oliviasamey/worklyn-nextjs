// pages/api/worklyn-proxy.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' }); // Ensure only POST is allowed
    }

    const url = 'https://worklyn.com/api/config/setup';
    const { username, email } = req.body; // Extract the required fields

    if (!username || !email) {
        return res.status(400).json({ error: 'Missing username or email' }); // Validate request body
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': req.headers.authorization || "default-auth-token", // Replace with a valid fallback if needed
            },
            body: JSON.stringify({ username, email }), // Send only the required data
        });

        if (!response.ok) {
            const errorText = await response.text(); // Capture backend error details
            console.error("Backend error:", response.status, errorText);
            return res.status(response.status).send(errorText); // Forward the backend error
        }

        const data = await response.json(); // Parse the backend response
        return res.status(200).json(data); // Forward the backend response to the client

    } catch (error) {
        console.error("Proxy error:", error);
        return res.status(500).json({ error: 'Failed to forward request' }); // Handle unexpected errors
    }
}
