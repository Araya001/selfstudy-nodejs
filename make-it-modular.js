const mymodule = require('./mymodule.js')  

var fileDir = process.argv[2] 
var fileFilter = process.argv[3] 

mymodule(fileDir,fileFilter,Callback)

function Callback(err,dataList) {
    //console.log(err,dataList)
    dataList.forEach(element => {
        console.log(element)
    });
}