export default async function handler(request, response) {
  if (request.method === 'GET') {
    response.status(200).json({
      success: true,
      message: 'AI chat companion ready',
      features: [
        'Mental health support',
        'Crisis detection',
        'Personalized responses',
        'Grounding exercises'
      ],
      note: 'Add ABACUS_AI_API_KEY to environment variables'
    });
  } else if (request.method === 'POST') {
    // AI chat functionality would go here
    const { message, userId, sessionId } = request.body;
    
    try {
      // This would connect to Abacus.AI in production
      const aiResponse = {
        text: "I'm here to support you. Would you like to talk about how you're feeling?",
        suggestions: [
          "Try a breathing exercise",
          "Journal about your feelings", 
          "Use a grounding technique"
        ],
        crisisDetected: false,
        timestamp: new Date().toISOString()
      };
      
      // Simple crisis detection
      const crisisKeywords = ['suicide', 'kill myself', 'harm myself', 'end it all'];
      if (crisisKeywords.some(keyword => message.toLowerCase().includes(keyword))) {
        aiResponse.crisisDetected = true;
        aiResponse.text = "I'm concerned about your safety. Would you like me to help you connect with emergency services?";
        aiResponse.suggestions = [
          "Call emergency services",
          "Contact crisis hotline", 
          "Reach out to trusted person"
        ];
      }
      
      response.status(200).json({
        success: true,
        response: aiResponse,
        metadata: {
          messageLength: message.length,
          processingTime: '50ms',
          model: 'abacus-ai-mental-health'
        }
      });
      
    } catch (error) {
      response.status(500).json({
        error: 'AI service temporarily unavailable',
        fallback: 'Please try again in a moment or use emergency services if needed'
      });
    }
  } else {
    response.status(405).json({ error: 'Method not allowed' });
  }
}