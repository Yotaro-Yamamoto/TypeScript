//配列操作メソッド
//shiftメソッド(Array.shift())
//配列の先頭あｋら要素を1つ取り出して返す。
//取り出した要素は削除される
const family: string[] = ["母","僕","妹","父"];
console.log(family);
//先頭の人の順番が来た
const first: string = family.shift();
console.log(first+"の番です");
console.log(family);