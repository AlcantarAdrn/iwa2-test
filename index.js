const http = require('http');

http.createServer((req, res)=>{
  res.write("Hello WebDeve \n"); // write a response
  res.end(); //end the response
}).listen(8000); // listen for requests on port 8000
