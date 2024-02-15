//配列操作メソッド
//unshiftメソッド(Array.unshift(追加要素,追加要素,...))
//配列の先頭に1つ以上の要素を追加し、追加後の要素数を返す。
const family: string[] = ["僕","妹","父"];
console.log(family);
//順番を譲る
family.unshift("祖母");
//↓unshift後の配列を表示
console.log(family);