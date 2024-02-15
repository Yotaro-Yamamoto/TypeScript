var _a;
//2変数の交換
var a = 1;
var b = 2;
console.log("a = " + a);
console.log("b = " + b);
_a = [b, a], a = _a[0], b = _a[1]; //aに2が代入され、bに1が代入される
console.log("a = " + a);
console.log("b = " + b);
