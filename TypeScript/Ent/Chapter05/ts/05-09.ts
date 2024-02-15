//存在しない要素の分割代入
const x: number[] = [1,2,3];
let [a,b,c,d] = x;  //dには代入されない
console.log("a = "+a);
console.log("b = "+b);
console.log("c = "+c);
console.log("d = "+d);  //d = undefinedと表示される