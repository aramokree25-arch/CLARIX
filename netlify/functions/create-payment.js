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

    const terminalId     = process.env.FENA_TERMINAL_ID;
    const terminalSecret = process.env.FENA_TERMINAL_SECRET;
    if (!terminalId || !terminalSecret) {
      return { statusCode: 500, body: JSON.stringify({ error: 'Payment provider not configured' }) };
    }

    const amountPence = Math.round(parseFloat(amount) * 100);
    const payload = JSON.stringify({ amount: amountPence, currency: 'GBP', reference });

    const { status, data } = await new Promise((resolve, reject) => {
      const options = {
        hostname: 'epos.api.prod-gcp.fena.co',
        path: '/v2/payments',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload),
          'terminal-id': terminalId,
          'terminal-secret': terminalSecret
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

    console.log('Fena API status:', status, 'body:', JSON.stringify(data));

    if (status !== 200 && status !== 201) {
      return { statusCode: 502, body: JSON.stringify({ error: 'Payment creation failed', detail: data }) };
    }

    const paymentUrl = data.payment_url || data.checkout_url || data.url || data.paymentUrl;
    if (!paymentUrl) {
      return { statusCode: 502, body: JSON.stringify({ error: 'No payment URL returned', detail: data }) };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ payment_url: paymentUrl })
    };

  } catch (err) {
    console.error('create-payment error:', err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal error', message: err.message })
    };
  }
};
