var http =require('http');
var url =require('url');
http.createServer(function(request,response){
  var q= url.parse(request.url,true);
  var g= q.pathname;
  console.log(g);
  if(g=='/dashboard')
  {
    response.writeHead(200,{'content-type': 'text/html'});
    response.write("<h1>DASHBOARD</h1>");
  }
if(g=='/login')
{
  response.writeHead(200,{'content-type': 'text/html'});
  response.write("<h1>LOGIN</h1>");
}

  response.write("<a href =\"dashboard/\">Dashboard</a>");
  response.end();

}).listen(8080);
