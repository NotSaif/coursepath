const fs = require('fs');

async function parseMesser() {
  try {
    const res = await fetch('https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/');
    const html = await res.text();
    
    // Find all links matching sy0-701-video
    const regex = /<a [^>]*href=["'](https:\/\/www\.professormesser\.com\/security-plus\/sy0-701\/sy0-701-video\/[^"']+)["'][^>]*>(.*?)<\/a>/gi;
    let match;
    const results = [];
    
    while ((match = regex.exec(html)) !== null) {
      const url = match[1];
      const text = match[2].replace(/<[^>]+>/g, '').trim();
      if (!url.endsWith('/sy0-701-comptia-security-plus-course/')) {
        results.push({ url, text });
      }
    }
    
    console.log(JSON.stringify(results, null, 2));
  } catch (err) {
    console.error(err);
  }
}

parseMesser();
