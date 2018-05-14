const parallel = require('async').parallel;


//แต่ละฟังก์ชันทำงานแบบไม่รอกัน
parallel([
    function(callback) {
        setTimeout(function() {
            console.log('one');
            callback(null, 'one');
        }, 200);
    },
    function(callback) {
        setTimeout(function() {
            console.log('two');
            callback(null, 'two');
        }, 100);
    },
    function(callback) {
        setTimeout(function() {
            console.log('three');
            callback("ERROR", 'three');
        }, 150);
    }
],
// optional callback
function(err, results) {
    if(!err){
console.dir(results);
    }else{
        console.log(err);
    }
    
});
