export default function handler(request, response) {
  if (request.method === 'GET') {
    response.status(200).json({
      success: true,
      message: 'Stripe payment services ready',
      features: [
        'Subscription management',
        'One-time payments',
        'Free trials',
        'Payment security'
      ],
      note: 'Add STRIPE_SECRET_KEY and STRIPE_PUBLISHABLE_KEY to environment variables'
    });
  } else {
    response.status(405).json({ error: 'Method not allowed' });
  }
}