const bl = require('bl') 
const http = require('http');

var url = process.argv[2] 


    http.get(url, function callback(response){
        
        response.setEncoding('utf8');
        response.pipe(bl (function (err, data) {
            console.log(data.length) 
            console.log(data.toString())
        }))
    })