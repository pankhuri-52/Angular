var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
	if (err) throw err;
	var dbo=db.db('mydb');
	dbo.collection('customers').findOne({},function(err,res){
		if (err) throw err;
		else
			console.log(res.name);
		db.close();
	});
});