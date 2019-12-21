var express=require('express');
var app=express();

app.set("view engine","jade");
app.get('/',function(req,res){
	res.render('sample');
});

var server=app.listen(5000,function(){
	console.log("Node server is running..");
});