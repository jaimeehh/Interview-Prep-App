/* ══════════════════════════════════
   api/kv.js — Upstash Redis endpoint
   GET  /api/kv?key=applications:PROFILE_ID  → { value: [...] }
   POST /api/kv  body: { key, value }         → { ok: true }
   DELETE /api/kv?key=...                     → { ok: true }
══════════════════════════════════ */

const { Redis } = require('@upstash/redis');

function getKV() {
  return new Redis({
    url: process.env.KV_REST_API_URL,
    token: process.env.KV_REST_API_TOKEN,
  });
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const kv = getKV();

  try {
    if (req.method === 'GET') {
      const { key } = req.query;
      if (!key) return res.status(400).json({ error: 'Missing key' });
      const value = await kv.get(key);
      return res.status(200).json({ value: value ?? null });
    }

    if (req.method === 'POST') {
      const { key, value } = req.body;
      if (!key) return res.status(400).json({ error: 'Missing key' });
      await kv.set(key, JSON.stringify(value));
      return res.status(200).json({ ok: true });
    }

    if (req.method === 'DELETE') {
      const { key } = req.query;
      if (!key) return res.status(400).json({ error: 'Missing key' });
      await kv.del(key);
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });

  } catch (err) {
    console.error('[kv.js]', err);
    return res.status(500).json({ error: err.message });
  }
};
