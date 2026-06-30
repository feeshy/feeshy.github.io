const fs = require('fs');
const { google } = require('googleapis');

async function run() {
  if (!fs.existsSync('google_queue.txt') || fs.readFileSync('google_queue.txt', 'utf8').trim() === '') {
    console.log('No URLs to submit to Google.');
    return;
  }

  const credentials = process.env.GOOGLE_INDEXING_CREDENTIALS;
  if (!credentials) {
    console.error('GOOGLE_INDEXING_CREDENTIALS secret is not set.');
    process.exit(1);
  }

  const fileContent = fs.readFileSync('google_queue.txt', 'utf8');
  const urls = fileContent.split('\n').map(line => line.trim()).filter(Boolean);
  
  if (urls.length === 0) {
    console.log('Google queue is empty.');
    return;
  }

  console.log(`Loaded ${urls.length} URLs for Google submission.`);

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(credentials),
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });
  const client = await auth.getClient();
  const indexing = google.indexing({ version: 'v3', auth: client });

  const successfulUrls = [];
  const failedUrls = [];

  for (const url of urls) {
    try {
      console.log(`Submitting to Google: ${url}`);
      const res = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      console.log(`✅ Success: ${url}`);
      successfulUrls.push(url);
    } catch (err) {
      console.error(`❌ Failed: ${url}`, err.message);
      failedUrls.push(url);
    }
  }

  // Update the file to keep only failed URLs
  fs.writeFileSync('google_queue.txt', failedUrls.join('\n') + (failedUrls.length ? '\n' : ''));
  console.log(`Google submission finished. Success: ${successfulUrls.length}, Failed (kept in queue): ${failedUrls.length}`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
