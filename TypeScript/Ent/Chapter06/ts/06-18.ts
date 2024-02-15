//汎用的な合計関数
function sum(...a:number[]){
    let total: number = 0;
    for(const x of a){
        total += x;
    }
    console.log(total);
}
sum();  
/*
↑残余引数に値が1個も供給されなかった場合、
undefinedではなく空の配列となり、今回の場合は0となる。
*/
sum(1,2,3,4,5);

const x:number[] = [1,2];
const y:number[] = [3,4];
sum(...x,...y);