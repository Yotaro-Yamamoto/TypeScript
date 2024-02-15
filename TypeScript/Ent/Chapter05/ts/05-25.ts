//配列操作メソッド
//findIndex(Array.findIndex(要素,要素番号,元の配列))
/*配列の各要素に対して1回ずつ判定用の関数を実行し、 
　判定に合格した最初の要素の位置(0から始まる要素番号)
　をnumber型で返す*/
//判定に合格した要素がなければ、-1を返す
const score: number[] = [65,70,90,85];
const x: number  = score.findIndex(function(e) {
    return e >= 80;
});
console.log(x);