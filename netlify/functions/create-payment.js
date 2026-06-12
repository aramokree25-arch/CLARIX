// Creates a Fena open banking payment and returns the payment URL.
// Called by checkout.html when user clicks "Pay via Open Banking".
// Credentials kept server-side so they are never exposed in browser JS.
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { amount, reference } = JSON.parse(event.body || '{}');
    if (!amount || !reference) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing amount or reference' }) };
    }

    // Store these as Netlify environment variables:
    //   FENA_TERMINAL_ID     = 6a296a06a503d7d39c441fdc
    //   FENA_TERMINAL_SECRET = 66afc037-6117-4735-9f69-1eeed4c0f460
    const terminalId     = process.env.FENA_TERMINAL_ID     || '6a296a06a503d7d39c441fdc';
    const terminalSecret = process.env.FENA_TERMINAL_SECRET || '66afc037-6117-4735-9f69-1eeed4c0f460';

    const amountPence = Math.round(parseFloat(amount) * 100);

    const res = await fetch('https://api.fena.co/v2/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'terminal-id': terminalId,
        'terminal-secret': terminalSecret
      },
      body: JSON.stringify({
        amount:    amountPence,
        currency:  'GBP',
        reference: reference
      })
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Fena API error:', JSON.stringify(data));
      return { statusCode: 502, body: JSON.stringify({ error: 'Payment creation failed', detail: data }) };
    }

    // Fena returns the hosted payment page URL — field name may vary
    const paymentUrl = data.payment_url || data.checkout_url || data.url || data.paymentUrl;
    if (!paymentUrl) {
      console.error('No payment URL in Fena response:', JSON.stringify(data));
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
      body: JSON.stringify({ error: 'Internal error' })
    };
  }
};
