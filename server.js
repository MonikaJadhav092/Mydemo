var express=require('express');
const res = require('express/lib/response');
var path=require('path');
var app=express();


app.use(express.static(path.join(__dirname,'public')));

app.get("/",function(req,resp){

    res.sendFile(path.join(__dirname,"/index.html"));
})

app.get("/hello",function(req,resp){
    var person={fname:"Rupesh",lname:"Ugle",contact:"8888289210"};
    res.send(person);
});

var server=app.listen(8000,function(){
    console.log("Connected to port 8000");
});