//配列操作メソッド
//join(Array.join(区切り文字))
/*指定した範囲(省略時は「,」とみなされる)で配列要素を連結した
　文字列を生成して返す*/
//配列を文字列に変換したい時に便利(破壊的メソッド)
const family: string[] = ["母","僕","妹","父"];
console.log(family);
//配列を文字列に変換する
const member: string = family.join("|");
console.log(member);
