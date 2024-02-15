//配列操作メソッド
//some(Array.some(要素,要素番号,元の配列))
/*配列の各要素に対して1回ずつ判定用の関数を実行し、 
　少なくとも1つ以上の要素が判定に合格するかどうかを
　boolean型で返す*/
//関数に渡される要素番号と元の配列は省略可能
const score: number[] = [65,70,90,85];
//acore配列の中で1つでも80以上の値が出たら、Trueを返す
const x: boolean = score.some(function(e) {
    return e >= 80;
});
console.log(x);