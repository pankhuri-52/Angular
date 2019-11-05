var url=require('url');
var addr='http://localhost:8080/default.htm?year=2017&month=february';

var q=url.parse(addr,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata=q.query;
console.log(qdata.month);

------------------------------------------------------------
-----------------------------------------------------------

var url=require('url');
var requrl='http://localhost:8080/usr?country=India&city=Delhi';

var urlobj=url.parse(requrl,true);
console.log(urlobj.host);
console.log(urlobj.pathname);
console.log(urlobj.search);

var querydata=urlobj.query;
console.log(querydata.country);
console.log(querydata.city);
