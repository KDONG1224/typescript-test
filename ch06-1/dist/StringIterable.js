"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringIterable = void 0;
var StringIterable = /** @class */ (function () {
    function StringIterable(strings, currentIndex) {
        if (strings === void 0) { strings = []; }
        if (currentIndex === void 0) { currentIndex = 0; }
        this.strings = strings;
        this.currentIndex = currentIndex;
    }
    StringIterable.prototype[Symbol.iterator] = function () {
        var that = this;
        var currentIndex = that.currentIndex, length = that.strings.length;
        var iterator = {
            next: function () {
                var value = currentIndex < length ? that.strings[currentIndex++] : undefined;
                var done = value == undefined;
                return { value: value, done: done };
            },
        };
        return iterator;
    };
    return StringIterable;
}());
exports.StringIterable = StringIterable;
//# sourceMappingURL=StringIterable.js.map