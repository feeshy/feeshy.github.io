const fs = require('fs');

async function run() {
  if (!fs.existsSync('baidu_queue.txt') || fs.readFileSync('baidu_queue.txt', 'utf8').trim() === '') {
    console.log('No URLs to submit to Baidu.');
    return;
  }

  const token = process.env.BAIDU_TOKEN;
  if (!token) {
    console.error('BAIDU_TOKEN env variable is not set.');
    process.exit(1);
  }

  let fileContent = fs.readFileSync('baidu_queue.txt', 'utf8');
  let urls = fileContent.split('\n').map(line => line.trim()).filter(Boolean);
  
  if (urls.length === 0) {
    console.log('Baidu queue is empty.');
    return;
  }

  async function submitBatch(batch) {
    console.log(`Submitting batch of ${batch.length} URLs to Baidu:`);
    console.log(batch.join('\n'));
    
    try {
      const res = await fetch(`http://data.zz.baidu.com/urls?site=https://feeshy.top&token=${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: batch.join('\n'),
      });

      const status = res.status;
      const bodyText = await res.text();
      console.log(`Baidu HTTP Status: ${status}, Response: ${bodyText}`);

      let data;
      try {
        data = JSON.parse(bodyText);
      } catch (e) {
        data = { message: bodyText };
      }

      return { status, data };
    } catch (err) {
      console.error('Network error during batch submission:', err);
      return { status: 500, data: { message: err.message } };
    }
  }

  // Step 1: Try to submit 10 URLs
  const firstBatchSize = Math.min(urls.length, 10);
  const firstBatch = urls.slice(0, firstBatchSize);
  
  let { status, data } = await submitBatch(firstBatch);

  if (status === 200) {
    console.log('✅ First batch of 10 succeeded.');
    // Remove submitted URLs
    urls = urls.slice(firstBatchSize);
    fs.writeFileSync('baidu_queue.txt', urls.join('\n') + (urls.length ? '\n' : ''));
    return;
  }

  // If failed with over quota
  const isOverQuota = data && (
    data.message === 'over quota' || 
    (data.message && typeof data.message === 'string' && data.message.includes('quota')) ||
    data.error === 400
  );

  if (isOverQuota) {
    console.log('⚠️ 10 URLs failed due to over quota. Retrying with 1 URL to probe quota...');
    
    // Step 2: Try submitting exactly 1 URL
    const probeBatch = urls.slice(0, 1);
    const probeResult = await submitBatch(probeBatch);
    
    if (probeResult.status === 200) {
      console.log('✅ Probe URL succeeded.');
      urls = urls.slice(1); // Remove the 1 successful URL
      
      const remain = probeResult.data.remain;
      console.log(`Remaining quota reported: ${remain}`);
      
      if (remain > 0 && urls.length > 0) {
        const nextBatchSize = Math.min(urls.length, remain);
        const nextBatch = urls.slice(0, nextBatchSize);
        console.log(`Submitting remaining allowed batch of ${nextBatchSize} URLs...`);
        
        const finalResult = await submitBatch(nextBatch);
        if (finalResult.status === 200) {
          console.log('✅ Final batch succeeded.');
          urls = urls.slice(nextBatchSize);
        } else {
          console.error('❌ Final batch failed:', finalResult.data);
        }
      }
      
      // Update queue
      fs.writeFileSync('baidu_queue.txt', urls.join('\n') + (urls.length ? '\n' : ''));
    } else {
      console.log('❌ Probe URL also failed. No quota remaining for today.');
    }
  } else {
    console.error('❌ Submission failed with other error:', data);
    process.exit(1);
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
