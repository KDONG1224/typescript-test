"use strict";
var period = 1000;
var count = 0;
console.log("program started...");
var id = setInterval(function () {
    if (count >= 3) {
        clearInterval(id);
        console.log("program finished...");
    }
    else
        console.log(++count);
}, period);
//# sourceMappingURL=setInterval.js.map