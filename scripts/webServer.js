// var express = require("express"); //importing express
// var path = require("path");// importing path module from nodes
// var app = express(); //creating the express application
// var rootPath = path.normalize(__dirname + '/../'); //<<"/../">> this will take to up(inside)directory of root directory of application


// app.use(express.static(rootPath + "/app"));
// //static function servers the pages in the given directory without processing them at all
// //pages are in app folder so it is added to the rootPath
// var port = 3000;
// app.listen(port);
// console.log("Listening on " + port);

var express = require("express"); //importing express
var path = require("path");// importing path module from nodes
var open = require("open");//used to open the browser while starting the application automatically 

var port = 3000;
var app = express(); //creating the express application

var httpCall = function(req, res){
    res.sendFile(path.join(__dirname,'../introduction.html'));
}

var errorHandler = function(err){
    if(err){
        console.log(err);
    }
    else{
        open('http://localhost:' + port); //this automatically open browser. 
    }
}

app.get('/', httpCall);
app.listen(port, errorHandler);
