var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
     if (err) throw err;
     var dbo=db.db('mydb');
     var query={name:1};
     dbo.collection('products').find().sort(mysort).toArray(function(err,res){
     	if (err) throw err;
     	else
     		console.log(res);
     	    db.close();
     });
});