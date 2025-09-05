const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'MindGuard API is running',
    timestamp: new Date().toISOString()
  });
});

// Test endpoint for Stripe
app.get('/api/test-stripe', async (req, res) => {
  try {
    res.json({ 
      success: true, 
      message: 'Stripe integration ready for configuration',
      note: 'Add STRIPE_SECRET_KEY to environment variables'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Test endpoint for Twilio
app.get('/api/test-twilio', async (req, res) => {
  try {
    res.json({ 
      success: true, 
      message: 'Twilio integration ready for configuration',
      note: 'Add TWILIO_* environment variables'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Handle all other routes
app.get('*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Export the Express app for Vercel
module.exports = app;