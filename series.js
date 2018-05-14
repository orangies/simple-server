const series = require("async").series;
//Series จะมี Callback อันเดียวเสมอ
series([
    function(callback) {
        // do some stuff ...
        callback(null, 'one');
    },
    function(callback) {
        // do some more stuff ...
        callback(null, 'two');
    },
    function(callback) {
        // do some more stuff ...
        callback(null, 'three');
    },
    function(callback) {
        // do some more stuff ...
        callback(null, 'four');
    }
],
// optional callback
function(err, results) {
    // results is now equal to ['one', 'two']
    if(!err){
        console.log(results);
    }else{
        console.log(err);
    }
    
});
