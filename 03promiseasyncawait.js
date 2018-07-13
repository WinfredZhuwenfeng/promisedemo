const fs = require('fs')

function rf (fp){
  return new Promise((resolve,reject)=>{
    fs.readFile(fp,'utf8',(err,data) =>{
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}
function rf (fp){
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
async function a(){
  const dataA = await rf('./data/a.txt')
  console.log(dataA.toString())
  const dataB = await rf('./data/b.txt')
  console.log(dataB.toString())
  const dataC = await rf('./data/c.txt')
  console.log(dataC.toString())
}

a()
