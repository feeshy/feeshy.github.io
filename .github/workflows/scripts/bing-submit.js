const fs = require('fs');

async function run() {
  if (!fs.existsSync('bing_queue.txt') || fs.readFileSync('bing_queue.txt', 'utf8').trim() === '') {
    console.log('No URLs to submit to Bing.');
    return;
  }

  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    console.error('INDEXNOW_KEY env variable is not set.');
    process.exit(1);
  }

  const fileContent = fs.readFileSync('bing_queue.txt', 'utf8');
  const urls = fileContent.split('\n').map(line => line.trim()).filter(Boolean);
  
  if (urls.length === 0) {
    console.log('Bing queue is empty.');
    return;
  }

  console.log(`Loaded ${urls.length} URLs. Submitting ${urls.length} URLs to Bing (IndexNow)...`);
  console.log(urls.join('\n'));
  console.log('');

  const payload = {
    host: 'feeshy.top',
    key: key,
    keyLocation: `https://feeshy.top/${key}.txt`,
    urlList: urls,
  };

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });
    
    console.log(`Bing HTTP Status: ${res.status}`);
    const text = await res.text();
    console.log(`Response: ${text}`);

    if (res.status === 200 || res.status === 202) {
      console.log('✅ Bing submission succeeded.');
      fs.writeFileSync('bing_queue.txt', ''); // Clear queue
    } else {
      console.error('❌ Bing submission failed.');
      process.exit(1);
    }
  } catch (err) {
    console.error('❌ Bing submission error:', err);
    process.exit(1);
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
