const async = require("async");


//ทำงานแบบไล่ลำดับฟังก์ชันลงไปเรื่อยๆ
async.waterfall([
    function (callback) {
        //null is error function
        /*
        Your Logic
        */
       console.log("step 01");
        callback(null, 'one', 'two');
    },
    function (arg1, arg2, callback) {
        // arg1 now equals 'one' and arg2 now equals 'two'
        /*
        Your Logic
        */
       console.log("step 02");
        callback(null, 'three');
    },
    function (arg1, callback) {
        // arg1 now equals 'three'
        /*
        Your Logic
        */
       console.log("step 03");
        callback(null, 'done');
    },

    function (arg1, callback) {
        console.log("final step");
        callback(null, 'finish');
    }
], function (err, result) {
    // result now equals 'done'
    if(!err){
            console.log(err);
    }

    console.log(result);
});
