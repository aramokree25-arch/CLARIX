const https = require('https');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { amount, reference } = JSON.parse(event.body || '{}');
    if (!amount || !reference) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing amount or reference' }) };
    }

    const integrationId     = process.env.FENA_TERMINAL_ID;
    const integrationSecret = process.env.FENA_TERMINAL_SECRET;
    if (!integrationId || !integrationSecret) {
      return { statusCode: 500, body: JSON.stringify({ error: 'Payment provider not configured' }) };
    }

    // Amount must be a string with 2 decimal places (pounds, not pence)
    const amountStr = parseFloat(amount).toFixed(2);

    // Fena reference max 12 chars — use last 8 chars of order ref (e.g. "SRJGE5" from "CLX-2026-SRJGE5")
    const fenaRef = reference.replace(/-/g, '').slice(-8);

    const payload = JSON.stringify({
      reference:     fenaRef,
      amount:        amountStr,
      bankAccount:   '',          // empty = use default bank account
      customerEmail: '',
      customerName:  '',
      items:         []
    });

    const { status, data } = await new Promise((resolve, reject) => {
      const options = {
        hostname: 'epos.api.prod-gcp.fena.co',
        path:     '/open/payments/single/create-and-process',
        method:   'POST',
        headers: {
          'Content-Type':   'application/json',
          'Content-Length': Buffer.byteLength(payload),
          'integration-id': integrationId,
          'secret-key':     integrationSecret
        }
      };
      const req = https.request(options, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          try { resolve({ status: res.statusCode, data: JSON.parse(body) }); }
          catch (e) { resolve({ status: res.statusCode, data: { raw: body } }); }
        });
      });
      req.on('error', reject);
      req.write(payload);
      req.end();
    });

    console.log('Fena status:', status, 'body:', JSON.stringify(data));

    if (!data.created || !data.result?.link) {
      return { statusCode: 502, body: JSON.stringify({ error: 'Payment creation failed', detail: data }) };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ payment_url: data.result.link })
    };

  } catch (err) {
    console.error('create-payment error:', err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal error', message: err.message })
    };
  }
};
