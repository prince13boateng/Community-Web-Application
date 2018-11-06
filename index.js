var express = require('express');
var Comapp = express();

Comapp.get('*', function(req, res){
    res.send('<h1>hello world<h1>');
  });
  
  Comapp.listen(9090, ()=> {

    console.log('Testing the application port');
  });
