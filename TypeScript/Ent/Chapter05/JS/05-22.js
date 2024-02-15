//配列操作メソッド
//includes(Array.includes(検索する値,検索開始位置))
/*指定した位置以降(省略時は先頭から検索)に特定の値が
 含まれるかどうかをboolean型で返す*/
var family = ["母", "僕", "妹", "父"];
if (family.includes("兄")) {
    console.log("妹がいます");
}
