//抽象クラスのコンストラクタ
/*コンストラクタはabstractをつけて中小メソッドにすることができない。かといって、
　具体的に実装しようにも、初期化するプロパティが抽象プロパティの場合はthisで参照
　することができないので、次のコンストラクタはコンパイルエラーになる。*/
/*abstract class Drink{
    protected abstract _aomunt:number//分量(ml)
    constructor(amount:number){
        //this._aomunt = amount;//コンパイルエラー
    }
    abstract showAmount():void;//分量を出力するメソッド
}*/
//このような場合は、具象クラス側でコンストラクタを実装する。
//抽象クラス
abstract class Drink{
    protected abstract _aomunt: number;//分量(ml)
    constructor(){}
    abstract showAmount():void;//分量を出力するメソッド
}
