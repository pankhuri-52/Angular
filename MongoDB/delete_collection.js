var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
	if (err) throw err;
	var dbo=db.db("mydb");
	dbo.collection("customer_table").drop(function(err,delOK){
		if (err) throw err;
		else
			console.log("Collection deleted");
		db.close();
	});
});