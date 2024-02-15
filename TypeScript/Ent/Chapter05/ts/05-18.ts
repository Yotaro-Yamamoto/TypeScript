//配列操作メソッド
//slice(Array.slice(開始位置,終了位置))
/*指定した範囲(省略時は要素全体とみなされる)の配列要素から
　なる新しい配列を生成して返す*/
//配列のコピーに便利(非破壊的メソッド)
const family: string[] = ["母","僕","妹","父"];
console.log(family);
//先頭から2人目と3人目を新しい配列にコピーする
const children: string[] = family.slice(1,3); //=>["僕", "妹"]
console.log(children);
