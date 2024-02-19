//オプショナルプロパティ
/*プロパティの後ろに「?」を付与すると、省略可能な(任意の)プロパティになる。
　これをオプショナルプロパティと呼ぶ。*/
type Juice = {
    name: string;//←必須
    flavor?:string;//←任意
};
//上記の場合、flavorプロパティは省略可能なので、以下はコンパイルエラーにはならない
const obj:Juice={
    name:"缶ジュース",
};
console.log(obj);

//必要であれば、オブジェクトに初期値を代入した後にプロパティを追加することができる。
obj.flavor = "りんご味";
console.log(obj);