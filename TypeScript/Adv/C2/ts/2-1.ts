//オブジェクトリテラル 
//例:缶ジュース
const obj = {
    name: "缶ジュース",
    flavor: "りんご味",
}
//上記宣言内容のオブジェクトを表示
console.log(obj);

//flavorをオレンジに変更し、表示
obj.flavor = "オレンジ味";
console.log(obj);

//オブジェクトのコピー
//新たにobj2を作成
//オブジェクトアサイン(Object.assign({},オブジェクト名))を使ってオブジェクトのコピーを行うこと！！
const obj2 = Object.assign({},obj); 
obj2.flavor = "メロン味";
//obj2を表示
console.log(obj2);


