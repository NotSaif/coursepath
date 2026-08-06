const fs = require('fs');

async function inspectAll() {
  const res = await fetch('https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/');
  const html = await res.text();
  
  const matches = html.match(/href=["']([^"']+)["']/g) || [];
  const securityLinks = matches.filter(m => m.includes('security-plus')).slice(0, 40);
  console.log(securityLinks.join('\n'));
}

inspectAll();
