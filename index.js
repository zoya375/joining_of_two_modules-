var http =require('http');
http.createServer(function(request,response){
  response.writeHead(200,{'content-type': 'text/html'});
  response.write("<h1>heading</h1>");
  response.end();

}).listen(8080);
