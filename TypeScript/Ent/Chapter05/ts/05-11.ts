//配列要素の繰り返し(配列.length)
const x: number[] = [1,2,3,4,5];
let total: number = 0;
for(let i: number=0;i<x.length;i++){
    total+=x[i];
}
console.log(total);