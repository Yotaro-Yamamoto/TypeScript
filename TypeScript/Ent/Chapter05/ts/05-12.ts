//配列の繰り返し forEachメソッド(配列.forEach(関数(要素){処理}))
const x:number[] = [1,2,3,4,5];
let total: number = 0;
x.forEach(function(e){
    total+=e;
});
console.log(total);