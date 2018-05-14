// var http = require('http'); 
// http.createServer(function(req,res){ 
// 	res.writeHead(200,{'Content-Type':'text/plain'});
// 	res.end('yes you can\n');
// }).listen(8000);
// console.log("server running port 8000"); 



//PATTERN 1: DEFINE A GLOBAL
require("./foo");
foo();
// foo2();
foo2("Hello");
//foo2("Hi","b1","b2");



//PATTERN 2: EXPORT AN ANONYMOUS FUNCTION
//Can use any business logic name
//Beneficial for duplicate function name
//But can define only one module
var bar = require("./bar");
bar();


//PATTERN 3: EXPORT A NAMED FUNCTION
var fiz = require("./fiz.js").fiz;
fiz();
var fiz2 = require("./fiz.js").fiz2;
fiz2();

var fizz = require("./fiz.js");
fizz.fiz();
fizz.fiz2("hi");




//PATTERN 4: EXPORT AN ANONYMOUS OBJECT
//BUZ
//Can Add many method
var buz = require("./buz");
buz.log();
buz.log2("hi");



//PATTERN 5: EXPORT A NAMED OBJECT
//BAZ
var baz = require('./baz.js').Baz; 
baz.log();
baz.log2("hi");


//PATTERN 6: EXPORT AN ANONYMOUS PROTOTYPE
var Doo = require('./doo.js'); 
var doo = new Doo(); 
doo.log();



//PATTERN 7: EXPORT A NAMED PROTOTYPE
var Qux = require('./qux.js').Qux; 
var qux = new Qux(); 
qux.log();
