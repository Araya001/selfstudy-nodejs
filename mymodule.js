
const fs = require('fs') 
const path = require('path');

var dataList = []

module.exports = function (fileDir,fileFilter,callback) { 
    fs.readdir(fileDir, 'utf8',(err, data) => {

    if (err) { return callback(err) } 

    data.forEach(element => {
        if (path.extname(element,'.'+fileFilter) === '.'+fileFilter) {dataList.push(element)}
    });

    callback(err,dataList)  
  });} 




