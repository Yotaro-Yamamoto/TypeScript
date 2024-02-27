//静的メソッド
//クラスに従属するメソッド
//メソッド銘柄の前にstaticをつけると、静的メソッドになる。
/*書式
[アクセス修飾子] static メソッド名(引数:型注釈):型注釈{}
　静的メソッドは、全てのインスタンスが共有する(クラスに従属する)メソッドなので、
　インスタンスを生成しなくてもクラス名をつけるだけで参照できる。逆に言うと、
　インスタンスからは参照できない。*/
class Drink{
    static isDrink(obj:Drink):boolean{
        return obj = Drink;//objが飲み物ならtrueを返す処理;
    }
    //静的メソッドの使い道
    /*インスタンスを生成して返す処理を静的メソッドにすると、コンストラクタを使わずに
    　インスタンスを得ることができる。*/
    static create(name:Drink):Drink{
        return new Drink(name);
    }
}
const coffee = Drink.create("コーヒー");//newする必要なし
console.log(coffee);

const curry = new Drink("カレー");
console.log(Drink.isDrink(curry));//->false
//console.log(curry.isDrink(curry));//コンパイルエラー
