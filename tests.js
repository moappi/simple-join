var join = require('simple-join');

var finished = [];

//Wait for the 5 tests to be done
var tests = new join(5,function(){
    
    console.log("FINISHED",finished);
});

// ------------------ 1. Test Done (single) --------------------

var test1 = new join(3,function(status){
     
    finished.push("TEST 1:" + JSON.stringify(status));
    tests.done();
});

test1.done();
test1.done();
test1.done();

// ------------------ 2. Test Done (multiple) --------------------

var test2 = new join(3,function(status){
     
    finished.push("TEST 2:" + JSON.stringify(status));
    tests.done();
});

test2.done(3);

// ------------------ 3. Test Success (single) & Error (single) --------------------

var test3 = new join(2,function(status){
     
    finished.push("TEST 3:" + JSON.stringify(status));
    tests.done();
});

test3.success();
test3.error();

// ------------------ 4. Test Success (single) & Error (message) --------------------

var test4 = new join(2,function(status){
     
    finished.push("TEST 4:" + JSON.stringify(status));
    tests.done();
});

test4.success();
test4.error("Test Error Message");

// ------------------ 5. Test Success (multiple) & Error (multiple) --------------------
var test5 = new join(4,function(status){
     
    finished.push("TEST 5:" + JSON.stringify(status));
    tests.done();
});

test5.success(2);
test5.error(2);