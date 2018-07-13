const {readFile} = require('fs')

readFile('data/a.txt',(err,data) => {
  if(err){
    throw err
  }
  console.log(data.toString())
})

readFile('data/b.txt',(err,data) => {
  if(err){
    throw err
  }
  console.log(data.toString())
})

readFile('data/c.txt',(err,data) => {
  if(err){
    throw err
  }
  console.log(data.toString())
})
