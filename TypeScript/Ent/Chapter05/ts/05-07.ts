//2変数の交換
let a: number = 1;
let b: number = 2;
console.log("a = "+a);
console.log("b = "+b);
[a,b] = [b,a];  //aに2が代入され、bに1が代入される
console.log("a = "+a);
console.log("b = "+b);
