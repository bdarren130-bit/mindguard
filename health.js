export default function handler(request, response) {
  response.status(200).json({
    status: 'OK',
    message: 'MindGuard API is running',
    timestamp: new Date().toISOString(),
    services: ['twilio', 'sendgrid', 'ai-chat', 'stripe']
  });
}