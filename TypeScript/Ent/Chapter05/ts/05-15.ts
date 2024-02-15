//配列操作メソッド
//popメソッド(Array.pop())
//配列の末尾にある要素を1つ取り出すメソッド
//取り出した要素は削除される。
const family: string[] = ["母","僕","妹","父"];
console.log(family);
const last: string = family.pop();
console.log(last+"が帰った");
console.log(family);