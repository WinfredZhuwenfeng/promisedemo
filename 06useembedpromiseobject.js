const winfred =require( './05把服务器端的请求方法用promise封装.js')

function go(url){
  winfred.get(url)
  .then(data => {
    console.log(data)
  })
}

go('https://www.qiushibaike.com/8hr/page/1/')
