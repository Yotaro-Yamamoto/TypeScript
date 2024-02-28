class Drink{
    protected _amount:number;//分量
    constructor(amount:number){
        this._amount=amount;
    }
    get amount():number{
        return this._amount;
    }
}
//メソッドのオーバーライド
/*スーパークラスのメソッドをサブクラスで再定義することをオーバーライド(override)と呼ぶ。
　コーヒーに砂糖を入れると、砂糖の分だけ全体の分量が増えるので、Coffeeクラスのアクセサを次のように
　再定義してみよう*/
class Coffee extends Drink{
    private _suger:number;//砂糖の量
    constructor(amount:number,suger:number=0){
        super(amount);//Drinkクラスのコンストラクタを呼び出す
        this._suger=suger;
    }

    get amount():number{
        return this._amount+this._suger;
    }
    /*コーヒークラスでオーバーライドしたsmountメソッドを呼び出すと、スーパークラスのamount
    　メソッドではNACコーヒークラスのamountメソッドが実行される。
    　一方、オーバーライドしていないサブクラスの
      amountメソッドを呼び出すと、スーパークラスのamountメソッドが実行される。*/

      //オーバーライドの使い道
      //スーパークラスから継承したメソッドの処理内容をサブクラスで置き換えたい婆愛に使う

    showAmount():void{//分量を出力するメソッド
        console.log(this._amount);
    }
}