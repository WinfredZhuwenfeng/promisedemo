const https = require('https')
const fs = require('fs')
const {parse} = require('url')
const winfred = {}

winfred.get = (url) =>{
  return new Promise((resolve,reject)=>{
    url = parse(url)
    const options = {
      hostname: url.host,
      port: 443,
      path: url.path,
      method: 'GET',
      // 欺骗对方服务器，把 PC 内容响应给我
      headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36'
    }
  }
    https.get(options, (res) => {
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
          resolve(rawData)
        });
      }).on('error', (e) => {
        reject(e)
      });
  }) 
}
module.exports = winfred
