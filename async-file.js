var fs = require("fs");

var call_back = function(err,data){
    //do when finish function
    if(!err){
        console.log(data);
    }
}

fs.readFile('message.text', 'utf8',call_back);
console.log("something else");
