//繰り返し処理を途中で終了させる
var x = [1, 2, 3, 4, 5];
var total = 0;
var i;
for (i = 0; i < x.length; i++) {
    total += x[i];
    if (total >= 10) {
        break;
    }
}
console.log(x[i] + "番目で終了しました。");
