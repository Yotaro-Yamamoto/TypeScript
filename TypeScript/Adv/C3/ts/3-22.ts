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

//具象クラス
class Coffee extends Drink{
    protected _aomunt: number;//分量(ml)
    protected _sugar:number//砂糖の量(g)
    constructor(amount:number,sugar:number){
        super();//このコンストラクタは何もしない
        this._aomunt = amount;
        this._sugar = sugar;
    }
    showAmount(): void {
        console.log(this._aomunt + this._sugar);
    }
}
/*このとき、具象クラスのコンストラクタでsuper()を最初に実行し、その後で、プロパティの
　初期化を行う必要がある。super()が呼び出すDrinkクラスのコンストラクタは具体的な初期
　化処理を行わないが、文法上の制約により必ず呼び出さなければならない。*/
const moca = new Coffee(100,5);
console.log(moca);
