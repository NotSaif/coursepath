export default function handler(req, res) {
  res.status(200).json({
    status: 'ok',
    gateway: 'Lemon Squeezy (Vercel Serverless)',
    timestamp: new Date().toISOString()
  });
}
