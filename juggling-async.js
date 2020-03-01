const bl = require('bl') 
const http = require('http');

var url = [process.argv[2],process.argv[3],process.argv[4]] 
var count = 0
var result = [];

function getData(url,index) {

    http.get(url, function callback(response){
    
        response.setEncoding('utf8');
        response.pipe(bl (function (err, data) {

           result[index] = data.toString();
           count++
           if(count === 3) {result.forEach(element => {
               console.log(element)
           });}
           
        }))
        // if(count===3){
        //     result.forEach(element => {
        //         console.log(element)
        //     });
        // }

      
    })
}

for (let index = 0; index < url.length; index++) {
    getData(url[index],index)
    
}


    