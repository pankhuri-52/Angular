var http=require('http');
var fs=require('fs');
console.log('Server is active go to portnumber 8000');
http.createServer(function(req,res){
   fs.appendFile('mynewfile.txt','Hello Content',function(err){
   	if(err)
   		console.log(err)
   	else
   		console.log('Saved!');
   })
}).listen(8000);