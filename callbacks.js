/* 
   Callbacks in JavaScript are functions
   that are passed as arguments to other functions.
*/

var callback = function() {
    console.log("Done!");
}

setTimeout(callback, 5000);
