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
var e_1, _a, e_2, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var IterableUsingGenerator_1 = require("./IterableUsingGenerator");
try {
    for (var _c = __values(new IterableUsingGenerator_1.IterableUsingGenerator([1, 2, 3])), _d = _c.next(); !_d.done; _d = _c.next()) {
        var item = _d.value;
        console.log(item);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
    }
    finally { if (e_1) throw e_1.error; }
}
try {
    for (var _e = __values(new IterableUsingGenerator_1.IterableUsingGenerator(["hello", "kdong", "!!!"])), _f = _e.next(); !_f.done; _f = _e.next()) {
        var item = _f.value;
        console.log(item);
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
    }
    finally { if (e_2) throw e_2.error; }
}
//# sourceMappingURL=IterableUsingGenerator-test.js.map