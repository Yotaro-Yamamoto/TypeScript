//抽象クラス
//抽象クラスとは
/*スーパークラスでabstractをつけたプロパティやメソッドは、サブクラスで同じ名前の
　プロパティやメソッドを実装することが強制されている(実装しなければコンパイルエラー
　になる)。これを抽象プロパティ、抽象メソッドと呼ぶ。また、ひとつでも抽象プロパティ
　や中小メソッドを持つスーパークラスは、クラスの名前にabstractを付けなければならず、
　これを抽象クラスと呼ぶ。*/
/*書式
abstract class 抽象クラス名{...}*/

/*抽象クラスを継承したサブクラスを具象クラスと呼ぶ
　(単にサブクラスと呼ぶこともある)。*/
/*書式
class 具象クラス名 extends 抽象クラス名{...}*/

/*普通のスーパークラスは、継承しなくても直接インスタンス化して使うことができるが、
　抽象クラスは自分自身をインスタンス化して使うことができない。そのため、プログラマ
　に対して「必ず継承して使う」という制約を課すことができる。*/

//抽象プロパティ/抽象メソッド
/*抽象クラス内でabstractをつけて定義したプロパティやメソッドは、具象クラスで必ず
　実装しなければならない。次のコードは、抽象プロパティと抽象メソッドをひとつずつ
　持つ抽象クラスである。*/
abstract class Drink{
    protected abstract _amount:number;//分量(ml)
    constructor(){}
    abstract showAmount():void;//抽象メソッド
    /*抽象メソッドには具体的な処理内容を記述せず、メソッド名や引数などの定義だけを
    　宣言する*/
}

/*Drinkクラスで宣言した具象クラスCoffeeは、amountプロパティとshowAmountメソッド
　を実装しなければコンパイルエラーになる。*/
class Coffee extends Drink{
    //非抽象クラス'Coffee'はクラス'Drink'からの継承抽象メンバー'_amount'を実装しない
    /*非抽象クラス'Coffee'はクラス'Drink'からの継承抽象メンバー'shouwAmount'を実装
     しない*/

    /*次のように、Coffeeクラス自身のプロパティとしてamountを定義し、showAmount
    　メソッドの具体的内容を記述る必要がある。
    */
     protected _sugar:number;//砂糖の量(g)
     protected _amount: number;//分量(ml)

     showAmount(): void {
         console.log(this._amount + this._sugar);
     }
}

const moca = new Coffee();
console.log(moca);
