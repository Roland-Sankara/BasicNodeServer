const http = require('http');
const fs = require('fs');
const url = require('url');


http.createServer(function(req,res){
    // the parameters res represnts the response object while req represents the request object
    const path = url.parse(req.url,true);
    const filename = path.pathname !== '/'?`.${path.pathname}.html`:'./index.html';
    // add prefix "." and suffix ".html" to pathname

    fs.readFile(filename,function(error,data){
        if(error){
            // handles errors with file path
            fs.readFile('./404.html',function(error,data){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                res.end();
            })
        }else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        }
        
    })

}).listen(8080);