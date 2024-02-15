//配列操作メソッド
//fill(Array.fill(値,開始位置,終了位置))
/*指定した範囲(省略時は先頭から末尾までとみなされる)にある
　配列要素に同じ値を設定できる*/
const fruits: string[] = Array(3); //要素数3の空要素
fruits.fill("りんご");
console.log(fruits);
fruits.fill("桃",1,3);
console.log(fruits);