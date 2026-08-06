export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { priceType, certId, certName } = req.body || {};

    const LEMON_API_KEY = process.env.LEMONSQUEEZY_API_KEY;
    const LEMON_STORE_ID = process.env.LEMONSQUEEZY_STORE_ID;

    const VARIANTS = {
      course: process.env.LEMONSQUEEZY_VARIANT_COURSE || '1986443',
      pro_monthly: process.env.LEMONSQUEEZY_VARIANT_PRO_MONTHLY || '1986447',
      pro_yearly: process.env.LEMONSQUEEZY_VARIANT_PRO_YEARLY || '1986449',
    };

    const variantId = VARIANTS[priceType || 'pro_monthly'];
    if (!variantId) {
      return res.status(400).json({ error: 'Invalid price plan type' });
    }

    if (!LEMON_API_KEY || !LEMON_STORE_ID) {
      return res.status(400).json({
        error: 'Lemon Squeezy API credentials not configured in Vercel environment variables.'
      });
    }

    const clientUrl = req.headers.origin || process.env.CLIENT_URL || `https://${req.headers.host}`;

    const response = await fetch('https://api.lemonsqueezy.com/v1/checkouts', {
      method: 'POST',
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'Authorization': `Bearer ${LEMON_API_KEY}`
      },
      body: JSON.stringify({
        data: {
          type: 'checkouts',
          attributes: {
            checkout_data: {
              custom: {
                cert_id: (certId || 'none').toString(),
                price_type: (priceType || 'pro_monthly').toString(),
                cert_name: (certName || 'CoursePath Pro').toString()
              }
            },
            product_options: {
              redirect_url: `${clientUrl}/success?cert_id=${encodeURIComponent(certId || '')}&price_type=${encodeURIComponent(priceType || '')}`
            }
          },
          relationships: {
            store: {
              data: {
                type: 'stores',
                id: LEMON_STORE_ID.toString()
              }
            },
            variant: {
              data: {
                type: 'variants',
                id: variantId.toString()
              }
            }
          }
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Lemon Squeezy API Error:', data);
      return res.status(response.status).json({
        error: data.errors?.[0]?.detail || data.message || 'Failed to create checkout session'
      });
    }

    const checkoutUrl = data.data?.attributes?.url;
    if (checkoutUrl) {
      res.status(200).json({ url: checkoutUrl });
    } else {
      res.status(500).json({ error: 'No checkout URL returned from Lemon Squeezy' });
    }
  } catch (err) {
    console.error('Server error:', err.message);
    res.status(500).json({ error: err.message });
  }
}
