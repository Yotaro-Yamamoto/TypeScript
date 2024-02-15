//配列のコピー スプレッド構文([...変数])
const x: number[] = [1,2,3];
const y: number[] = [...x];         //y=[1,2,3]と同じ
const z: number[] = [...x,...y];    //z=[1,2,3,1,2,3]と同じ
console.log(x);
console.log(y);
console.log(z);