//読み取り専用プロパティ
//書式1 readonly修飾子
type Juice = {
    readonly name:string;   //読み取り専用のプロパティ
    flavor:string;
}

const obj: Juice = {
    name:"缶ジュース",
    flavor:"りんご味",
};
console.log(obj);

//obj:name = "ペットボトル" ←コンパイルエラー
obj.flavor = "メロン味";    //代入可能
console.log(obj);

//書式2 constアサーション
/*オブジェクトリテラルの末尾にas constをつけると
  全てのプロパティが、読みより専用になる。*/

const obj2 = {
    name:"缶ジュース",
    flavor:"りんご味",
}as const;
//プロパティの値を書き換えようとすると、コンパイルエラーとなる。
//obj2.name="ペットボトル" ←コンパイルエラー
//obj2.flavor="メロン味"  ←コンパイルエラー
console.log(obj2);