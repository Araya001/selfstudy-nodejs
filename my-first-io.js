const fs = require('fs') 
var fileurl = process.argv[2] 
var result = fs.readFileSync(fileurl).toString().split("\n")
console.log(result.length-1);