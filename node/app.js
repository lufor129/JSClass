const request = require('request');
const fs = require('fs');

const http = require('http');

http.createServer(function(req,res){
  if(req.url == '/'){
    console.log(req.url);
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("Hello world");
    res.end();
  }else if(req.url == '/search'){
    console.log(req.url);
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("search");
    res.end();
  }
}).listen(process.env.PORT || 3000);

console.log("已開啟");
