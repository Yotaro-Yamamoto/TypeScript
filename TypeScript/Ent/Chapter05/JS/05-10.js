var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//配列のコピー スプレッド構文([...変数])
var x = [1, 2, 3];
var y = __spreadArray([], x, true); //y=[1,2,3]と同じ
var z = __spreadArray(__spreadArray([], x, true), y, true); //z=[1,2,3,1,2,3]と同じ
console.log(x);
console.log(y);
console.log(z);
