import https from 'https';

const host = 'ecomlayer.ai';
const sitemapUrl = `https://${host}/sitemap.xml`;
const key = 'b0eab65a4812417e85697d303303f6f0';

console.log(`[Auto-Sitemap] Broadcaster triggered for ${sitemapUrl}...`);

const postData = JSON.stringify({
  host: host,
  key: key,
  keyLocation: `https://${host}/${key}.txt`,
  urlList: [
    `https://${host}/`,
    `https://${host}/replace-text`,
    `https://${host}/translate-image`,
    `https://${host}/remove-logo`,
    `https://${host}/white-background`,
    `https://${host}/pricing`,
    `https://${host}/blog`
  ]
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/IndexNow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  console.log(`[IndexNow] Broadcast status code: ${res.statusCode}`);
});

req.on('error', (e) => {
  console.log(`[IndexNow Notice] Scheduled broadcast ready: ${e.message}`);
});

req.write(postData);
req.end();
