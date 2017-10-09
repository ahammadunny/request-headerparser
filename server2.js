'use strict';
var express = require('express');
var app = express();
var options = {  
    weekday: "long", year: "numeric", month: "short",  
    day: "numeric"  
};  

//app.use(express.static('public'));
//app.use(express.static('public'));
var api = '/api/whoami';
app.get('/', function (req, res) {
  res.redirect(api);
});
app.get(api, function (request, response) {
  response.sendFile( __dirname + '/views/index.html');
  //var remote = request.headers['X-forwarded-for'] || request.connection.remoteAddress;
  var remote = request.headers['x-forwarded-for'].split(',')[0];
  var language = request.headers["accept-language"];
  var agent = request.get('User-Agent').split(/[\(\)]/)[1];
//var agent = request.get('User-Agent');
  
//  RegExp.escape= function(s) {
 //   return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
//};
 
//  var software = new RegExp(RegExp.escape(agent));

   //   software = RegExp;
   // var agent = request.get('User-Agent');
   // var agent = request.get('user-agent').\([^()]*\)
  console.log(JSON.stringify(remote));
  
response.json({ ipaddress: remote, language : language, software: agent});
});
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
