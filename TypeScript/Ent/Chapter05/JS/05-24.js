//配列操作メソッド
//find(Array.find(要素,要素番号,元の配列))
/*配列の各要素に対して1回ずつ判定用の関数を実行し、
 判定に合格した最初の要素の値を返す*/
//判定に合格した要素がなければ、undefinedを返す
var score = [65, 70, 90, 85];
//acore配列の中で1つでも80以上の値が出たら、Trueを返す
var x = score.find(function (e) {
    return e >= 80;
});
console.log(x);
