var express = require('express');

var app = express();

app.listen(4001);
app.get('/',function(req,res){
	res.end("hello World");
})

module.export = app;