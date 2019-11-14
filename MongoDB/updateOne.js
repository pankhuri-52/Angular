var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
	if (err) throw err;
	var dbo=db.db('mydb');
	var old_query={name:'Ashiya'};
	var new_query={$set:{name:'Rahasya'}};
	dbo.collection("products").updateOne(old_query,new_query,function(err,res){
		if (err) throw err;
		else
			console.log("1 document updated");
		   db.close();
	});
});