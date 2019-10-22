var http=require('http');
var fs=require('fs');
console.log('Server is active go to port number 9000');
http.createServer(function(req,res){
	var t=fs.readFile('random.txt',function(data,err){
		if(err)
			console.log(err);
		else{
			res.writeHead(200,{'Content-Type':'text/html'});
			res.write(data);
			console.log(data);
			res.end();
		}
	});
	console.log('Done Right');
}).listen(9000);