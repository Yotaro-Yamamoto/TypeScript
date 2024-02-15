//分割代入のデフォルト引数
//実行エラー例
function addition(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a + b + c);
}
addition([1, 5]); //=>NaM
//↑数値とundefinedを計算するとNaN(Not-a-Number)となる。
