var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
	if (err) throw err;
	var dbo=db.db('mydb');
	var myobj=[
       {_id:111,name:'Rahasya'},
       {_id:222,name:'Radhika'},
       {_id:333,name:'Aashiya'}
	];
	dbo.collection("products").insertMany(myobj,function(err,res){
		if (err) throw err;
		else
			console.log("Entries inserted with unique id's");
		db.close();
	});
});