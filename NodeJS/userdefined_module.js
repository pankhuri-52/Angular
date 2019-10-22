var x=require('http');
var y=require('./mymodule');

x.createServer(function(req,res){
	res.write("Date is: "+y.myfunction());
	res.end();
}).listen(8000);