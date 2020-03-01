const fs = require('fs') 
var fileurl = process.argv[2] 
fs.readFile(fileurl, 'utf8',(err, data) => {
    if (err) throw err;
    console.log(data.split("\n").length - 1);
  });