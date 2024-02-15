//配列操作メソッド
//pushメソッド(Array.push(追加要素,追加要素,...))
//引数で指定した要素(()の中)を配列の末尾に追加するメソッド
const family: string[] = ["母","僕","妹"];
//後ろからもう一人やってきた
family.push("父");
//↓push後の配列を出力
console.log(family);