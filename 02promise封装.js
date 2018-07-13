const fs = require('fs')

function readl(fp){
  return new Promise ((resolve,reject)=>{
    fs.readFile(fp,'utf8',(err,data)=>{
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}
readl('data/a.txt')
  .then(data => {
    console.log(data.toString())
    return readl('data/b.txt')
  })
  .then(data =>{
    console.log(data.toString())
    return readl('data/c.txt')
  })
  .then(data => {
    console.log(data.toString())
  })


