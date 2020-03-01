const fs = require('fs') 
const path = require('path');

var fileDir = process.argv[2] 
var fileFilter = process.argv[3] 

fs.readdir(fileDir, 'utf8',(err, data) => {
    if (err) throw err;
    data.forEach(element => {
        if (path.extname(element,'.'+fileFilter) === '.'+fileFilter) console.log(element)
    });
  });