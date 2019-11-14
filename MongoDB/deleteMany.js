var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
	if (err) throw err;
	var dbo=db.db("mydb");
	var query={address:/^0/};
	dbo.collection("products").deleteMany(query,function(err,res){
		if (err) throw err;
		else
			console.log("Many records deleted");
		 db.close();
	});
});