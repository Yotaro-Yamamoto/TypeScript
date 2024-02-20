//配列要素のオプショナルチェーン
//配列要素のオプショナルチェーンは、配列名の後ろに「?.」を記述する
const member = ["山田","鈴木"];
console.log(member?.[0]);   //->山田
console.log(member?.[1]);   //->鈴木
console.log(member?.[2]?.toString());//->undefined
//console.log(member?.[2].toString());←実行時エラー
//↑ = console.log(undefined.toString());