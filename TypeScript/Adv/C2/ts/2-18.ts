type Icecream = {
    name:string;
    flavor:string;
};
//プロパティのループ
/*JSのfor-in構文を使って某ジェクトのプロパティを繰り返し
　参照しようとするとコンパイルエラーが発生する。*/
const obj = {
    name:"アイスクリーム",
    flavor:"バニラ味",
};
//↓コンパイルエエラー
/*for(const key in obj){
    const value = obj[key];
}*/
/*keyof演算子とtypeof演算子を利用して、for-in構文のkeyをobjの
　プロパティ名のユニオン型として宣言すると、型が一致するのでコンパイル
　エラーを回避できる。*/

//typeof演算子
/*TypeScriptのtypeof演算子は、変数から型を抽出する。
　次のコードはobjの型にIcecreamという名前をつけて定義し、
　Icecream型のオブジェクトを生成するから際に利用している。*/
//①type Icecream = typeof obj;
const chocoIce:Icecream = {
    name:"アイスクリーム",
    flavor:"チョコレート味",
};
console.log(chocoIce);

//keyof演算子
/*keyof演算子をオブジェクトに使うと、オブジェクトのキー(プロパティ名)
　をユニオン型で返す。*/
//②let key: keyof Icecream;//"name" | "flavor"
//これらを組み合わせると次の結果が得られる。(①+②)
let key: keyof typeof obj;//"name" | "flavor"
