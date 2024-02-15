//配列の繰り返し forEachメソッド(配列.forEach(関数(要素){処理}))
var x = [1, 2, 3, 4, 5];
var total = 0;
x.forEach(function (e) {
    total += e;
});
console.log(total);
