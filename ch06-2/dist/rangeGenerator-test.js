"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
Object.defineProperty(exports, "__esModule", { value: true });
var rangeGenerator_1 = require("./rangeGenerator");
var iterator = (0, rangeGenerator_1.rangeGenerator)(1, 3 + 1);
while (1) {
    var _b = iterator.next(), value = _b.value, done = _b.done;
    if (done)
        break;
    console.log(value);
}
try {
    for (var _c = __values((0, rangeGenerator_1.rangeGenerator)(4, 6 + 1)), _d = _c.next(); !_d.done; _d = _c.next()) {
        var value = _d.value;
        console.log(value);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
    }
    finally { if (e_1) throw e_1.error; }
}
//# sourceMappingURL=rangeGenerator-test.js.map