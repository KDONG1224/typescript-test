"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createRangeIterable_1 = require("./createRangeIterable");
var iterator = (0, createRangeIterable_1.createRangeIterable)(1, 3 + 1);
while (true) {
    var _a = iterator.next(), value = _a.value, done = _a.done;
    if (done)
        break;
    console.log(value);
}
//# sourceMappingURL=createRangeIterable-test.js.map