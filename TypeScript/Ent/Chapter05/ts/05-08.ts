//途中の要素の分割代入
const x: number[] = [1,2,3,4,5];
console.log(x);
let [,,a,,b] = x;   //a=3、b=5と同じ
console.log("a = "+a);
console.log("b = "+b);