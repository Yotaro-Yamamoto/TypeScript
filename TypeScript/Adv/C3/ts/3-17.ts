class Drink{
    //privateとprotectedの使い分け
    /*スーパークラスに固有の性質はprivateを指定して隠蔽し、サブクラスから不用意にアクセスされない
    よう保護する。サブクラスにも共通する性質はprotectedを指定してサブクラスに対して公開する。
    次のコードは、Drinkクラスを継承する全てのサブクラスに共通する性質と考えられることから
    protectedに変更している。こうすることで、Coffeeクラス内ではスーパークラスのアクセサ(getter
    やsetter)を使わなくても自分自身のプロパティとしてthisでプロパティにアクセスできるようになり、
    コードの短縮や可読性の向上に役立つ。*/
    protected _amount:number;//分量
    constructor(amount:number){
        this._amount=amount;
    }
    get amount():number{
        return this._amount;
    }
}
//スーパークラスへのアクセス
/*コーヒーに入っている砂糖の量を表すsugerプロパティを追加してみよう。
　砂糖は全ての飲み物に入っているわけではないので、DrinkクラスではなくCoffeeクラスに実装する。*/
class Coffee extends Drink{
    private _suger:number;//砂糖の量
    //コンストラクタへのアクセス
    /*sugerはCoffeeクラスのコンストラクタd初期化する。amountの初期化は
    　スーパークラスのコンストラクタに任せる。*/
    constructor(amount:number,suger:number=0){
        super(amount);//Drinkクラスのコンストラクタを呼び出す
        this._suger=suger;
        //サブクラスからスーパークラスのコンストラクタを呼び出すにはsuper()を使う。
        /*書式
        　super(引数);*/
    }

    /*プロパティの初期化は、「スーパークラスのプロパティ=>サブクラスのプロパティ」の順に行わなくて
      はならない。スーパークラスのコンストラクタを呼び出す前にサブクラスのプロパティにアクセスする
      とコンパイルエラーになる。
    constructor(amount:number,suger:number=0){
        this._suger=suger;//コンパイルエラー
        super(amount);//Drinkクラスのコンストラクタを呼び出す。
    }*/

    //プロパティとメソッドへのアクセス
    //スーパークラスのプロパティとメソッドはsuperでアクセスする。
    /*書式
    　super.プロパティ名;
    　super.メソッド名(引数);*/
    //次のコードは、スーパークラスのgetterを呼び出す例である。
    showAmount():void{//分量を出力するメソッド
        console.log(this._amount);
    }
}
const coffee = new Coffee(500);
coffee.showAmount();//->500