var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
	if (err) throw err;
	var dbo=db.db('mydb');
	var myobj=[
	    {name:'Raj',address:'Chandigarh'},
	    {name:'Seema',address:'Panchkula'},
	    {name:'Rahul',address:'Patiala'}
	];
	dbo.collection("customers").insertMany(myobj,function(err,res){
		if (err) throw err;
		else
			console.log('Entries inserted');
		db.close();
	});
});