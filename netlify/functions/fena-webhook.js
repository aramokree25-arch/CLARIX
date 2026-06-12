// Receives Fena open banking payment webhooks and emails a notification to info@clarixpeptides.com
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body || '{}');

    const status   = data.status || data.payment_status || 'Unknown';
    const amount   = data.amount != null ? '£' + (data.amount / 100).toFixed(2) : (data.amount_formatted || 'N/A');
    const ref      = data.reference || data.end_to_end_id || data.order_ref || 'N/A';
    const payId    = data.payment_id || data.id || 'N/A';
    const time     = data.timestamp || data.created_at || new Date().toISOString();

    const message = [
      '═══════════════════════════════',
      '  FENA PAYMENT NOTIFICATION',
      '═══════════════════════════════',
      '',
      `Status:      ${status}`,
      `Amount:      ${amount}`,
      `Order Ref:   ${ref}`,
      `Payment ID:  ${payId}`,
      `Time:        ${time}`,
      '',
      '--- Full payload ---',
      JSON.stringify(data, null, 2)
    ].join('\n');

    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: 'aa36f936-af5e-420f-8e65-6f782a43046f',
        subject: `[Clarix] Payment ${status} — ${ref}`,
        from_name: 'Clarix Peptides Payments',
        email: 'info@clarixpeptides.com',
        message
      })
    });
  } catch (err) {
    console.error('fena-webhook error:', err);
  }

  // Always return 200 — Fena retries on non-2xx
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ received: true })
  };
};
