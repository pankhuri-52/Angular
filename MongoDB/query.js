var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
	if (err) throw err;
	var dbo=db.db('mydb');
	var query={name:'Rahasya'};
	dbo.collection("products").find(query).toArray(function(err,res){
		if (err) throw err;
		else
			console.log(res);
		  db.close();
	});
});