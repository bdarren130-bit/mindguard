export default function handler(request, response) {
  if (request.method === 'GET') {
    response.status(200).json({
      success: true,
      message: 'SendGrid email services ready',
      capabilities: [
        'Weekly wellness summaries',
        'Monthly printable packs',
        'Emergency notifications',
        'Subscription updates'
      ],
      note: 'Add SENDGRID_API_KEY to environment variables'
    });
  } else if (request.method === 'POST') {
    // Email sending functionality would go here
    const { to, subject, template, data } = request.body;
    
    response.status(200).json({
      success: true,
      message: 'Email would be sent here',
      details: {
        to: to || 'user@example.com',
        subject: subject || 'MindGuard Notification',
        template: template || 'weekly-summary',
        data: data || {}
      },
      timestamp: new Date().toISOString()
    });
  } else {
    response.status(405).json({ error: 'Method not allowed' });
  }
}