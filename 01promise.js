const {readFile} = require('fs')
const p1 = new Promise(function(resolve,reject){
  console.log('pending')
  readFile('data/a.txt','utf8',(err,data) => {
    if(err){
      console.log('reject')
      reject(err)
    }else{
      console.log('resolve')
      resolve(data)
    }
  })
})
const p2 = new Promise(function(resolve,reject){
  console.log('pending')
  readFile('data/b.txt','utf8',(err,data) => {
    if(err){
      console.log('reject')
      reject(err)
    }else{
      console.log('resolve')
      resolve(data)
    }
  })
})

const p3 = new Promise(function(resolve,reject){
  console.log('pending')
  readFile('data/c.txt','utf8',(err,data) => {
    if(err){
      console.log('reject')
      reject(err)
    }else{
      console.log('resolve')
      resolve(data)
    }
  })
})

p1
  .then(function(data){
    console.log(data.toString())
    return p2
  })
  .then(function(data){
    console.log(data.toString())
    return p3
  })
  .then(function(data){
    console.log(data.toString())
  })
