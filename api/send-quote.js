const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

function loadLocalEnv() {
  if (process.env.ZOHO_MAIL_PASSWORD) return;

  const envPath = path.join(process.cwd(), '.env.local');
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, '');
    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

loadLocalEnv();

const salesEmail = process.env.ZOHO_MAIL_USERNAME || 'sales@oroprime.com';
const quoteRecipientEmail = process.env.QUOTE_TO_EMAIL || 'sales@oroprime.com';

function clean(value) {
  return String(value || '').trim();
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const quote = req.body || {};
  const name = clean(quote.name);
  const contact = clean(quote.contact);
  const phone = clean(quote.phone);
  const product = clean(quote.product_interest || quote.product) || 'General product inquiry';

  if (!name || !contact) {
    return res.status(400).json({ message: 'Name and contact are required.' });
  }

  if (!process.env.ZOHO_MAIL_PASSWORD) {
    return res.status(500).json({ message: 'Zoho mail password is not configured on the server.' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.ZOHO_MAIL_HOST || 'smtp.zoho.in',
    port: Number(process.env.ZOHO_MAIL_PORT || 587),
    secure: Number(process.env.ZOHO_MAIL_PORT || 587) === 465,
    requireTLS: Number(process.env.ZOHO_MAIL_PORT || 587) !== 465,
    auth: {
      user: salesEmail,
      pass: process.env.ZOHO_MAIL_PASSWORD
    }
  });

  const rows = [
    ['Name', name],
    ['Email', contact],
    ['Phone / WhatsApp', phone || 'Not provided'],
    ['Product interest', product],
    ['Quantity', clean(quote.quantity) || 'Not provided'],
    ['Destination country', clean(quote.destination_country || quote.destination) || 'Not provided'],
    ['Preferred port', clean(quote.preferred_port || quote.port) || 'Not provided'],
    ['Additional requirements', clean(quote.additional_requirements || quote.requirements) || 'Not provided'],
    ['Source', 'OroPrime website quote form']
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join('\n');
  const html = `
    <h2>New quote request from OroPrime website</h2>
    <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-family:Arial,sans-serif">
      ${rows.map(([label, value]) => `<tr><td style="border:1px solid #ddd;font-weight:bold">${label}</td><td style="border:1px solid #ddd">${value}</td></tr>`).join('')}
    </table>
  `;

  try {
    await transporter.sendMail({
      from: `"OroPrime Website" <${salesEmail}>`,
      to: quoteRecipientEmail,
      replyTo: contact.includes('@') ? contact : salesEmail,
      subject: `Quote request: ${product}`,
      text,
      html
    });
  } catch (error) {
    const isAuthFailure = error.responseCode === 535 || String(error.response || '').includes('535');
    console.error('Zoho SMTP send failed', {
      code: error.code,
      command: error.command,
      responseCode: error.responseCode,
      response: error.response
    });
    return res.status(502).json({
      message: isAuthFailure
        ? 'Zoho rejected the email login. Please update the Zoho SMTP app password on the server.'
        : 'Zoho SMTP could not send the email.',
      detail: process.env.NODE_ENV === 'production' ? undefined : (error.response || error.message)
    });
  }

  return res.status(200).json({ message: 'Quote request sent.' });
};
