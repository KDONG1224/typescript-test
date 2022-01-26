"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yield_return_1 = require("./yield-return");
var iter = (0, yield_return_1.gen)();
while (true) {
    var _a = iter.next((0, yield_return_1.random)(10, 1)), value = _a.value, done = _a.done;
    if (done)
        break;
    console.log(value);
}
//# sourceMappingURL=yield-return-test.js.map