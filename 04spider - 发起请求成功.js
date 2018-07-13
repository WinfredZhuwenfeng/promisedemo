const https = require('https')
const fs = require('fs')
const options = {
  hostname: 'www.qiushibaike.com',
  port: 443,
  path: '/',
  method: 'GET',
  // 欺骗对方服务器，把 PC 内容响应给我
  headers: {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36'
}
};
// 'https://www.qiushibaike.com/8hr/page/1/'
https.get(options, (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  let error;
  if (statusCode !== 200) {
    error = new Error('请求失败。\n' +
                      `状态码: ${statusCode}`);
  } 
  if (error) {
    console.error(error.message);
    // 消耗响应数据以释放内存
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    fs.writeFile('./qiubai.html',rawData,err =>{
      if(err){
        throw err
      }else{
        console.log('success')
      }
    })
  });
}).on('error', (e) => {
  console.error(`错误: ${e.message}`);
});
