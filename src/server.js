var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/papers'));
//Store all JS and CSS in Scripts folder.

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/introduction',function(req,res){
  res.sendFile(path.join(__dirname+'/introduction.html'));
});

app.get('/resources',function(req,res){
  res.sendFile(path.join(__dirname+'/resources.html'));
});

app.get('/programmablescience',function(req,res){
  res.sendFile(path.join(__dirname+'/programmablescience.html'));
});

app.get('/participate',function(req,res){
  res.sendFile(path.join(__dirname+'/participate.html'));
});	

app.get('/faq',function(req,res){
  res.sendFile(path.join(__dirname+'/faq.html'));
});

app.get('/individuals',function(req,res){
  res.sendFile(path.join(__dirname+'/individuals.html'));
});

app.get('/mappers',function(req,res){
  res.sendFile(path.join(__dirname+'/mappers.html'));
});

app.get('/businesses',function(req,res){
  res.sendFile(path.join(__dirname+'/businesses.html'));
});

app.get('/developers',function(req,res){
  res.sendFile(path.join(__dirname+'/developers.html'));
});	

app.get('/government',function(req,res){
  res.sendFile(path.join(__dirname+'/government.html'));
});	

app.listen(3000);

