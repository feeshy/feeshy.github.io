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

  // 默认尝试提交全部 URL
  const firstBatch = [...urls];
  let { status, data } = await submitBatch(firstBatch);

  if (status === 200) {
    console.log('✅ All URLs submitted successfully.');
    // 清空队列
    fs.writeFileSync('baidu_queue.txt', '');
    return;
  }

  // 如果因为超限失败 (over quota)
  const isOverQuota = data && (
    data.message === 'over quota' || 
    (data.message && typeof data.message === 'string' && data.message.includes('quota')) ||
    data.error === 400
  );

  if (isOverQuota) {
    console.log('⚠️ Over quota. Retrying with 1 URL to probe remaining quota...');
    
    // 尝试提交 1 个 URL 来获取剩余额度
    const probeBatch = urls.slice(0, 1);
    const probeResult = await submitBatch(probeBatch);
    
    if (probeResult.status === 200) {
      console.log('✅ Probe URL succeeded.');
      urls = urls.slice(1); // 移除这 1 个成功的 URL
      
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
      
      // 更新队列文件
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
