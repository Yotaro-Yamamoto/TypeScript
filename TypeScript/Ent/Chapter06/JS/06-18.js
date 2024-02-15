var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//汎用的な合計関数
function sum() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, a_1 = a; _a < a_1.length; _a++) {
        var x_1 = a_1[_a];
        total += x_1;
    }
    console.log(total);
}
sum();
sum(1, 2, 3, 4, 5);
var x = [1, 2];
var y = [3, 4];
sum.apply(void 0, __spreadArray(__spreadArray([], x, false), y, false));
