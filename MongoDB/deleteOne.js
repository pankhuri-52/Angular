var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
	if (err) throw err;
	var dbo=db.db('mydb');
	var query={name:'Rahasya'};
	dbo.collection("products").deleteOne(query,function(err,res){
		if (err) throw err;
		else
			console.log("1 entry deleted");
		   db.close();
	});
});