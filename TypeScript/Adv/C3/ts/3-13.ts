//静的な読み取り専用プロパティ
//staticキーワードとreadonly修飾子を併用すると、読み取り専用の静的プロパティになる。
class Drink{
    public static readonly TAX_RATE:number = 0.1;//税率
}
//次のように、どこからでも参照可能になる。
console.log("税率"+Drink.TAX_RATE*100+"%");
/*readonly修飾子がついているので、誤った代入を防ぐことができる。
Drink.TAX_RATE = 0.12;//コンパイルエラー*/
//*readonly修飾子は再起的ではないので、次のようにするとrateとunitを変更できてしまう。
class Drink2{
    public static readonly TAX_RATE={
        rate:10.0,
        unit:"%",
    };
}
Drink2.TAX_RATE.rate=0;//エラーにならない
Drink2.TAX_RATE.unit=""//エラーにならない
//Drink2.TAX_RATE={rate,:0,unit"%"};//コンパイルエラー
console.log(Drink2.TAX_RATE.rate);
console.log(Drink2.TAX_RATE.unit);