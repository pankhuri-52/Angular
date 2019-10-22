var http=require('http');
console.log('Server is active go to port number 9000');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	//res.write("welcome to the environment of Node.js");
	res.write(req.url);
	res.end();
}).listen(9000);
