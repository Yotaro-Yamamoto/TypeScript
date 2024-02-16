//読み取り専用プロパティ
//readonly修飾子
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