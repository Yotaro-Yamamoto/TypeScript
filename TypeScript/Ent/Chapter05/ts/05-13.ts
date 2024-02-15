//繰り返し処理を途中で終了させる
const x: number[] = [1,2,3,4,5];
let total: number = 0;
let i:number;
for(i=0;i<x.length;i++){
    total += x[i];
    if(total>=10){
        break;
    }
}

console.log(x[i] + "番目で終了しました。")